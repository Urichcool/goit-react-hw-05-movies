import { HomeTrendyStyledListItem, StyledLink } from './HomeTrendyList.styled';

export const HomeTrendyItem = ({ title, id }) => {
  return (
    <HomeTrendyStyledListItem>
      <StyledLink
        to={`movies/${id}`}
        state={{ from: '/' }}>{title}
      </StyledLink>
    </HomeTrendyStyledListItem>
  );
};
