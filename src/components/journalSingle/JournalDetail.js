import React from 'react'
import styles from "./journalSingle.module.css"

import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const journalSingle = () =>{
    return(
        <>
            <div className={styles.single_journal_details}>
                <div className={styles.single_journal_details_top_row}>
                    <div className={styles.state_details}>
                        <div className={styles.state_left_border}>
                            <div className={styles.state_action_title}>Article Views</div>
                            <div className={styles.state_action_content}>33,234</div>
                        </div>
                        <div className={styles.state_action_title}>PCI</div>
                        <div className={styles.state_action_content}>240</div>
                    </div>
                    <div className={styles.state_details}></div>
                </div>
                <div className={styles.single_journal_details_top_row}>
                    <div className={styles.state_details}>
                        <div className={styles.state_left_border} style={{borderLeft:"2px solid var(--border-color)", paddingLeft:"13px"}}>
                            <div className={styles.state_action_title}>Downloads</div>
                            <div className={styles.state_action_content}>13,034</div>
                        </div>
                        <div style={{borderLeft:"2px solid var(--border-color)", paddingLeft:"13px"}}>
                            <div className={styles.state_action_title}>Citations</div>
                            <div className={styles.state_action_content}>240</div>
                        </div>                        
                    </div>
                    <div className={styles.state_details}></div>
                </div>                
            </div>
            <div className={styles.impact_buttons}>
                <Badge badgeContent={4} color="secondary">
                    <Button variant="contained" >Article Impact Factor (AIF)</Button>
                </Badge>
            </div>

            <div className={styles.articl_icon_group}>
                <div className={styles.articl_icon_group_row}>
                    <div className={styles.articl_icon_group_icons}>
                        <div className={styles.articl_icon_group_icon_text}>Export</div>
                        <div className={styles.articl_icon_group_icon_icon}>
                            <IconButton aria-label="Export" className={styles.articl_icon_group_icon_button}>
                                <AccountBalanceWalletOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.articl_icon_group_icons}>
                        <div className={styles.articl_icon_group_icon_text}>Citations</div>
                        <div className={styles.articl_icon_group_icon_icon}>
                            <IconButton aria-label="Citations" className={styles.articl_icon_group_icon_button}>
                                <AssignmentOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className={styles.articl_icon_group_row}>
                    <div className={styles.articl_icon_group_icons}>
                        <div className={styles.articl_icon_group_icon_text}>Comment</div>
                        <div className={styles.articl_icon_group_icon_icon}>
                            <IconButton aria-label="Comment" className={styles.articl_icon_group_icon_button}>
                                <ChatOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.articl_icon_group_icons}>
                        <div className={styles.articl_icon_group_icon_text}>Print</div>
                        <div className={styles.articl_icon_group_icon_icon}>
                            <IconButton aria-label="Print" className={styles.articl_icon_group_icon_button}>
                                <PrintOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default journalSingle;
