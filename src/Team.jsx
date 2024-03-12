import React, { useState } from 'react'



const Team = () => {
    let [team, setTeam] = useState(11);
    let handleAdd = () =>{
        let newTeam = team + 1;
        setTeam(newTeam);
    }
    let handleRemove = () =>{
        let newTeam = team -1;
        setTeam(newTeam);
    }

    let teamStyle = {
        border : '2px solid purple',
        marginBottom : '20px',
        padding : '20px',
        borderRadius : '15px',
    }

    return (
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Players</button>
        </div>
    )
}

export default Team