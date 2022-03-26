import React from 'react'
import styles from "./JournalIndividual.module.css"
import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TabLink = () =>{
    const router = useRouter()
    return(
        <>
            <div className={styles.tab_links}>
                <div className={styles.manuscript_buttons}>
                    <Button variant="contained" color="secondary" onClick={() => router.push('/journalSingle')}>Submit Your Manuscript</Button>
                </div>
                <div className={styles.link_buttons}>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>Journal</Button>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>About</Button>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>Articles</Button>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>Special Topics </Button>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>Author Guidelines &nbsp; <ExpandMoreIcon/> </Button>
                    <Button variant="outlined" color="secondary" onClick={() => router.push('/journalSingle')}>Editorial Board</Button>
                </div>
            </div>            
        </>
    )
}

export default TabLink;
