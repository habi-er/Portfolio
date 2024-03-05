import { ProjectsContainer } from '../styled/portfolioStyled';
import { FaProjectDiagram } from "react-icons/fa";
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <div className="inner">
                <h2>PROJECTS</h2>
                <ul >
                    <li className='projectList'>
                        <h3> <FaProjectDiagram /> Solar system in universe</h3>
                        <div className="demo">
                            <img src="/images/universeProject.gif" alt="universeProject" />
                        </div>
                        <div className="describe">
                            <p><strong>React</strong>를 활용하여 다양한 Js기반의 언어(<strong>Three.js</strong>)를 공부하고 싶었습니다.</p>
                            <p>인터랙티브 웹에서 <strong>3D 태양계</strong>를 구현해 사용자와 상호작용하는 새로운 경험을 만들었습니다. 카메라 이상의 동적 상호작용으로, 개인화된 <em>천체 관찰</em>을 가능케 했습니다.</p>
                            <div className="link">
                                <a href="https://github.com/Cheol-s-Jeans/Universe"target='_blank'>[GitHub]</a>
                                <a href="https://solarsystem-in-universe.netlify.app/" target='_blank'>[Visit]</a>
                            </div>
                            <ul className='detail'>
                                <li>
                                    기간: 2024/2/1 ~ 2024/3/3
                                </li>
                                <li>
                                    인원: 2명
                                </li>
                                <li>
                                    작업 툴: React, Three.js, React-three-fiber, gsap, styled-components, SASS
                                </li>
                                <li>
                                    직접 수행한 작업
                                    <ul>
                                        <li>여러개의 행성 생성 시, <strong>MeshComponent</strong>로 생성하여 React의 재사용성을 높임</li>
                                        <li><strong>raycaster</strong>를 이용하여 3Dobject 객체에 동적인 효과를 주어 사용자의 <em>UI향상</em></li>
                                        <li><strong>StarFiled</strong>를 Point와 Vector로 구현하여 <em>3D 공간의 체험력</em>을 향상</li>
                                        {/* <li>드래그하여 별자리 생성시 vector 값을 저장하는 로직을 구현</li> */}
                                        {/* <li>케플러의 법칙을 코드화하여 각각의 행성 공전 궤도를 구현</li> */}
                                    </ul>
                                </li>
                                <li>
                                    문제 및 해결:
                                    <ul>
                                        <li>
                                        프로젝트를 진행하면서 가장 큰 어려움은 <strong>Three.js와 React-Three-Fiber(R3F)에 대한 한국어 정보의 부족</strong>이었습니다. 이 문제를 해결하기 위해, 저는 <strong>공식 사이트</strong>를 적극적으로 활용하게 되었습니다. 이전에는 Google 검색을 통해 블로그나 T story 같은 커뮤니티 사이트에 의존했지만, 이 프로젝트를 통해 <em>공식 문서의 중요성</em>을 깨달을 수 있었습니다.
                                        </li>
                                        <li>
                                        행성에 클릭 이벤트를 추가하여 카메라가 행성에 줌인되는 기능을 구현하는 과정에서도 문제가 있었습니다. 각 행성이 여러 개의 메쉬로 구성되어 있고, 그 중 태양을 기준으로 위치 값을 가진 메쉬는 단 하나뿐이었기 때문입니다. 이 문제를 해결하기 위해, <strong>Three.js의 레이캐스터</strong>를 활용하여 마우스가 오브젝트와 교차할 때 해당 오브젝트를 찾아냈습니다. 이를 위해 <strong>while문</strong>을 사용하여 오브젝트의 이름 값을 찾아 특정 메쉬를 가려내는 방식을 사용했습니다. 결과적으로, 각 행성의 위치 값을 정확히 파악하여 <em>카메라 무빙 효과</em>를 완성시키는 데 성공했습니다. 이를 통해 사용자가 천체를 더욱 편하게 관람할 수 있게 만드는 데 기여하였습니다.
                                        </li>
                                        <li>
                                            이 경험들은 공식 문서를 통한 학습의 중요성과 문제 해결 능력을 키우는 데 큰 도움이 되었습니다.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='projectList'>
                        <h3> <FaProjectDiagram /> VALORANT</h3>
                        <div className="demo">
                            <img src="/images/valorantProject.gif" alt="valorantProject" />
                        </div>
                        <div className="describe">
                            <p><strong>React와 상태관리를 위한 Redux의 연습</strong>이 목적이였습니다.</p>
                            <p>기존 홈페이지와는 다르게 <em>게임 내의 굿즈를 구매(굿즈 페이지)</em> 하며, <em>다른 사용자들과 소통할 수 있는 공간(커뮤니티 페이지)</em>을 제공하는 기능을 구현하였습니다.
                                </p>
                            <div className="link">
                                <a target="_blank" href="https://github.com/ezen-iron-bro/project_Valorant">[GitHub]</a>
                                <a target="_blank" href="https://ironbro-valorant.netlify.app/">[Visit]</a>
                            </div>
                            <ul className='detail'>
                                <li>
                                    기간: 2023/7/1 ~ 2023/8/10
                                </li>
                                <li>
                                    인원: 2명
                                </li>
                                <li>
                                    작업 툴: React, Redux, styled-components, SASS
                                </li>
                                <li>
                                    직접 수행한 작업 및 페이지
                                    <ul>
                                        <li><em>메인, 순위표, 커뮤니티, 로그인/회원가입 페이지</em> 담당</li>
                                        <li><strong>Redux와 localStorage</strong>를 이용하여 회원가입 및 로그인 구현</li>
                                        <li>순위표에서 <em>유저 검색시, 자동 paging 구현</em></li>
                                        <li><strong>Redux</strong>를 통한 커뮤니티 구현 및 <em>24시간 기준</em> 최다 댓글과 최다 조회 Sort 구현</li>
                                    </ul>
                                </li>
                                <li>
                                    문제 및 해결:
                                    <ul>
                                        <li>
                                        프로젝트를 진행하던 중, 웹 페이지를 새로고침하거나 다른 액션을 디스패치할 때 <em>카테고리 클릭 이벤트에만 종속적인 localStorage에 State가 저장되지 않는 문제</em>에 직면하였습니다. 이를 해결하기 위해 <strong>Redux의 미들웨어</strong>를 활용하여 모든 액션 디스패치 후에도 localStorage에 state가 저장되게 로직을 수정하였습니다.
                                        </li>
                                        <li>
                                        그런데 이렇게 하니 <em>state의 크기가 커져 성능에 영향을 줄 수 있다는 새로운 문제</em>가 발생하였습니다. 이 문제를 해결하기 위해 <strong>필요한 필드만 localStorage에 저장하도록 코드를 수정</strong>하였고, <em>성능 저하 문제를 해결</em>할 수 있었습니다.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='projectList'>
                        <h3> <FaProjectDiagram /> 이화여대 -  remake</h3>
                        <div className="demo">
                            <img src="/images/ehwaProject.gif" alt="ehwaProject" />
                        </div>
                        <div className="describe">
                            <p><strong>HTML, Vanilla JS</strong>를 이용한 이화여대 리메이크 홈페이지입니다.</p>
                            <p>기존 홈페이지에서 다른 대학들의 페이지의 마크업을 이용하여 새롭게 리메이크하였습니다.
                                </p>
                            <div className="link">
                                <a target="_blank" href="https://github.com/ChuGyeong/Ewha">[GitHub]</a>
                                <a target="_blank" href="https://chugyeong.github.io/Ewha/pc/">[Visit]</a>
                            </div>
                            <ul className='detail'>
                                <li>
                                    기간: 2023/4/28 ~ 2023/5/1
                                </li>
                                <li>
                                    인원: 4명
                                </li>
                                <li>
                                    작업 툴: HTML, CSS, Javascript
                                </li>
                                <li>
                                    직접 수행한 작업 및 페이지
                                    <ul>
                                        <li><em>로그인 및 회원가입, 시설안내, 학생활동, 축제/이벤트 페이지</em> 담당</li>
                                    </ul>
                                </li>
                                <li>
                                    문제 및 해결:
                                    <ul>
                                        <li>
                                        첫 팀 프로젝트다 보니 개발 자체의 문제보다는 다른 문제가 있었습니다.
프로젝트의 진행 과정에서, 저는 팀원들과 함께 주어진 데드라인을 준수하며 작업을 진행하였습니다. 그러나 이 과정에서 제가 처음 도전해보는 작업이었기에, <strong>자신만만하게 혼자서 모든 문제를 해결하려는 욕심이 앞섰습니다</strong>. 이로 인해, 데드라인을 넘길 위기에 처했습니다.<br/>

하지만, 이런 어려움 속에서도 저는 중요한 깨달음을 얻었습니다. 바로 '<em>도움을 청하는 것의 중요성</em>'입니다. 결국 마지막에 가서 도움을 요청한 덕분에, 문제를 신속하게 해결할 수 있었습니다. 이 경험은 저에게 팀 작업의 중요성, 그리고 함께 성장하는 방법을 깨닫게 해주었습니다.<br/>

이를 통해, 저는 개인의 역량도 중요하지만 <strong>팀원들과의 협력이 더욱 중요하다는 것을 깨달았습니다</strong>. 이 경험은 저에게 큰 자산이 되었으며, 앞으로의 팀 프로젝트에서도 이를 바탕으로 더욱 효율적인 협력을 이끌어낼 수 있을 것이라 자신합니다. 이 경험은 저의 성장과정에서 가장 중요한 경험 중 하나로, 이를 통해 저는 더욱 성숙해질 수 있었습니다.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </ProjectsContainer>
    );
};

export default Projects;