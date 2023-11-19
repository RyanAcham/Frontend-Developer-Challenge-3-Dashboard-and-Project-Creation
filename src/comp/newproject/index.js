import { React } from "react";
import "./style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function NewProject() {

  return (
    <Container fluid>
        <Form className="newProjectForm">
            <h1 className="formTitle text-center">New Project</h1>

            <Row className="formRow">
                <Col className="formCol" xs={12} sm={6}>
                    <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" placeholder="Project Name*" />
                    </Form.Group>
                    
                    <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
                        <Form.Control as="textarea" rows={5} placeholder="Project Overview* (maximum 300 characters)" />
                    </Form.Group>
                </Col>
                <Col className="formCol" xs={12} sm={6}>
                    <Form.Group controlId="formFile" className="formGroup mb-3">
                        <img src="https://via.placeholder.com/300x150" />
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="formRow">
                <Col className="formCol" xs={12} sm={6}>
                
                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Category</option>
                            <option value="1">Small-Mid Sized Business</option>
                            <option value="2">Community Organization</option>
                            <option value="3">Association</option>
                            <option value="4">Not-for-profit</option>
                            <option value="5">Employment Service Organization</option>
                            <option value="6">Settlement Organization</option>
                            <option value="7">District School Board</option>
                            <option value="8">Economic Development Office</option>
                            <option value="9">Board of Trade</option>
                            <option value="10">Chamber of Commerce</option>
                            <option value="11">Everyone</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Industry</option>
                            <option value="1">Automotive</option>
                            <option value="2">Finance</option>
                            <option value="3">Consumer</option>
                            <option value="4">Education</option>
                            <option value="5">Energy</option>
                            <option value="6">Oil and gas</option>
                            <option value="7">Consumer Packaged Goods</option>
                            <option value="8">Financial Services</option>
                            <option value="9">Food and beverage</option>
                            <option value="10">Government</option>
                            <option value="11">Healthcare</option>
                            <option value="12">Industrials</option>
                            <option value="13">Insurance</option>
                            <option value="14">Legal</option>
                            <option value="15">Manufacturing</option>
                            <option value="16">Media</option>
                            <option value="17">Online</option>
                            <option value="18">Raw Materials</option>
                            <option value="19">Real Estate</option>
                            <option value="20">Retail</option>
                            <option value="21">Jewelry</option>
                            <option value="22">Technology</option>
                            <option value="23">Telecommunications</option>
                            <option value="24">Transportation (Travel)</option>
                            <option value="25">Electronics</option>
                            <option value="26">Not-for-profit</option>
                            <option value="27">Life Sciences</option>
                            <option value="28">Hospitality</option>
                            <option value="29">Environment</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Verticals</option>
                            <option value="1">LOHAS and Wellness</option>
                            <option value="2">MarTech</option>
                            <option value="3">Mortgage Tech</option>
                            <option value="4">Nanotechnology</option>
                            <option value="5">Pet technology</option>
                            <option value="6">Real Estate Technology</option>
                            <option value="7">Restaurant Technology</option>
                            <option value="8">Ridesharing</option>
                            <option value="9">Robotics and Drones</option>
                            <option value="10">SaaS (Software-as-a-Service)</option>
                            <option value="11">Space Technology</option>
                            <option value="12">TMT (Technology, media and telecommunications)</option>
                            <option value="13">Virtual reality</option>
                            <option value="14">Wearables</option>
                            <option value="15">Machine Learning &amp; Artificial Intelligence</option>
                            <option value="16">Virtual Reality / Augmented Reality / Mixed Reality</option>
                            <option value="17">ElderTech</option>
                            <option value="18">EdTech</option>
                            <option value="19">Blockchain</option>
                            <option value="20">FinTech</option>
                            <option value="21">MedTech</option>
                            <option value="22">CleanTech</option>
                            <option value="23">AdTech</option>
                            <option value="24">Cybersecurity</option>
                        </Form.Control>
                    </Form.Group>

                </Col>
                <Col className="formCol" xs={12} sm={6}>    

                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Type</option>
                            <option value="1">Hackathon</option>
                            <option value="2">Sponsored Challenge</option>
                            <option value="3">Startup</option>
                            <option value="4">Passion</option>
                            <option value="5">Capstone</option>
                            <option value="6">Personal</option>
                            <option value="7">Assessment</option>
                            <option value="8">Innovation</option>
                            <option value="9">Learning</option>
                            <option value="10">Work</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Stage</option>
                            <option value="1">Prototype</option>
                            <option value="2">Validation</option>
                            <option value="3">Experimentation</option>
                            <option value="4">Pre-incubation</option>
                            <option value="5">Incubation</option>
                            <option value="6">Acceleration</option>
                            <option value="7">Scale-up</option>
                            <option value="8">Concept</option>
                            <option value="9">Idea</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Control as="select">
                            <option>Status</option>
                            <option value="1">Active</option>
                            <option value="2">On-Hold</option>
                            <option value="3">Fundraising</option>
                            <option value="4">Closed</option>
                            <option value="5">Started</option>
                            <option value="6">Submitted</option>
                            <option value="7">Under Assessment</option>
                            <option value="8">Assessment Complete</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="formRow">
                <Col className="formCol" xs={12} sm={6}>  
                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                    <Form.Label>Active Challenge</Form.Label>
                        <Form.Control as="select">
                            <option>Select Challenge *</option>
                            <option value="1">Frontend Developer Challenge 1</option>
                            <option value="2">Frontend Developer Challenge 2</option>
                            <option value="3">Frontend Developer Challenge 3</option>
                            <option value="4">Frontend Developer Challenge 4</option>
                            <option value="5">Backend Developer Challenge 1</option>
                            <option value="6">Backend Developer Challenge 2</option>
                            <option value="7">Backend Developer Challenge 3</option>
                            <option value="8">Backend Developer Challenge 4</option>
                            <option value="9">Career Planning Challenge 1</option>
                            <option value="10">Career Planning Challenge 2</option>
                            <option value="11">Career Planning Challenge 3</option>
                            <option value="12">Career Planning Challenge 4</option>
                            <option value="13">Career Planning Challenge 5</option>
                            <option value="14">Career Planning Challenge 6</option>
                            <option value="15">Career Planning Challenge 7</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="formCol" xs={12} sm={6}>  


                    <Form.Group className="formGroup mb-3" controlId="formBasicSelect">
                        <Form.Label>Associate your Project to a Lab</Form.Label>
                        <Form.Control as="select">
                            <option>Select Lab</option>
                            <option value="1">Web Developer Career Lab</option>
                            <option value="2">Career Planning Lab</option>
                            <option value="3">FUN Lab - Winter 2021</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <div className="text-center">
                <Button variant="success" type="submit">
                    Create Project
                </Button>
            </div> 
        </Form>
    </Container>
  );
}

export default NewProject;