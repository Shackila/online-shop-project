const ProfileDashboard = ({
  showCredentials,
  setShowCredentials,
  username,
  password,
}) => {
  return (
    <div>
      <div className="text-sm md:text-xl text-center font-serif">
        Let's start shopping!
      </div>
      <br />
      <link href="#" onClick={() => setShowCredentials(true)}>
        Show Credentials
      </link>
      {showCredentials && (
        <div>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
};
export default ProfileDashboard;
