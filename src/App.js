import { React, useState } from "react";


import styles from './App.module.css';
import TopBar from "./components/TopBar/TopBar";
import DifficultyPage from "./pages/DifficultyPage/DifficultyPage";
import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";

function App() {

  const [currentContent, setCurrentContent] = useState("");

  return (
    <div className={styles.App}>

      { currentContent == "" && <HomePage setContent={(e) => setCurrentContent(e)} />}
      { currentContent == "Play" &&
        <div className={styles.PageContainer}>
          <TopBar setContent={(e) => setCurrentContent("")} />
          <DifficultyPage setContent={(e) => setCurrentContent(e)} />
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

      {currentContent == "Age3" &&
        <div className={styles.PageContainer}>
          <TopBar setContent = {(e) => setCurrentContent("Play")} />
          <PlayPage />
        </div>
      }

    </div>
  );
}

export default App;
