import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>The MovieDB</div>
            <div className={styles.navigation}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <div className={styles.userInfo}>D|em_B</div>
        </div>
    );
};