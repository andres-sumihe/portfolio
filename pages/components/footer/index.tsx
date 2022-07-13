import { FaBeer, FaHeart } from "react-icons/fa"
import variabels from "../../../styles/_variables.module.scss";

const Footer = (props: any) => {
    return <footer className="w-full">
            <div className="author text-center">
                Made with <i><FaHeart className="w-7 align-middle" color={variabels.emerald}/> </i>by Andres Sumihe
            </div>
    </footer>
}

export default Footer;