import React from 'react'
import style from './loader.module.css'

function loader() {
    return (
        <div style={{height:'100vh', width:'100vw'}}>
            <div className={style.dashboardloaderwrapper}>
                <div class={style.dashboardloader}>
                    <span class={style.bars}></span>
                    <span class={style.text}>Loading Dashboard</span>
                </div>
            </div>
        </div>
    )
}

export default loader
