import { FooterContainer } from '../styled/portfolioStyled';
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <FooterContainer className='footer'>
            <p>KICHEOL KIM</p>
                <a href='https://github.com/habi-er' target='_blank'>@HABI-ER
                <span><FaGithub /></span>
                </a>
        </FooterContainer>
    );
};

export default Footer;