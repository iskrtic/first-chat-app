import './App.css';
import React, { useEffect } from "react";
import UnosNovePoruke from "./components/UnosNovePoruke.js";

function App() {

  // starta se kada se pokrene aplikacija
  useEffect(() => {
  
    console.log('počeo receiveMessages');
    const drone = new window.Scaledrone('k4nh1rw6CR3r1Sgf');
    drone.on('open', error => {
      const room = drone.subscribe('ivana-first-chat-room');
      room.on('data', message => {
        console.log('Received message', message);
      });
    });  

    return () => {
      console.log("usao u return");
    }
  }, []);


  return (
    <div>
      <UnosNovePoruke/>
    </div>
  );
}

export default App;
