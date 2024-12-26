# React Firebase Admission App

A simple React app built using Vite, Tailwind CSS, and Firebase. This project includes a sign-up functionality with Google authentication and an admission form to store user data in Firebase Realtime Database.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installing Tailwind CSS](#installing-tailwind-css)
3. [Setting Up Firebase](#setting-up-firebase)
4. [Building Components](#building-components)
   - [AdmissionForm Component](#admissionform-component)
   - [SignUp Component](#signup-component)
5. [Adding Components to App.js](#adding-components-to-appjs)
6. [Finalizing the Project](#finalizing-the-project)

---

## Getting Started

### Step 1: Install React using Vite

1. Create a new Vite project:
   ```bash
   npm create vite@latest react-firebase-app --template react
   ```
2. Navigate to the project directory:

```bash
cd react-firebase-app
```

3. Install dependencies:

```bash
npm install
```

4.Start the development server:

```bash
npm run dev
```

Installing Tailwind CSS
Install Tailwind CSS dependencies:

```bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure tailwind.config.js:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind directives to your CSS file (index.css):

```css

@tailwind base;
@tailwind components;
@tailwind utilities;
Run the development server to ensure Tailwind CSS is working.
```

Setting Up Firebase
Install Firebase:

```bash

npm install firebase
```

Create a Firebase project in the Firebase Console.

Add your app's Firebase configuration to a new file src/configuration.js:

```javascript
// src/configuration.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
```

Enable Google Authentication and Realtime Database in Firebase Console.

Building Components
AdmissionForm Component
Create a form to collect user details and save them to Firebase Realtime Database.

```javascript
// src/components/AdmissionForm.js
import React, { useState } from "react";
import { getDatabase, ref, set} from "firebase/database";
import {app} from "../firebaseConfig";

//creating db instance
const myDB= getDatabase(app);

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    email: "",
    phone: "",
    address: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const fName = formData.name.split(" ")[0].toLowerCase();
    set(ref(myDB, `forms/${fName}`), {
      ...formData
    })
    
  };



  return (
    <div className="w-full mt-8 text-black mx-auto p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-6">School Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="picture" className="block text-sm font-medium text-gray-700">Upload Picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdmissionForm;

```

SignUp Component
Allow users to sign in with Google and display their avatar.

```javascript
// src/components/SignUp.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { app } from "../configuration";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function SignUp() {
  const [user, setUser] = useState(null);

  const signupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div>
      {!user ? (
        <button
          onClick={signupWithGoogle}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Sign In with Google
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <img
            src={user.photoURL}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <p>Welcome, {user.displayName}</p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
```

Adding Components to App.js
Update your App.js to include the components:

```javascript
import React from "react";
import AdmissionForm from "./components/AdmissionForm";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <SignUp />
      <div className="mt-8">
        <AdmissionForm />
      </div>
    </div>
  );
}

export default App;
```

Finalizing the Project
Start the development server:

```bash

npm run dev
```

Test the following features:

Sign in with Google.
Submit the admission form and verify the data in Firebase Realtime Database.
Done! 🎉
