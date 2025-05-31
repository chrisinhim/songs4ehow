// Import the firebase-admin library to interact with Firebase services.
const admin = require('firebase-admin');
// Import the path module to work with file and directory paths.
const path = require('path');
// Import the service account key JSON file for authentication.
const serviceAccount = require('./ehow-songs-book-firebase-adminsdk-fbsvc-f350a2a9bc.json');

// Initialize the Firebase Admin SDK with the provided service account credentials.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get a reference to the Firestore database.
const db = admin.firestore();

// Asynchronous function to add new fields to all song documents in the 'songs' collection.
async function addFieldsToAllSongs() {
  try {
    const songsCollectionRef = db.collection("songs");
    const snapshot = await songsCollectionRef.get();

    if (snapshot.empty) {
      console.log("No song documents found to update.");
      // If there are no documents, log a message and exit the function.
      return;
    }

    // Create a new Firestore batch for performing multiple write operations atomically.
    let batch = db.batch();
    // Initialize a counter to keep track of the number of updates added to the batch.
    let updatesAdded = 0;

    snapshot.forEach((docSnap) => {
      const songRef = songsCollectionRef.doc(docSnap.id);

      const dataToUpdate = {
        author: "EHOW",
        songbook: "Melodies Of Worship",
        genre: "Worship",
        language: "English",
        history: "Yet to be added",
        verse: "Yet to be added",
        audiolink: "Yet to be added",
        videolink: "Yet to be added",
        createdBy: "Christopher Malapati",
        createdAt: "30 May 2025 at 01:45:09 UTC+5:30",
        updatedBy: "Christopher Malapati",
        updatedAt: "30 May 2025 at 01:45:09 UTC+5:30"
      };

      // Add an update operation to the batch for the current song document.
      batch.update(songRef, dataToUpdate);
      // Increment the counter for added updates.
      updatesAdded++;

      // Commit every 500 updates (Firestore batch limit)
      if (updatesAdded % 500 === 0) {
        // If the number of updates reaches 500, commit the current batch.
        batch.commit();
        // Create a new batch for the next set of updates.
        batch = db.batch();
      }
    });

    // Commit any remaining updates
    if (updatesAdded % 500 !== 0) {
      // If there are remaining updates in the last batch, commit them.
      await batch.commit();
    }

    console.log(`Successfully updated ${updatesAdded} songs.`);
  } catch (error) {
    console.error("Error adding fields to songs:", error);
  }
}

// Call the function to start the process of adding fields to songs.
addFieldsToAllSongs();
