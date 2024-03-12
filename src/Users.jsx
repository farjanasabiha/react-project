import React, { useEffect, useState } from 'react'

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])
  return (
    <div>
        <h3>Users : {users.length}</h3>
    </div>
  )
}

export default Users




// 1. Declare a state to hold a data from json placeholder
// 2. useEffect with callback and dependency Array
// 3. use fetch to load data 