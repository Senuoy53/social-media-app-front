import ErrorsCustomWrapper from "./ErrorsCustomWrapper";

const ErrorsCustom = ({ className, children }: ErrosCustomProps) => {
  return (
    <ErrorsCustomWrapper className={className}>{children}</ErrorsCustomWrapper>
  );
};

export default ErrorsCustom;
