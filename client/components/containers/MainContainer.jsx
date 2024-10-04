import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar.jsx';
import GuessBoard from './GuessBoard.jsx';
import AnswerBoard from './AnswerBoard.jsx';
import ResetBoard from './ResetBoard.jsx';
import Keyboard from '../Keyboard.jsx';
import Colors from '../Colors.jsx';
import HowToPlay from '../HowToPlay.jsx';
import Contact from '../Contact.jsx';

export default function MainContainer() {

  return (
    <div className="mainContainer">
      <NavBar />
      <Routes>
        <Route path='/' element={
          <>
            <Colors />
            <div className="boardContainer">
              <div className="guessContainer">
                <ResetBoard />
                <GuessBoard />
              </div>
              <AnswerBoard />
            </div>
            <Keyboard />
          </>
        }
        >
        </Route>
        <Route path="/how-to" element={<HowToPlay />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    </div>
  );
}


