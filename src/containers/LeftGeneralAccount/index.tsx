import ButtonCustom from "../../components/ButtonCustom";

const LeftGeneralAccount = ({
  LeftTitle,
  profileImg,
  ButtonFields1,
  ButtonFields2,
  onChange,
  onClick,
}: LeftGeneralAccountProps) => {
  return (
    <>
      <h4 className="gaTitle">{LeftTitle}</h4>

      <div className="img-holder">
        <img src={profileImg} alt="" id="img-profil" className="img-profil" />
      </div>
      <input
        type="file"
        name="photo"
        id="input-upload"
        accept="image/*"
        onChange={onChange}
      />
      <div className="img-label">
        <label htmlFor="input-upload" className="img-upload">
          {ButtonFields1}
        </label>
        <ButtonCustom className="btn-2" onClick={onClick}>
          {ButtonFields2}
        </ButtonCustom>
      </div>
    </>
  );
};

export default LeftGeneralAccount;
