import LoadingComponentWrapper from "./LoadingComponentWrapper";

const LoadingComponent = ({
  className,
  width,
  height,
  scale,
}: LoadingComponentsProps) => {
  return (
    <LoadingComponentWrapper
      className={className}
      width={width}
      height={height}
      scale={scale}
    >
      <div className="ldio-6et9i5bxmr3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingComponentWrapper>
  );
};

export default LoadingComponent;
