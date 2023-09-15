import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import image from "../../assets/image/image.jpg"
import {useAppSelector} from "../../hooks/reduxHooks";
import {Switch} from "@mui/material";
import {useDispatch} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";

export const Header = () => {

    const {me} = useAppSelector(state => state.me);
    const {themeSwitch} = useAppSelector(state => state.theme);
    const dispatch = useDispatch()

    return (
        <div className={themeSwitch ? styles.headerBlack : styles.headerWhite}>
            <div className={styles.logo}>The MovieDB</div>
            <div className={styles.navigation}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <div className={styles.block}>
                <div>
                    <div>{themeSwitch ? "Light Theme" : "Dark Theme"}<Switch defaultChecked={themeSwitch} onChange={() => dispatch(themeActions.changeThemeSwitch())}/></div>
                </div>
                <div className={styles.userInfo}>
                    <div>Movie</div>
                    <div className={styles.userInfoSign}>
                        { me ? <img src={image} alt={"sign"}/> : "user"}
                    </div>
                    <div>buff</div>
                </div>
            </div>
        </div>
    );
};