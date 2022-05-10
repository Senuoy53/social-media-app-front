import PostContainer from "../PostContainer";
import FeedContainerWrapper from "./FeedContainerWrapper";

const FeedContainer = () => {
  return (
    <FeedContainerWrapper>
      Feed
      <PostContainer
        avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Younes Lamrani"
        subheader="Mai 09 2022, 18:35 pm"
        desc="Hello guys, whats'up ?"
        img="https://images.pexels.com/photos/1686451/pexels-photo-1686451.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
      <PostContainer
        avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Amine Sadali"
        subheader="April 10 2022, 15:15 pm"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque fugit, error quia culpa ipsum quaerat minima a exercitationem voluptas!Delectus."
        img="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <PostContainer
        avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Monaim Touinssi"
        subheader="April 01 2022, 11:03 am"
        desc="First Post"
        img="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
