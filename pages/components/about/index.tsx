import { FaBusinessTime, FaFacebook, FaGithub, FaHandshake, FaInstagram, FaLinkedin, FaSuperpowers } from "react-icons/fa"
import variabels from "../../../styles/_variables.module.scss";

export default function about() {
    return (
        <section id="about">
            <div className="section-head">
                <div className="separator-line-mid"></div>
                <div className="section-title">About Me</div>
            </div>
            <div className="section-content flex flex-col items-center">
                <div className="biography">
                    {"I have a good motivation for progress and growth, eager to learn new things, and can work as an individual or in a team. In my spare time, I like reading books, doing some projects related to software development, and I also learning Web Development and Mobile Development."}
                </div>
                <div className="detail flex flex-col-reverse md:flex-row w-full my-10 gap-5">
                    <div className="left w-full md:w-2/3 2xl:w-1/2">
                        <div className="detail-info-wrapper">
                            <ul className="column">
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>First Name</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">Andres</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Last Name</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">Sumihe</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Date of Birth</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">14 Sep 2000</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Nationality</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">Indonesia</span>
                                </li>
                            </ul>
                            <ul className="column">
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Phone</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">+62 851-5600-5454</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Email</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">asumihe@gmail.com</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Address</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">Salatiga, Central Java</span>
                                </li>
                                <li>
                                    <span className="label">
                                        <FaSuperpowers color={variabels.emerald}/>
                                        <span>Languages</span>
                                    </span>
                                    <span className="dash">-</span>
                                    <span className="value">Indonesia, English</span>
                                </li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <div className="single-social-media">
                                <a href="https://www.facebook.com/andres.sumihe.1" target="_blank" rel="noreferrer">
                                    <FaFacebook size={24} color={variabels.emerald}/>
                                </a>
                            </div>
                            <div className="single-social-media">
                                <a href="https://www.instagram.com/andres_sumihe/" target="_blank" rel="noreferrer">
                                    <FaInstagram size={24} color={variabels.emerald}/>
                                </a>
                            </div>
                            <div className="single-social-media">
                                <a href="https://www.linkedin.com/in/andres-sumihe/" target="_blank" rel="noreferrer">
                                    <FaLinkedin size={24} color={variabels.emerald}/>
                                </a>
                            </div>
                            <div className="single-social-media">
                                <a href="https://www.github.com/andres-sumihe" target="_blank" rel="noreferrer">
                                    <FaGithub size={24} color={variabels.emerald}/>
                                </a>
                            </div>
                        </div>
                        <div className="more flex flex-col gap-5">
                            <div className="more-content flex flex-col items-center">
                                <div className="icon">
                                    <FaBusinessTime size={64} color={variabels.emerald}/>
                                </div>
                                <div className="count">3</div>
                                <div className="desc">
                                    <FaSuperpowers color={variabels.emerald}/>
                                    <span>YEARS EXPERIENCE</span>
                                </div>
                            </div>
                            <div className="more-content flex flex-col items-center">
                                <div className="icon">
                                    <FaHandshake size={64} color={variabels.emerald}/>
                                </div>
                                <div className="count">6</div>
                                <div className="desc">
                                    <FaSuperpowers color={variabels.emerald}/>
                                    <span>PROJECTS DONE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right w-full md:w-1/3 2xl:w-1/2">
                        <div className="profile-picture w-full overflow-hidden">
                            <img src={'/images/profile.jpg'} />
                        </div>
                        <div className="button-wrapper">
                            <a href="/resume/Resume_AndresSumihe.pdf" className="stack-button"><span>Download CV</span></a>
                            <a href="https://wa.me/6285156005454" target="_blank" rel="noreferrer" className="stack-button"><span>Contact Me</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}