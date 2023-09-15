import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import css from './MainLayout.module.css'
import {useAppSelector} from "../hooks/reduxHooks";

const MainLayout = () => {

    const {themeSwitch} = useAppSelector(state => state.theme);

    return (
        <div className={themeSwitch ? css.black : css.white}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;