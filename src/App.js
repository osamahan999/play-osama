import { React, useState } from "react";


import styles from './App.module.css';
import TopBar from "./components/TopBar/TopBar";
import DifficultyPage from "./pages/DifficultyPage/DifficultyPage";
import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";

function App() {

  const [currentContent, setCurrentContent] = useState("");
  const [ageChosen, setAgeChosen] = useState(null);
  const [image, setImage] = useState(null);
  const [initialState, setInitialState] = useState(null);

  return (
    <div className={styles.App}>

      { currentContent == "" && <HomePage setContent={(e) => setCurrentContent(e)} />}
      { currentContent == "Play" &&
        <div className={styles.PageContainer}>
          <TopBar setContent={(e) => setCurrentContent("")} />
          <DifficultyPage 
          setImage = {(e) => setImage(e)} 
          setContent={(e) => setCurrentContent(e)} 
          setAgeChosen = {(e) => setAgeChosen(e)}
          setInitialState = {(e) => setInitialState(e)}
          />
        </div>}

      { currentContent == "Credits" &&
        <div className={styles.PageContainer}>
          <TopBar setContent={(e) => setCurrentContent("")} />
          Cred div
        </div>}
      { currentContent == "Settings" &&
        <div className={styles.PageContainer}>
          <TopBar setContent={(e) => setCurrentContent("")} />

          Set div
        </div>}

      {currentContent == "DifficultyChosen" &&
        <div className={styles.PageContainer}>
          <TopBar setContent = {(e) => setCurrentContent("Play")} />
          <PlayPage age = {ageChosen} image = {image} initialState = {initialState}/>
        </div>
      }

    </div>
  );
}

export default App;
