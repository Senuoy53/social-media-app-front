import Navbar from "../../components/Navbar";
import GeneralAccountSetting from "../../containers/GeneralAccountSettings";
import GeneralAccountPageWrapper from "./GeneralAccountPageWrapper";

const GeneralAccountPage = () => {
  return (
    <GeneralAccountPageWrapper>
      <Navbar />
      <div className="main">
        <GeneralAccountSetting />
      </div>
    </GeneralAccountPageWrapper>
  );
};

export default GeneralAccountPage;
