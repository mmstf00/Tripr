import admin from 'firebase-admin';

let firebaseAuth: admin.auth.Auth;

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'tripr-f6338',
    });
  }
  firebaseAuth = admin.auth();
} catch (error) {
  throw new Error('Firebase Admin initialization failed');
}

export { firebaseAuth };

