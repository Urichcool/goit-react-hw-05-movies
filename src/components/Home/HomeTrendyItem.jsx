import { HomeTrendyStyledListItem, StyledLink } from './HomeTrendyList.styled';
import PropTypes from 'prop-types';

export const HomeTrendyItem = ({ title, id }) => {
  return (
    <HomeTrendyStyledListItem>
      <StyledLink to={`movies/${id}`} state={{ from: '/' }}>
        {title}
      </StyledLink>
    </HomeTrendyStyledListItem>
  );
};

HomeTrendyItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
