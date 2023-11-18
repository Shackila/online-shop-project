import Button from "./Button.js";
const ProfileDashboard = ({
  showCredentials,
  setShowCredentials,
  username,
  password,
}) => {
  return (
    <div>
      <div className="text-center font-serif text-frog">
        Let's start shopping!
      </div>
      <br />
      <Button>
        <a href="#" onClick={() => setShowCredentials(true)}>
          Show Credentials
        </a>
      </Button>

    </div>
  );
};
export default ProfileDashboard;
