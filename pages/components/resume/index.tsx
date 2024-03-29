import { FaSuperpowers } from "react-icons/fa";
import variabels from "../../../styles/_variables.module.scss";
import {educations, experiences, hardSkills, softSkills} from "../../../data";


function Resume() {
    return (
        <section id="resume">
            <div className="section-head">
                <div className="separator-line-mid"></div>
                <div className="section-title">Resume</div>
            </div>

            <div className="skills">
                <div className="wrapper">
                    <ul>
                        <li className="skill-head">
                            <h5 className="title">SOFT SKILLS</h5>
                        </li>
                        <li className="skill-body">
                            {softSkills.map((skill, key) =>
                                <div className="single-skill" key={key}>
                                    <div className="skill-name">
                                        <FaSuperpowers color={variabels.emerald} />
                                        <span>{skill.name}</span>
                                    </div>
                                    <div className="percentage" data-percent={skill.percent}>{skill.percent}</div>
                                    <div className="progress-wrapper">
                                        <span className="progress" style={{ width: skill.percent.toString() + '%' }}></span>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="wrapper">
                    <ul>
                        <li className="skill-head">
                            <h5 className="title">HARD SKILLS</h5>
                        </li>
                        <li className="skill-body">
                            {hardSkills.map((skill, key) =>
                                <div className="single-skill" key={key}>
                                    <div className="skill-name">
                                        <FaSuperpowers color={variabels.emerald} />
                                        <span>{skill.name}</span>
                                    </div>
                                    <div className="percentage" data-percent={skill.percent}>{skill.percent}</div>
                                    <div className="progress-wrapper">
                                        <span className="progress" style={{ width: skill.percent.toString() + '%' }}></span>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="experiences">
                <div className="header">
                    <div className="header-title">
                        <h5>WORK EXPERIENCE</h5>
                    </div>
                </div>

                <div className="experiences-wrapper">
                    {experiences.map((experience, key) =>
                        <div className="single-experience" key={key}>
                            <div className="job-title">{experience.jobTitle}</div>
                            <div className="date">{experience.date}</div>
                            <div className="organization">
                                <FaSuperpowers color={variabels.emerald} />
                                <span>{experience.organization}</span>
                            </div>
                            <div className="desc">
                                <ul>
                                    {experience.desc.map((decsItem, key) =>
                                        <li key={key}>{decsItem}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="educations">
                <div className="header">
                    <div className="header-title">
                        <h5>Educations</h5>
                    </div>
                </div>

                <div className="educations-wrapper">
                    {educations.map((educations, key) =>
                        <div className="single-education" key={key}>
                            <div className="title">{educations.title}</div>
                            <div className="date">{educations.date}</div>
                            <div className="university">
                                <FaSuperpowers color={variabels.emerald} />
                                <span>{educations.university}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="download-resume-wrapper">
                <a href="/resume/Resume_AndresSumihe.pdf" className="stack-button"><span>Download CV</span></a>
            </div>
                            
        </section>
    )
}

export default Resume;