import { CgScrollV } from "react-icons/cg";
import variables from '../../../styles/_variables.module.scss';

export default function Home(){

    return (
        <section id="home" className="flex flex-1 items-center justify-center px-10 md:px-36 lg:px-48">
            <div className="welcome-message mr-auto">
                <h1 className="welcome-title">Hello.</h1>
                <h3 className="welcome-content">{"I'm"} <span className="name">Andres Sumihe</span></h3>
                <h4 className="welcome-description">Mobile Develope - Web Developer</h4>
            </div>

            <div className="absolute bottom-0 mb-10">
                <CgScrollV className="heartbeat" size={48} color={variables.aliceBlue} />
            </div>

        </section>
    )
}