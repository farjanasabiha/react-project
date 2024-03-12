import React, { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
let Friends = () => {
    let [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
export default Friends


// // 1. Declare a state to hold a data from api 
// // 2. useEffect with callback and dependency Array
// // 3. use fetch to load data 
// // 4. Set Loaded data to the state