// filepath: upload-songs.js
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Path to your service account key
const serviceAccount = require('./ehow-songs-book-firebase-adminsdk-fbsvc-f350a2a9bc.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const SONGS_DIR = path.join(__dirname, 'songfiles'); // Folder with your .txt files

async function uploadSongs() {
  const files = fs.readdirSync(SONGS_DIR).filter(f => f.endsWith('.txt'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(SONGS_DIR, file), 'utf8');
    const title = file.replace('.txt', '');
    // You can extract a number if you want to sort numerically
    const number = parseInt(title.match(/^\d+/)?.[0] || '0', 10);
    await db.collection('songs').doc(title).set({
      title,
      content,
      number
    });
    console.log(`Uploaded: ${title}`);
  }
  console.log('All songs uploaded!');
}

uploadSongs().catch(console.error);