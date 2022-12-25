import { HeaderContainer, HeaderNav, StyledLink } from './Header.styled';
import { BiMovie } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

const navItems = [
  { href: '/', text: 'Home', icon: <AiOutlineHome /> },
  { href: '/movies', text: 'Movies', icon: <BiMovie /> },
];

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        {navItems.map(({ href, text, icon }) => (
          <StyledLink to={href} key={href}>
            {icon} <p style={{ margin: 0, marginLeft: 10 }}>{text}</p>
          </StyledLink>
        ))}
      </HeaderNav>
    </HeaderContainer>
  );
};
