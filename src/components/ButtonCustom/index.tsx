import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../styles/global-styles";

// Styles
const StyleButton = styled(Button)({
  padding: "3px 30px",
  textTransform: "capitalize",
  borderRadius: "50px",
  backgroundColor: theme.colors.BlueBg,
  "&:hover": {
    backgroundColor: theme.colors.HoverBlueBg,
  },
});

const ButtonCustom = ({ className, children, onClick }: ButtonCustomProps) => {
  return (
    <StyleButton variant="contained" className={className} onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default ButtonCustom;
