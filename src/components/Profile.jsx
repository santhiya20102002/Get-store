import React from "react";
// import "src/pro.css";
function Profile({ user }) {
  return (
    <div className="profile-box">
      <h1>Welcome, {user}</h1>
      <p>Manage your profile and view your order history here.</p>
    </div>
  );
}

export default Profile;
