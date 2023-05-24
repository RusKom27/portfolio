import React from 'react';
import styles from "./Header.module.scss";
import {TitleLogo, HeaderNavbar} from "../../../features";
import {HorizontalLine, HorizontalRow} from "../../../shared/ui";


const Header = () => {
    return (
        <header className={styles.header}>
            <HorizontalRow>
                <TitleLogo/>
                <HeaderNavbar/>
            </HorizontalRow>
            <HorizontalLine/>
        </header>
    );
};

export default Header;