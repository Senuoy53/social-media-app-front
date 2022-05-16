import ShowReactionCounterWrapper from "./ShowReactionCounterWrapper";

const ShowReactionCounter = ({ id, children }: ShowReactionCounterProps) => {
  return (
    <ShowReactionCounterWrapper id={id}>{children}</ShowReactionCounterWrapper>
  );
};

export default ShowReactionCounter;
