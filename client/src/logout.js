import React from 'react'

function logout() {
    return (
        <div style={{textAlign: 'center', marginTop: '4em'}}>
            <h1>You are Logged out 😢</h1>
            <button className='btn btn-outline-primary'>Login again</button>
        </div>
    )
}

export default logout
