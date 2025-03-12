'useclient'
import { FaGoogle } from "react-icons/fa"
import { auth, signIn } from "../../../auth"

export default async function signInWithGoogle() {
    const session = await auth()

    return
    <form
        action={async () => {
            "use server"
            await signIn("google")
        }}>
        <button
            type="button"
            className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
        >

            <FaGoogle className="mr-2" />
            Sign up with Google
        </button>
    </form>
}