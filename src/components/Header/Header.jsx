import {
    HeaderContainer,
    HeaderNav,
    StyledLink
} from './Header.styled'

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];


export const Header = () => {
    return (
      <HeaderContainer>
        <HeaderNav>
          {navItems.map(({ href, text }) => (
            <StyledLink to={href} key={href}>
              {text}
            </StyledLink>
          ))}
        </HeaderNav>
      </HeaderContainer>
    );
}

