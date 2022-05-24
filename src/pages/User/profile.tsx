import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  return (
    <div>
      <div className="uppercase"><FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>General setting</div>
      <p>personal information</p>
      <p>Edit You Information To Get People To Know You.</p>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>complete your social media</p>
      <p>Connect Your Social Media Accounts</p>
    </div>
  );
};

export default UserProfile;