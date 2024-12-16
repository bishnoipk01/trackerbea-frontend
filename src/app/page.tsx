import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl font-extrabold md:text-6xl mb-6">
          Welcome to <span className="text-primary">TrackerBea</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          Your ultimate habit and task management app to help you stay on track
          and achieve your goals.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-primary rounded hover:bg-primary/80 text-lg font-semibold"
          >
            Log In
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 text-lg font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose TrackerBea?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-700 rounded shadow hover:bg-gray-600">
              <h3 className="text-xl font-semibold mb-2">Track Habits</h3>
              <p>
                Build and maintain streaks for your habits with easy-to-use
                tracking features.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded shadow hover:bg-gray-600">
              <h3 className="text-xl font-semibold mb-2">Manage Tasks</h3>
              <p>
                Organize your day by scheduling tasks and marking them as
                complete.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded shadow hover:bg-gray-600">
              <h3 className="text-xl font-semibold mb-2">Visualize Progress</h3>
              <p>
                View detailed progress reports for your habits and tasks to keep
                improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
        <p className="mb-8">
          Start managing your habits and tasks effectively with TrackerBea.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-primary rounded hover:bg-primary/80 text-lg font-semibold"
          >
            Log In
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 text-lg font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p>© {new Date().getFullYear()} TrackerBea. All rights reserved.</p>
      </footer>
    </main>
  );
}
