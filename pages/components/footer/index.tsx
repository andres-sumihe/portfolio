import { FaBeer, FaHeart } from 'react-icons/fa'
import variabels from '../../../styles/_variables.module.scss';

const Footer = (props: any) => {
    const styles = props.styles;
    console.log(variabels.emerald);
    return <footer className={styles.footer}>
        <div>
            <p className='flex flex-row items-center font-semibold'> Made with <span className='mx-2'><FaHeart color={variabels.emerald} /></span> by Andres Sumihe</p>
        </div>
    </footer>
}

export default Footer;