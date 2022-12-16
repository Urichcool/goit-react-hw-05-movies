import { HomeTrendyStyledListItem, StyledLink } from './HomeTrendyList.styled';

export const HomeTrendyItem = ({ title, id }) => {
  return (
    <HomeTrendyStyledListItem>
      <StyledLink to={`movies/${id}`}>{title}</StyledLink>
    </HomeTrendyStyledListItem>
  );
};
