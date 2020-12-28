import { React, useState } from "react";

import styles from './PlayPage.module.css';


import Chessboard from 'chessboardjsx';

function PlayPage() {


    return (
        <div className={styles.PlayPage}>

            <Chessboard
                width={400}
                position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            />

        </div>
    );
}

export default PlayPage;
