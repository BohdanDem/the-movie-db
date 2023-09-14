import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import image from "../../assets/image/image.jpg"
import {useAppSelector} from "../../hooks/reduxHooks";

export const Header = () => {

    const {me} = useAppSelector(state => state.me);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>The MovieDB</div>
            <div className={styles.navigation}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <div className={styles.userInfo}>
                <div>Movie</div>
                <div className={styles.userInfoSign}>
                    { me ? <img src={image} alt={"sign"}/> : "user"}
                </div>
                <div>buff</div>
            </div>
        </div>
    );
};