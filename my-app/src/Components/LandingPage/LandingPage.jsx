import React from 'react';
import styles from "./LandingPage.module.css";
import { Sidebar } from '../Sidebar/Sidebar'
import { UserInfo } from '../UserInfo/UserInfo'
import { Stats } from '../Stats/Stats';

export function LandingPage() {
    return (
        <div className = { styles.wrapper } >
            <div></div>
            <Sidebar />
            <UserInfo />
            <Stats />
        </div>
    )
}
