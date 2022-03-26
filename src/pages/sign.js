import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import $ from 'jquery';
import Link from 'next/link';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import { Modal } from 'react-bootstrap';



export class sign extends Component {
    constructor(props){
        super(props);
        this.state = {
            signIn:true,
            ismobile:false,
            formturn:false,
            modalShow:false, 
        };
        this.changeSignState = this.changeSignState.bind(this);    
        this.changeSignStateReturn = this.changeSignStateReturn.bind(this);
        this.mobileFormHandler = this.mobileFormHandler.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    componentDidMount(){
        var win_width = window.innerWidth;
        if(win_width<768){
            this.setState({
                ismobile:true,                       
            })
        }

         //preoad
        setTimeout(function(){ 
                preloaderFadeOutInit();
            }
            .bind(this),
            1000
        );

        function preloaderFadeOutInit(){
            $('.pre-loader').fadeOut('3000');
        }
    }
    
    changeSignState(){
        this.setState({ signIn: false});
    }

    changeSignStateReturn(){
        this.setState({ signIn: true});
    }

    mobileFormHandler(index){
        if(index=="up"){
            this.setState({formturn:true})
        }else{
            this.setState({formturn:false})
        };
    }

    handleSignIn(){
        console.log("signin post");
        const user = { email:"fulltime117@gmail.com", password:"password"};
        axios.post('https://backend.wisetic.com/public/api/auth/login', user)
        .then(response => { 
            var getUserData;
            getUserData = response;
            console.log(getUserData.data);
            if(getUserData.data){
                localStorage.setItem('access_token', getUserData.data.access_token);
            }else{
                console.log.log("no data");
            }
        });
    }

    handleModal(){
        console.log("aa")
        this.setState({modalShow:true})
    }

    handleModalClose(){
        console.log("bb")
        this.setState({modalShow:false})
    }

    render() {
        return (
            <div id="sign_page" className={this.state.ismobile?"mobile-signpage":"desktop-signpage"}>
                <div className="pre-loader">
                    <div className="loader">
                        <img src="./images/loding-center.png"></img>
                    </div>
                </div>
                <Container maxWidth="lg">
                    <div className="sign_paper">
                        <div className={(this.state.signIn)?"sign_container" : "move_hiden sign_container" }>
                            <Link href="/">
                                <a>
                                    <div className="s_logo">
                                        {(this.state.signIn)?
                                            <img src="./logo.png" alt=""></img>
                                        :
                                            <img src="./white-logo.png" alt=""></img>
                                        }
                                    </div>
                                </a>
                            </Link>
                            
                            <div className= "form_container">
                                <div className={this.state.formturn?"turn form_wrapper":"form_wrapper"} >
                                    <form className="sign_in_form">
                                        <h3>Sign in to Wisetic</h3>                                        
                                        <div className="social_box">
                                            <Fab className="social_button">
                                                <p className="social_text">f</p>
                                            </Fab>
                                            <Fab className="social_button">
                                                <p className="social_text">G+</p>
                                            </Fab>
                                            <Fab className="social_button">
                                                <p className="social_text">in</p>
                                            </Fab>
                                        </div>   
                                        <p className="email_note">or use your email account</p> 
                                        {this.state.ismobile&&
                                                <h4 className="tagline">The Next-Generation Publishing System. Showcase your research, make new connections, develop your skills and many more.</h4>
                                        }  
                                        <div className="s_in">
                                            <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <EmailOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Email" />
                                            </Grid>
                                            </Grid>
                                        </div>  
                                        <div className="s_in">
                                            <Grid container spacing={1} alignItems="flex-end">
                                                <Grid item>
                                                    <LockOutlinedIcon />
                                                </Grid>
                                                <Grid item>
                                                    <TextField id="input-with-icon-grid" label="Password" />
                                                </Grid>
                                            </Grid>
                                        </div> 
                                        <Button variant="contained" className="s_button" onClick={this.handleSignIn}>Sign In</Button>
                                        <p className="forgot" onClick={this.handleModal}>Forgot your password?</p>                       

                                        {this.state.ismobile&&
                                            <div className="mobiile-form-trun" onClick={()=>this.mobileFormHandler("up")}>
                                                <p className="mobile-sign-link">Create your Account</p>  
                                                <ArrowRightAltIcon />
                                            </div>                                   
                                        }
                                    </form>

                                    <form className="sign_up_form">
                                        <h3>Create Account</h3>

                                        <div className="social_box"> 
                                            <Fab className="social_button">
                                                <p className="social_text">f</p>
                                            </Fab>
                                            <Fab className="social_button">
                                                <p className="social_text">G+</p>
                                            </Fab>
                                            <Fab className="social_button">
                                                <p className="social_text">in</p>
                                            </Fab>
                                        </div>   
                                        <p className="email_note">or use your email for registation</p>

                                        {this.state.ismobile&&
                                                <h4 className="tagline">The Next-Generation Publishing System. Showcase your research, make new connections, develop your skills and many more.</h4>
                                        } 
                                        
                                        <div className="s_up">
                                            <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <PersonOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Name" />
                                            </Grid>
                                            </Grid>
                                        </div> 
                                        <div className="s_up">
                                            <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <EmailOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Email" />
                                            </Grid>
                                            </Grid>
                                        </div>  
                                        <div className="s_up">
                                            <Grid container spacing={1} alignItems="flex-end">
                                                <Grid item>
                                                    <LockOutlinedIcon />
                                                </Grid>
                                                <Grid item>
                                                    <TextField id="input-with-icon-grid" label="Password" />
                                                </Grid>
                                            </Grid>
                                        </div> 
                                        <Button variant="contained" className="s_button">Sign Up</Button>
                                        <p className="agree">
                                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            By creating a profile you confirm to accept 
                                            {/* <Link href=""> */}
                                                <a> Wisetic Privacy Policy, </a>
                                            {/* </Link>, */}
                                            {/* <Link href=""> */}
                                                <a> Terms of Service </a>
                                            {/* </Link> */}
                                             and 
                                            {/* <Link href=""> */}
                                                <a> Community Standards</a>
                                            {/* </Link> */}
                                        </p>
                                        {this.state.ismobile&&
                                            <div className="mobiile-form-trun" onClick={()=>this.mobileFormHandler("in")}>
                                                <ArrowRightAltIcon style={{transform:'rotate(180deg)'}} />
                                                <p className="mobile-sign-link">Already  have an account? Login</p>  
                                            </div>                                   
                                        }
                                    </form>
                                </div>
                            </div>
                            <div className="s_overall"> 
                                {
                                    (this.state.ismobile)?
                                    <>
                                       type
                                    </>
                                    :
                                    <>
                                        {
                                            (this.state.signIn)?
                                            <>
                                                <h1>Hello, Friend !</h1>
                                                <h4>The Next-Generation Publishing System. Showcase your research, make new connections, develop your skills and many more.</h4>
                                                {/* <p>Enter your personal details and start jouney with us</p> */}
                                                <Button variant="contained" className="st_button" onClick={this.changeSignState}>Sign Up</Button>
                                            </>
                                            :
                                            <>
                                                <h1>Welcome Back!</h1>
                                                <h4>The Next-Generation Publishing System. Showcase your research, make new connections, develop your skills and many more.</h4>
                                                {/* <p>To Keep connected with us please login with your personal info</p> */}
                                                <Button variant="contained" className="st_button" onClick={this.changeSignStateReturn}>Sign In</Button>
                                            </>
                                        }
                                    </>

                                }                                                          
                            </div>
                        </div>
                    </div>

                    
                    
                </Container>
                <div className="page_cover"></div>
                {/* <div className="top_back_shape"></div> */}
                <div className="bottom_back_shape"></div>                
            </div>
            
        )
    }
}

export default sign
