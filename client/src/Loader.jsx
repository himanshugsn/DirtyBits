import React from 'react'

import { CommonLoading } from 'react-loadingg';

function loader() {
    return (
        <div style={{height:'100vh', width:'100vw',backgroundColor:'black'}}>
            <CommonLoading/>
        </div>
    )
}

export default loader
