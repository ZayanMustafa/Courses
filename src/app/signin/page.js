import Input from "../component/input";
import Link from "next/link";

export default async function SignIn() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <div className="w-full bg-white rounded-lg shadow border border-gray-200 max-w-md p-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6 mt-4" method="POST">
          {/* Use the Input component for email/username */}
          <Input
            label="Your email or username"
            type="text"
            name="username"
            id="username"
            placeholder="name@company.com"
            required={true}
          />

          {/* Use the Input component for password */}
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required={true}
          />

          {/* Remember me checkbox */}
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">
                  Remember me
                </label>
              </div>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-green-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
          >
            Sign in
          </button>

          {/* Sign up link */}
          <p className="text-sm font-light text-gray-500 text-center">
            Don’t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-medium text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}