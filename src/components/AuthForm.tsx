"use client";
import React, { useState } from "react";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "signup" && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(type === "login" ? "Logging In" : "Signing Up", {
      email,
      password,
      fullName,
    });
    // Add your API call or form logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        className={`w-full max-w-md p-6 bg-gray-800 rounded shadow-lg transition-all duration-500 ${
          type === "signup" ? "h-[28rem]" : "h-[22rem]"
        }`}
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          {type === "login" ? "Log In to TrackerBea" : "Sign Up for TrackerBea"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <div>
              <label
                htmlFor="fullName"
                className="block mb-1 text-sm font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          {type === "signup" && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary rounded hover:bg-primary/80 text-lg font-semibold"
          >
            {type === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          {type === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-primary hover:underline"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Log In
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
