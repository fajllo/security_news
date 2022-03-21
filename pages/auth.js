import { auth, googleAuthProvider, signIn, logOut } from "../lib/firebase";
import { useRouter } from "next/router";
export default function SignIn() {
  const router = useRouter();
  const signOut = () => {
    logOut(auth);
    router.reload();
  };
  const singInWithGoogle = async () => {
    await signIn(auth, googleAuthProvider);
  };
  return (
    <div className="m-4">
      <button
        className="bg-rose-400 m-4 p-4  rounded-md"
        onClick={singInWithGoogle}
      >
        G SignIn
      </button>
      <button className="bg-blue-200 p-4  rounded-md " onClick={signOut}>
        Log out
      </button>
    </div>
  );
}
