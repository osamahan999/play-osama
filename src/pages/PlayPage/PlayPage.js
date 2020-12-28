import { React, useState } from "react";

import styles from './PlayPage.module.css';
import Chessboard from 'chessboardjsx';


function PlayPage() {


    return (
        <div className={styles.PlayPage}>

            <div className = {styles.ChessboardContainer}>
                    <Chessboard 
                        width = {500}
                        position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                    />
            </div>

        </div>
    );
}

export default PlayPage;
