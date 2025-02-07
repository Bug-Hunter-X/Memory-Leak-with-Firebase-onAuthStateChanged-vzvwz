# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function: memory leaks due to missing unsubscribe.  The `onAuthStateChanged` function returns an unsubscribe function, and forgetting to call this function can lead to a memory leak where the listener continues to run even after it's no longer needed.  This example shows the problem and how to fix it.

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-github-username>/firebase-onauthstatechanged-memory-leak.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase (replace with your own config):
   - Create a `firebase.json` file according to Firebase documentation
4. Run the application: