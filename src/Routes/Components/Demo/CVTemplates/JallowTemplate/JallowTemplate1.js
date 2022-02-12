import React, { Component, useEffect } from 'react';
import Pdf from "react-to-pdf";
import profile1 from './imgs/profile1.png'
import "../../../../css/CVJallowTemplate1.css";

// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

const ref = React.createRef();

function NavbarLogo() {
    return(
        <div className='jallowTemp1DivLogoSec'>
            <div className='jallowTemp1ImageLogo'>
                <img src='https://cdn5.vectorstock.com/i/1000x1000/92/29/initial-letter-cv-logo-template-design-vector-21949229.jpg' width="70px" height="60px" alt='logo' />
            </div>
            <div className='jallowTemp1IconLogo'>
                <a href="#"><i className="fas fa-mobile"></i></a>
                <a href="#"><i className='fas fa-tablet'></i></a>
            </div>
        </div>
    )
}

function Toggle() {
    return(
        <>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className='jallowTemp1Checkbtn'>&#9776;</label>
        </>
    )
}

// Language implementation
const languages = [
  {
    code: "en",
    country_code: "gb",
  },  
{
    code: "gr",
    country_code: "gr",
  }
  ];
function Menu() {
    // language implementation
    const currentLanguageCode = cookies.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const { t } = useTranslation();
  
        // language implementation
    useEffect(() => {
      document.body.dir = currentLanguage.dir || "ltr";
      document.title = t("appTitle");
    }, [currentLanguage, t]);
  
    return(
        <div>
            <Toggle />
            <ul className="jallowTemp1MenuList">
                <li className='jallowTemp1MenuLink jallowTempBack'><a href='http://localhost:3000/templates'>Back</a></li>
                <li className='jallowTemp1MenuLink'><a href='#'>Resume</a></li>
                <li className='jallowTemp1MenuLink'><a href='#'>Portfolio</a></li>
           
                  <ul
                    className="jallow_cv_template"
                  >
                    {languages.map(({ code, country_code }) => (
                      <li key={country_code} className="jallow_cv_template_li">
                        <a
                          href="#!"
                          className={classNames("dropdown-item", {
                            disabled: currentLanguageCode === code,
                          })}
                          onClick={() => {
                            i18next.changeLanguage(code);
                          }}
                        >   
                          <span
                            className={`flag-icon flag-icon-${country_code} mx-2`}
                            style={{
                              opacity: currentLanguageCode === code ? 0.7 : 1,
                            }}
                          ></span>
                        </a>
                      </li>
                    ))}
                  </ul>
            </ul>
            
        </div>
    )
}

function JallowTemplate1() {
    return (
        <>
            <div id="jallowCVT">
                <Pdf targetRef={ref} filename="resume.pdf">
                    {({ toPdf }) => <button id="jallowTemp1Pdf" onClick={toPdf}>Save Pdf</button>}
                </Pdf>
                <div className='jallowTemp1NavNavbar'>
                    <NavbarLogo />
                    <Menu />
                </div>
                    
                <div className="jallowCVTPage" id="toPrint" ref={ref}>
                        <div className='jallowTemp1SubSection'>
                            <div className='jallowTemp1ProfileContainer'>
                                <div className='jallowTemp1ProfileHead'>
                                    <img src={profile1} alt='Profile Picture' />
                                    <h1 className='jallowTemp1ProfileName'>NICOLA RIDER</h1>
                                    <p className='jallowTemp1ProfileTitle'>Web Developer</p>
                                </div>
                                <div className='jallowTemp1InfoDetails'>
                                    <div className='jallowTemp1Contact'>
                                        <i className="fas fa-user-tie"></i>
                                        <p>My journey to became a professional developer as been inspiring, having coding engaged with so many Bootcam and Startups was a challang and so experience. Meeting Professional developers was a step forward to reach my goals today.</p>
                                    </div>
                                    <div className='jallowTemp1Contact'>
                                    <i className="fas fa-phone-alt"></i>
                                        <div className='jallowTemp1TestCol'>
                                            <p>(+30) 55 99 5555</p>
                                            <p>(+30) 555 999 5555</p>
                                        </div>
                                    </div>
                                    <div className='jallowTemp1Contact'>
                                        <i className="fas fa-envelope"></i>
                                        <div className='jallowTemp1TestCol'>
                                            <p>info@mail.com</p>
                                            <p>email@mail.com</p>
                                        </div>
                                    </div>
                                    <div className='jallowTemp1Contact'>
                                        <i className="fas fa-map"></i>
                                        <div className='jallowTemp1TestCol'>
                                            <p>101 Street Avenue</p>
                                            <p>Omonia Street 105</p>
                                        </div>
                                    </div>
                                    <div className='jallowTemp1Contact'>
                                        <div className='jallowTemp1SkillsPersonal'>
                                            <p className='jallowTemp1Skills'><i className="far fa-file"></i>Personal skills</p>
                                            <ul className='jallowTemp1ContactSkills'>
                                                <li>Adobe Photoshop</li>
                                                <li>HTML 5 & CSS 3</li>
                                                <li>Java Script</li>
                                                <li>Adobe Illustrator</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='jallowTemp1Body'>
                                <div className='jallowTemp1ContentSide'>
                                    <div className='jallowTemp1ContentSubSec'>
                                        <h1 className='jallowTemp1ContentH1'><i className="fas fa-check-double"></i> Work Experience</h1>
                                        <p className='jallowTemp1ContentTitle'>UI SOFTWARE ENGINEER @ Amnick</p>
                                        <p className='jallowTemp1ContentDate'>JAN 2021 - Present</p>
                                        <p className='jallowTemp1ContentInfo'>HCL Volt MX supports business and IT leadership to focus on high-value digital and operational strategic initiatives. Developing a dev-up platform that empowers professional developers, enterprise architects, and digital designers to rapidly deliver consumer-grade apps.</p>
                                    </div>
                                    <div className='jallowTemp1ContentSubSec'>
                                        <p className='jallowTemp1ContentTitle'>HiTech Designer @ Creative World</p>
                                        <p className='jallowTemp1ContentDate'>FEB 2018 - JUL 2019</p>
                                        <p className='jallowTemp1ContentInfo'>Built a powerful desktop app for sharing and collaboratively with its cloud features such as role-based permissions, real time editing, annotated comments and design approvals to name a few.</p>
                                    </div>
                                </div>
                                    
                                <div className='jallowTemp1ContentSide'>
                                    <div className='jallowTemp1ContentSubSec'>
                                        <h1 className='jallowTemp1ContentH1'><i className="fas fa-graduation-cap"></i> Education</h1>
                                        <p className='jallowTemp1ContentTitle'>Full Stack Developer @ Social Hackers Academy</p>
                                        <p className='jallowTemp1ContentDate'>SEP 2018 - DEC 2020</p>
                                        <p className='jallowTemp1ContentInfo'>Full Stack web developer at (SHA) Institution Studies. Study the most advance tech languages on how to built dynamic websites using React, Angular, Jquery, Nodejs Javascript, HTML and CSS.</p>
                                    </div>
                                    <div className='jallowTemp1ContentSubSec'>
                                        <p className='jallowTemp1ContentTitle'>Art & Multimedia @ London University</p>
                                        <p className='jallowTemp1ContentDate'>JAN 2016 - DEC 2018</p>
                                        <p className='jallowTemp1ContentInfo'>Specialize in the art of designing and creating games for computers, video game consoles, tablets and smartphones, aiming at a unique user experience. Concentrating on game planning, math and physics, but also on problem-solving skills.</p>
                                    </div>
                                    <div className='jallowTemp1ContentSubSec'>
                                        <p className='jallowTemp1ContentTitle'>Post Graduate @ Harvard University</p>
                                        <p className='jallowTemp1ContentDate'>MAR 2010 - DEC 2012</p>
                                        <p className='jallowTemp1ContentInfo'>
                                            IT Fundaamentals for Business Professional Programming.<br />
                                            Computer Science Essentials for Software Development..<br/>
                                            Indroduction to Programming in C++
                                        </p>
                                    </div>
                                </div>

                                <div className='jallowTemp1ContentSide'>
                                    <p className='jallowTemp1ContentInterest'><i className="fas fa-stopwatch"></i> Interests</p>
                                        <div className='jallowTemp1ContentHobbies'>
                                        <i className="fas fa-guitar"></i>
                                        <i className="fas fa-plane"></i>
                                        <i className="far fa-futbol"></i>
                                        <i className="fas fa-book-open"></i>
                                        <i className="fas fa-code"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default JallowTemplate1
