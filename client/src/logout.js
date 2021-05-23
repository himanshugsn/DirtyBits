import React from 'react'

function logout() {
    return (
        <div style={{background:'red', height:'100vh'}}>
            <h1 style={{color:'red'}}>You are Logged out 😢</h1>
            <button className='btn btn-outline-primary'>Login again</button>
        </div>
    )
}

export default logout
