import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";
import { Link } from "react-router-dom";

const InstructorTag = ({ instructor }) => {
  const { emoji, name, slug } = instructor;

  return (
    <Link goTo={`/instructors/${slug}`}>
      <TagWrapper>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile goTo="/">Go to profile</GoToProfile>
      </TagWrapper>
    </Link>
  );
};

export default InstructorTag;
