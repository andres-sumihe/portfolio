import { FaSuperpowers } from "react-icons/fa"
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
                <div className="detail flex flex-col-reverse md:flex-row w-full my-10">
                    <div className="left w-full md:w-1/2">
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

                        <div className="more">
                            
                        </div>
                    </div>
                    <div className="right w-full md:w-1/2">
                        <div className="profile-picture">
                            <img src={'/images/profile.jpg'} />
                        </div>
                        <div className="button-wrapper">
                            <a href="" className="stack-button"><span>Download CV</span></a>
                            <a href="" className="stack-button"><span>Contact Me</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}