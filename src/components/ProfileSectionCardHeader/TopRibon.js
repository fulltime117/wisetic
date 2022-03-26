import React from 'react'
import styles from "./TopRibon.module.css"


const TopRibon = (props) => { 
    const {RibonData} = props

    return (
        <>
            <div className={styles.ribbon} style={{background:`${RibonData.backColor}`, borderColor:`${RibonData.backColor}`}}>
               {RibonData.title}
            </div>
        </>
    )
}

export default TopRibon;