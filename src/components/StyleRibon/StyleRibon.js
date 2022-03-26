import React from 'react'
import styles from "./StyleRibon.module.css"


const PostType = (props) => { 
    const {RibonData} = props

    return (
        <>
            <div className={styles.ribbon} style={{background:`${RibonData.backColor}`, borderColor:`${RibonData.backColor}`}}>
               {RibonData.title}
            </div>
        </>
    )
}

export default PostType;