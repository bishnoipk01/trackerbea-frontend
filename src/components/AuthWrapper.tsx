"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect, ReactNode } from "react";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger animation when the component mounts
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path: string) => {
    // Trigger exit animation before navigating
    setIsMounted(false);
    setTimeout(() => router.push(path), 300); // Wait for the animation to complete
  };

  // Check if children is a valid React element before accessing type
  const isReactElement = React.isValidElement(children);
  const childrenType = isReactElement ? children.type : null;

  return (
    <div
      className={`transition-all duration-300 transform ${
        isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      {children}
      <div className="mt-6 text-center">
        <button
          onClick={() =>
            handleNavigate(
              childrenType === "signup" ? "/auth/login" : "/auth/signup"
            )
          }
          className="text-primary hover:underline"
        >
          {childrenType === "signup"
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthWrapper;
