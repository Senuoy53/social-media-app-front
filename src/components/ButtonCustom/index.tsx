import { Button } from "@mui/material";

const ButtonCustom = ({ className, children }: ButtonCustomProps) => {
  return (
    <Button variant="contained" className={className}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
