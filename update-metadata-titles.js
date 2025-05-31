const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require('./ehow-songs-book-firebase-adminsdk-fbsvc-f350a2a9bc.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function updateMetadataTitles() {
  try {
    const songsSnapshot = await db.collection('songs').get();

    if (songsSnapshot.empty) {
      console.log('No songs found.');
      return;
    }

    // Gather all songs with their number and title
    const songs = [];
    songsSnapshot.forEach(doc => {
      const data = doc.data();
      if (typeof data.number === 'number' && typeof data.title === 'string') {
        songs.push({ number: data.number, title: data.title });
      }
    });

    // Sort by number ascending
    songs.sort((a, b) => a.number - b.number);

    // Build titles array: titles[x-1] = title of song with number x
    const titles = [];
    songs.forEach(song => {
      titles[song.number - 1] = song.title;
    });

    // Remove any undefined holes (if song numbers are not contiguous)
    const compactTitles = titles.filter(Boolean);

    // Update the metadata/songs_meta document
    const metaDocRef = db.collection('metadata').doc('songs_meta');
    await metaDocRef.update({ titles: compactTitles });

    console.log(`Updated metadata/songs_meta.titles with ${compactTitles.length} titles.`);
  } catch (error) {
    console.error('Error updating metadata titles:', error);
  }
}

updateMetadataTitles();