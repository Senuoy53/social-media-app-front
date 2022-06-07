import OnlineColleaguesWrapper from "./onlineColleaguesWrapper";
import { Avatar, Badge, styled } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const OnlineColleagues = ({
  className,
  fname,
  lname,
  profilePicture,
}: OnlineColleaguesProps) => {
  return (
    <OnlineColleaguesWrapper className={className}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant="dot"
        className="ocBadge"
      >
        <Avatar
          className="avatarUser"
          sx={{
            width: { sm: "20px", md: "30px", lg: "40px" },
            height: { sm: "20px", md: "30px", lg: "40px" },
          }}
          alt="Profile picture"
          src={profilePicture}
        />
      </StyledBadge>
      <span className="ocUsername">{fname + " " + lname}</span>
    </OnlineColleaguesWrapper>
  );
};

export default OnlineColleagues;
