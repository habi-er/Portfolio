import { HeaderContainer } from '../styled/portfolioStyled';
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <HeaderContainer className='header'>
            <div className="header-inner">
                <div className="inner-left">
                    <a href="#"><h1>F = aE</h1></a>
                </div>
                <div className="inner-right">
                    <nav className="nav">
                        <ul className="gnb">
                            <li><Link activeClass="active" to="visual" spy={true} smooth={true} offset={50} duration={500}>SYMBOL</Link></li>
                            <li><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={50} duration={500}>ME?</Link></li>
                            <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>PROJECT</Link></li>
                            <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>SKILLS</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;