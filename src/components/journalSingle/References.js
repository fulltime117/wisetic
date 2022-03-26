import React from 'react'
import styles from "./journalSingle.module.css"

const References = () =>{
    return(
        <>
            <div className={styles.introductions}>
                <div className={styles.int_contents}>
                    <div className={styles.ab_title}>References</div>
                    <div className={styles.re_contents}>
                        <div className={styles.re_text}>This article references 41 other publications.</div>
                        <div className={styles.re_text}>1- Benson, J. R.; Jatoi, I. The global breast cancer burden. Future Oncol. 2012, 8, 697– 702,  DOI: 10.2217/fon.12.61 <span>[Crossref], </span> <span>[PubMed], </span> <span>[CAS], </span> <span>Google Scholar </span></div>
                        <div className={styles.re_text}>2- Eggum, J. H.; Howard, S. A.; Goff, R. P.; Iaizzo, P. A. Imaging of a coronary artery stent implantation within an isolated human heart. J Cardiovasc Transl Res. 2012, 5, 73– 74,  DOI: 10.1007/s12265-011-9322-y <span>[Crossref], </span> <span>[PubMed], </span> <span>[CAS], </span> <span>Google Scholar </span></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default References;