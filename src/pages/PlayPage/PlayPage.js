import { React, useState, useEffect } from "react";

import styles from './PlayPage.module.css';
import Chessboard from 'chessboardjsx';
import player from '../../assets/player-profile-512.webp';

import {getBestMove} from '../../ChessAI/ChessAI';

const Chess = require("chess.js");




function PlayPage(props) {
    
    const [initialState] = useState(props.initialState);

    const [chess, setChess] = useState(
        new Chess(initialState)
    );



    const [gameStateFen, setGameStateFen] = useState(chess.fen());
    const [windowWidth, setWindowWidth] = useState((window.innerWidth / 1920) * 825);

    const handleMove = (move) => {
        if (chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();

                if (moves.length > 0) {
                    let computerMove = null;
                    if (props.age == 3) computerMove = moves[Math.floor(Math.random() * moves.length)]; 
                    else if (props.age == 9) computerMove = getBestMove(chess, 1);
                    else if (props.age == 13) computerMove = getBestMove(chess, 2);
                    else if (props.age == 16) computerMove = getBestMove(chess, 3);
                    else if (props.age == 21) computerMove = getBestMove(chess, 4);
                    else return;
                    chess.move(computerMove);
                    setGameStateFen(chess.fen());
                } else {
                    alert("Checkmate!")
                }
            }, 300);

            setGameStateFen(chess.fen());
        }
    }



    useEffect(() => {
        setGameStateFen(chess.fen());

        
    }, [chess]);

    





    useEffect(() => {

        
        function handleResize() {
            let currentWidth = window.innerWidth;
            if (currentWidth < 800) setWindowWidth((800 / 1920) * 900);
            else {
                setWindowWidth((window.innerWidth / 1920) * 850)

            }
        }

        window.addEventListener('resize', handleResize)
    })


    return (
        <div className={styles.PlayPage}>

            <div className={styles.ChessboardContainer}>
                <div className={styles.PlayerContainer}>
                    <img src={player} className={styles.image}></img>
                    <p>You are playing as White</p>
                </div>


                <Chessboard
                    width={windowWidth}
                    position={gameStateFen}
                    onDrop={(move) => {
                        handleMove({
                            from: move.sourceSquare,
                            to: move.targetSquare,
                            promotion: "q"
                        })
                    }}
                />

                <div className={styles.EnemyContainer}>
                    <img src={props.image} className={styles.image}></img>

                    {props.age == 3 && "I am a three year old sitting in the bathtub"}
                    {props.age == 9 && "I still can't play chess but at least I dont make illegal moves"}
                    {props.age == 13 && "The mustache gives me stockfish powers"}
                    {props.age == 16 && "I am literally a peacock why are you playing me in chess"}
                    {props.age == 21 && "I have gone bald from pulling my hair out because of how bad at chess I am"}

                </div>
            </div>

            <button onClick={() => {
                setChess(new Chess(initialState));
            }}>Reset board</button>

        </div>
    );
}

export default PlayPage;
