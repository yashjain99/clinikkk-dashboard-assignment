import React from 'react';
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <div className = { styles.container } >
            <div>
                <div>
                    <h1 className = { styles.h1 } >F.</h1>
                </div>
 
                <div>
                    <img  className = { styles.img } src = "https://img.icons8.com/material-outlined/25/ffffff/home--v2.png" alt = "Home" />
                </div>
                <div>
                    <img  className = { styles.img } src = "https://img.icons8.com/material-outlined/25/ffffff/motarboard.png" alt = "Scholar" />
                </div>
                <div>
                    <img  className = { styles.img } src="https://img.icons8.com/material-outlined/25/ffffff/user--v1.png" alt = "User" />
                </div>
                <div>
                    <img  className = { styles.img } src="https://img.icons8.com/material-outlined/25/ffffff/new-post.png" alt = "Email" />
                </div>
                <div>
                    <img  className = { styles.img } src="https://img.icons8.com/material-outlined/25/ffffff/settings.png" alt = "Settings" />
                </div>
            </div>
            <div className = { styles.logout } >
                <img  className = { styles.img } src="https://img.icons8.com/material-outlined/25/ffffff/export.png" alt = "Logout" />
            </div>
        </div>
    )
}
