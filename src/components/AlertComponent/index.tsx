import { Alert } from "@mui/material";

const AlertComponent = ({
  className,
  children,
  severity,
  sx,
}: AlertComponentProps) => {
  return (
    <Alert className={className} severity={severity} sx={sx}>
      {children}
    </Alert>
  );
};

export default AlertComponent;
