const CustomReactionBtn = ({
  className,
  SvgImg,
  id,
  text,
  onClick,
}: CustomReactionBtnProps) => {
  return (
    <div className={className} onClick={onClick} id={id}>
      <img src={SvgImg} className="icon" id={id} />
      <span className="like-text" id={id}>
        {text}
      </span>
    </div>
  );
};

export default CustomReactionBtn;
