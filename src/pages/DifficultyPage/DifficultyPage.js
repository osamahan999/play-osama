import React, { Component, useState } from "react";
import Carousel from 'react-elastic-carousel';

import styles from './DifficultyPage.module.css';
import osama1 from '../../assets/babyOsama.jpeg';
import osama2 from '../../assets/Osama2.jpeg';
import osama5 from '../../assets/Osama5.jpeg';
import osama3 from '../../assets/Osama3.jpeg';
import osama4 from '../../assets/Osama4.jpeg';

function DifficultyPage(props) {

    const [currentImage, setCurrentImage] = useState(null);

    return (
        <div className={styles.DifficultyPageContainer}>
            <div className={styles.DifficultySliderContainer}>

                <Carousel >
                    <div className={styles.CarouselItem}>
                        <img className={styles.Image} src={osama1}></img>

                        <p>
                            When Osama had never even heard of Chess
                        </p>

                        <h2 onClick={() => {
                            props.setContent("DifficultyChosen");
                            props.setAgeChosen(3);
                            props.setImage(osama1);
                            props.setInitialState("rnbqkbnr/ppppqppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
                        }} className={styles.AgeButton}>Age 3</h2>


                    </div>

                    <div className={styles.CarouselItem}>
                        <img className={styles.Image} src={osama2}></img>

                        <p>
                            Osama had purchased a Harry Potter themed Chess board, and used it to collect dust
                        </p>


                        <h2 onClick={() => {
                            props.setContent("DifficultyChosen");
                            props.setAgeChosen(9);
                            props.setImage(osama2);
                            props.setInitialState("rnbqkbnr/pprpprpp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
                        }} className={styles.AgeButton}>Age 9</h2>
                    </div>


                    <div className={styles.CarouselItem}>
                        <img className={styles.Image} src={osama5}></img>

                        <p>
                            When Osama learned about En Passant: this is just stockfish at depth 40
                        </p>


                        <h2 onClick={() => {
                            props.setContent("DifficultyChosen");
                            props.setAgeChosen(13);
                            props.setImage(osama5);
                            props.setInitialState("rnbqkbnr/pppppppp/8/8/8/8/PPRRRRPP/RNBQKBNR w KQkq - 0 1");

                        }} className={styles.AgeButton}>Age 13</h2>
                    </div>


                    <div className={styles.CarouselItem}>
                        <img className={styles.Image} src={osama3}></img>

                        <p>
                            I don't know this one is filler, just try to start with a3 on this one.
                        </p>


                        <h2 onClick={() => {
                            props.setContent("DifficultyChosen");
                            props.setAgeChosen(16);
                            props.setImage(osama3);
                            props.setInitialState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

                        }} className={styles.AgeButton}>Age 16</h2>
                    </div>


                    <div className={styles.CarouselItem}>
                        <img className={styles.Image} src={osama4}></img>

                        <p>
                            Paul Morphy style, Osama retires from chess due to being the best.
                            Also Paul Morphy style, he fell into a horrible state of delusion and paranoia
                        </p>


                        <h2 onClick={() => {
                            props.setContent("DifficultyChosen");
                            props.setAgeChosen(21);
                            props.setImage(osama4);
                            props.setInitialState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

                        }} className={styles.AgeButton}>Age 21</h2>
                    </div>

                </Carousel>

            </div>
        </div>
    );
}

export default DifficultyPage;
