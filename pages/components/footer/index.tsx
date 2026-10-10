import { FaBeer, FaHeart } from "react-icons/fa";
import { colors } from "../../../data/colors";

const Footer = (props: any) => {
    return <footer className="w-full">
        <div className="author text-center">
            Made with <i><FaHeart className="w-7 align-middle" color={colors.emerald} /> </i>by Andres Sumihe
        </div>
    </footer>;
};

export default Footer;