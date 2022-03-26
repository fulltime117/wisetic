import React from 'react'
import Layout from '../components/Layout/Layout'
import Container from '@material-ui/core/Container';

import { Tab,Row,Col,Nav } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Biography from '../components/EditProfile/Biography/Biography'
import GeneralInformation from '../components/EditProfile/GeneralInformation/GeneralInformation'
import Experience from '../components/EditProfile/Experience/Experience'
import SkillCourse from '../components/EditProfile/SkillCourse/SkillCourse'
import Education from "../components/EditProfile/Education/Education"
import Weblink from '../components/EditProfile/Weblink/Weblink'
import Seminars from '../components/EditProfile/Seminars/Seminars'
import Info from '../components/EditProfile/Info/Info'


const EditProfile = () =>{
    return(
        <Layout>
            <Container maxWidth="lg">
                <div className="edit-page-content">
                    <div className="edit-profile-pagetitle">
                        <Typography variant="h6">
                            Edit Profile
                        </Typography>
                    </div>
                    <Tab.Container id="edit-profile-tab" defaultActiveKey="general">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column" activeKey="bio">
                                    <Nav.Item>
                                        <Nav.Link eventKey="bio" selected>Biography</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="general">General information</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="experience">Work experience</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="education">Education and Training</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="skills">Skills</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seminars">Seminars/Conferences</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="info">Individual Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="weblink">Weblinks</Nav.Link>
                                    </Nav.Item>                                    
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="bio">
                                        <Biography/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="general">
                                        <GeneralInformation />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="experience">
                                        <Experience/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="education">
                                        <Education/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="skills">
                                        <SkillCourse />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seminars">
                                        <Seminars />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="info">
                                        <Info />
                                    </Tab.Pane>                              
                                    <Tab.Pane eventKey="weblink">
                                        <Weblink />
                                    </Tab.Pane>    
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container> 
        </Layout>
    )
}

export default EditProfile