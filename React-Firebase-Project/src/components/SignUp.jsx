import { app } from "../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const SignUp = () => {
    const [user, setUser] = useState(null); // State to store user information

    const signupWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const signedInUser = result.user;
            setUser(signedInUser);
            console.log("User signed in successfully:", signedInUser);
        } catch (error) {
            console.error("Error signing in: ", error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {!user ? (
                <button
                    onClick={signupWithGoogle}
                    className="bg-white px-4 py-2 text-black rounded-xl shadow-md hover:bg-gray-100"
                >
                    Sign In with Google
                </button>
            ) : (
                <div className="flex items-center space-x-4">
                    <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h2 className="text-lg font-bold">{user.displayName}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
