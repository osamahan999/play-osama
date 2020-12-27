import React from "react";

import styles from './HomePage.module.css';

function HomePage(props) {
    return (
        <div className={styles.HomePageRowContainer}>
            <div className={styles.HomePageColumnContainer}>
                <div className={styles.GameName}>
                    Play Osama: Chess World Shitter
                </div>

                <div className={styles.GameOptionsContainer}>
                    <div className={styles.GameOptions}>
                        <div onClick={() => props.setContent("Play")} className={styles.Option}>
                            <div className={styles.ColumnGap}></div>
                        Play the game!
                    </div >

                        <div onClick={() => props.setContent("Credits")} className={styles.Option}>
                            <div className={styles.ColumnGap}></div>

                        Credits
                    </div>

                        <div onClick={() => props.setContent("Settings")} className={styles.Option}>
                            <div className={styles.ColumnGap}></div>

                        Settings
                    </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
