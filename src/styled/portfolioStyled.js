import { styled } from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    background-color: #000;
    .header-inner {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .inner-left {
            h1 {
                font-size: 25px;
            }
        }
        .inner-right  {
            .nav {
                .gnb {
                    display: flex;
                    cursor: pointer;
                    li {
                        margin-left: 30px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
`
export const VisualContainer = styled.section`
    padding: 0px 0px;
    width: 100%;
    height: 80vh;
    .space {
        height: 80px;
    }
    .button {
        position: absolute;
        bottom: 25%;
        left: 50%;
        transform: translate(-50%,-25%);
        button {
            background: #ff44ff;
            color: #ffffff;
            font-weight: 800;
            text-transform: uppercase;
            padding: 20px;
            border-radius: 50px 50px;
            border: none;
            cursor: pointer;;
            &:hover {
                background-color: #c632c6;
            }
        }
    }
`
export const ProjectsContainer = styled.section`
    ul {
        .projectList {
            line-height: 1.8;
            strong{
                font-style: none;

                color:#ff44ff;
            }
            em{ 
                font-style: none;
                color:#3A8BB2;
            }
            h3{
                padding: 100px 0 20px 0;
                    font-size: 35px;
                    color: #42DCA3;
                }
            .demo{
                width: 100%;
                height: auto;
                img{
                    width: 100%;
                }
            }
            .describe {
                text-align: center;
                p{
                    
                }
                .link{
                    font-size: 20px;
                    a {
                        color: #42DCA3;
                        margin-left: 20px;
                        font-weight: 600;
                        &:first-child{
                            margin-left: 0px;
                        }
                    }
                }
                .detail {
                    box-sizing: border-box;
                    padding-top: 20px;
                    text-align: left;
                    li{padding: 5px 0;
                        list-style: circle;
                        ul {
                            li {
                                list-style: outside;
                                
                            }
                        }
                    }
                }
            }
        }
    }
`
export const SkillsContainer = styled.section`
    height: 50vh;
    box-sizing: border-box;
    .skill-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        li {
            padding: 10px 0;
            width: 25%;
        }
    }
`
export const AboutMerContainer = styled.section`
    table {
        padding: 0 20px;
        box-sizing: border-box;
        tr {
            th {
                width: 40%;
                padding: 5px 0;
            }
        }
    }
`
export const FooterContainer = styled.footer`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 32px;
        font-weight: 800;
        line-height: 40px;
    }
        a{
            font-size: 32px;
            font-weight: 800;
            color: #42DCA3;
            span{
                padding-left: 20px;
                box-sizing: border-box;
            }
        }
`