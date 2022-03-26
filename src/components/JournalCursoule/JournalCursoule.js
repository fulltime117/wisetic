import React from 'react'
import styles from "./JournalCursoule.module.css"


import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        

    },

    

  }));

export default function PostHeader() {            
    const classes = useStyles();
    const carouselData = [
        {
            image:"./images/slide/1.jpg",
            title:"Journal Name 1",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        },

        {
            image:"./images/slide/2.jpg",
            title:"Journal Name 2",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image:"./images/slide/3.jpg",
            title:"Journal Name 3",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image:"./images/slide/2.jpg",
            title:"Journal Name 4",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image:"./images/slide/1.jpg",
            title:"Journal Name 5",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            image:"./images/slide/3.jpg",
            title:"Journal Name 6",
            desc:"Lorem ipsum dolor sit amet, consectetur..."
        }
    ]
    return (
        <div className="journal-carsoul-content">
            <div className={classes.root} >
                <div className={styles.slide_wraper} >
                    <Carousel>
                    { 
                        carouselData.map((item,j)=>{
                            return (
                                    <Carousel.Item key={j}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.desc}
                                                </Card.Text>
                                                <div className={styles.manuscript_button}>
                                                    <Button variant="outlined" color="secondary" style={{margin:"auto"}}>Submit Manuscript</Button>
                                                </div>
                                            </Card.Body>
                                        </Card> 
                                    </Carousel.Item>
                                )
                        })
                    } 
                    </Carousel> 
                </div>
                
            </div>
        </div>
    )
}