import { React, useState, useEffect } from "react";

import styles from './PlayPage.module.css';
import Chessboard from 'chessboardjsx';
import {ChessInstance} from 'chess.js';

const Chess = require("chess.js");


function PlayPage() {

    const [chess] = useState(    
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
        );

    const [gameStateFen, setGameStateFen] = useState(chess.fen());
    const [windowWidth, setWindowWidth] = useState((window.innerWidth / 1920) * 900);

    const handleMove = (move) => {
        if (chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();

                if (moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);   
                    setGameStateFen(chess.fen());
                } else {
                    alert ("Checkmate!")
                }
            }, 300);
            
            setGameStateFen(chess.fen());
        } 
    }





    



    useEffect(() => {
        function handleResize() {
            let currentWidth = window.innerWidth;
            if (currentWidth < 800) setWindowWidth((800 / 1920) * 900);
            else {
                setWindowWidth((window.innerWidth / 1920) * 900 )

            }
        }
    
        window.addEventListener('resize', handleResize)
    })


    return (
        <div className={styles.PlayPage}>
            
            <div className = {styles.ChessboardContainer}>
                    <div className = {styles.PlayerContainer}>
                        hi
                    </div>
                    <Chessboard 
                        width = {windowWidth}
                        position={gameStateFen}
                        onDrop = {(move) => {
                            handleMove({
                                from: move.sourceSquare,
                                to: move.targetSquare,
                                promotion: "q"
                            })
                        }}
                    />

                    <div className = {styles.PlayerContainer}>hi</div>
            </div>

        </div>
    );
}

export default PlayPage;
