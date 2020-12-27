import React from "react";

import styles from './TopBar.module.css';

function TopBar(props) {
    return (
        <div className={styles.TopBar}>
            <div className={styles.BackButton} onClick={() => props.setContent("Home")}>Back to Home</div>
            <div className={styles.Title}>Play Osama!</div>
        </div>
    );
}

export default TopBar;
