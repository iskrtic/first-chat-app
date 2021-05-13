import React from 'react'

const UnosNovePoruke = () => {

    const spremiPoruku = () => {
        let poruka = document.getElementById("unosPoruke").value;
        document.getElementById("unosPoruke").value = "";
        console.log(poruka);

        let today = new Date();
        let vrijeme = today.getHours() + ':' + today.getMinutes()  + ':' + today.getSeconds();

        // objekt koji će Scaledrone primiti u data
        let myMessage = {
                        time: vrijeme,
                        nickname: "Ivana", // ovo će trebati biti u state-u
                        message: poruka 
                        }

        //spoji se se na channel                
        const myDrone = new window.Scaledrone('k4nh1rw6CR3r1Sgf');

        myDrone.on('open', error => {
            myDrone.publish({
            room: 'ivana-first-chat-room',
            message: myMessage,
            });
        });
    }

    return (
        <div>

            <div className='form-control'>
                <label htmlFor='unosPoruke'>Poruka:</label>
                <input name='unosPoruke' id='unosPoruke' type='text'></input>
            </div>

            <button onClick={spremiPoruku}>
                Pošalji poruku
            </button>

        </div>
    )
}

export default UnosNovePoruke
