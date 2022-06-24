import Navbar from "../../components/Navbar";
import AccountSecuritySettings from "../../containers/AccountSecuritySettings";
import AccountSecurityPageWrapper from "./AccountSecurityPageWrapper";

const AccountSecurityPage = () => {
  return (
    <AccountSecurityPageWrapper>
      <Navbar />
      <div className="main">
        <AccountSecuritySettings />
      </div>
    </AccountSecurityPageWrapper>
  );
};

export default AccountSecurityPage;
