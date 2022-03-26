import React from 'react'
import styles from "./PostType.module.css"


const PostType = (props) => { 
    const {PostTypeData} = props

    return (
        <>
            <div className={styles.ribbon} style={{background:`${PostTypeData.backColor}`, borderColor:`${PostTypeData.backColor}`}}>
               {PostTypeData.title}
            </div>
        </>
    )
}

export default PostType;