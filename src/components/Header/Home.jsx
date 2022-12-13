import {
    HeaderContainer,
  HeaderNav, 
  StyledLink
} from './Home.styled'



const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Home = () => {
    return (
        <HeaderContainer>
            <HeaderNav>
                {navItems.map(({ href, text }) => 
                   <StyledLink to={href} key={href}>
                    {text}
                    </StyledLink>
                )}
       </HeaderNav>
            </HeaderContainer>
    );

}