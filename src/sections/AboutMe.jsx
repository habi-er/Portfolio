import { AboutMerContainer } from '../styled/portfolioStyled';

const AboutMe = () => {
    return (
        <AboutMerContainer id="aboutme">
            <div className="inner">
                <h2>ABOUT ME</h2>
                <table>
                    <tbody>
                    <tr >
                        <th>이름</th>
                        <td>김기철</td>
                    </tr>
                    <tr>
                        <th>생년월일</th>
                        <td>1994.07.02</td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>010-4707-5229</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>habier15724@gmail.com</td>
                    </tr>
                    <tr>
                        <th>거주지</th>
                        <td>경기도 부천시 원미구</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </AboutMerContainer>
    );
};

export default AboutMe;