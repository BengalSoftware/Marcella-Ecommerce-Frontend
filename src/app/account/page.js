import UserProfile from "@/components/account/profile/UserProfile";
import GoogleLogin from "@/components/form/GoogleLogin";
import React from "react";

const AccountPage = () => {
  return (
    <>
      <GoogleLogin />
      <div className="bg-white shadow rounded-lg p-4">
        <h1 className="text-xl font-medium pb-4 border-dashed border-b border-b-primary">
          My Profile
        </h1>
      </div>
      <UserProfile />
    </>
  );
};

export default AccountPage;
