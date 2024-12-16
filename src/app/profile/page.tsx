"use client";
import Button from "../../components/Button";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <Button onClick={() => console.log("Updating Profile")}>
        Update Profile
      </Button>
    </div>
  );
};

export default Profile;
