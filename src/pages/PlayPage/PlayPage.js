import { React, useState, useEffect } from "react";

import styles from './PlayPage.module.css';
import Chessboard from 'chessboardjsx';

import osama1 from '../../assets/babyOsama.jpeg';
import osama2 from '../../assets/Osama2.jpeg';
import osama5 from '../../assets/Osama5.jpeg';
import osama3 from '../../assets/Osama3.jpeg';
import osama4 from '../../assets/Osama4.jpeg';


const Chess = require("chess.js");


function PlayPage(props) {
    const [initialState] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

    const [chess, setChess] = useState(
        new Chess(initialState)
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
                    You are playing as White
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
