import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "../component/input";
import Link from "next/link";
import Button from "../component/button";
import signInWithGoogle from "../component/signinwithgoogle";

export default function SignUp() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <div className="w-full bg-white rounded-lg shadow border border-gray-200 max-w-md p-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6 mt-4" method="POST">
          {/* Use the Input component */}
          <Input
            label="Your full name"
            type="text"
            name="name"
            id="name"
            placeholder="Hashir Madani"
            required={true}
          />
          <Input
            label="Email"
            type="text"
            name="email"
            id="email"
            placeholder="hashirmadani@courses.com"
            required={true}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required={true}
          />
          <Button type="sumbit">Create an account</Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Google SignIn Component */}
          <signInWithGoogle/>
            <button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              <FaFacebook className="mr-2" />
              Sign up with Facebook
            </button>
          </div>
          <p className="text-sm font-light text-gray-500 text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-green-600 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}