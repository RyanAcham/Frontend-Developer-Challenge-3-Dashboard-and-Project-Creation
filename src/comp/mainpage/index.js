import { React, useState } from "react";
import "./style.css";
import { Container, CloseButton, Row, Col, Button, Tabs, Tab, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function mainpage(props) {

  const [hide, setHide] = useState(true);

  const navigate = useNavigate();

  return (
    <Container>

      {/* Getting Started */}
      
        {hide && <div className="gettingStarted" id="gettingStarted">
            <CloseButton onClick={() => setHide(false)} aria-label="Hide" />
            <h1 className="gettingStarted-h1 text-center">Getting Started</h1>
            <h2 className="gettingStarted-h2 text-center">Feel Free To Explore Or Use These Suggestions To Get Started!</h2>
            <Row>
              <Col className="gettingStartedCol" sm={12} md={4}>
                  <div className="gettingStartedDiv text-center">
                    <i class="gettingStartedIcon fas fa-flask fa-2x"></i>
                    <h3 className="gettingStarted-h3">Join your first lab</h3>
                    <p className="gettingStarted-p">Find a community that shares your interests. Collaborate together to learn and solve challenges.</p>
                  </div>
              </Col>
              <Col className="gettingStartedCol" sm={12} md={4}>
                  <div className="gettingStartedDiv text-center">
                    <i class="gettingStartedIcon fas fa-puzzle-piece fa-2x"></i>
                    <h3 className="gettingStarted-h3">Join Your First Challenge</h3>
                    <p className="gettingStarted-p">Build skills and Demonstrate your problem solving abilities by completing challenges.</p>
                  </div>
              </Col>
              <Col className="gettingStartedCol" sm={12} md={4}>
                  <div className="gettingStartedDiv text-center">
                    <i class="gettingStartedIcon fas fa-user-circle fa-2x"></i>
                    <h3 className="gettingStarted-h3">Set Up Your Profile</h3>
                    <p className="gettingStarted-p">Add a profile photo and fill out details so people can get to know you and invite you to challenges.</p>
                  </div>
              </Col>
            </Row>
            <p className="gettingStarted-p text-center">Questions? check out our <a href="https://intercom.help/preprme/en" target="_blank" rel="noreferrer">Help Center</a> or send us a message in the chat box found on the bottom right of your screen.</p>
        </div>}
        
        {/* Dashboard */}

        <div className="dashboard">

          {/* New Project Button */}
          <div className="d-flex justify-content-end mb-3">
            <Button className="newProjectBtn" variant="success" onClick={() => navigate("/newproject")}>New Project</Button>
          </div>

          <Row className="dashboardRow">
        
            {/* Projects */}
            <Col className="dashboardCol" sm={12} md={6}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Projects</h1>
                  <Tabs defaultActiveKey="projects"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="projects" title="Projects">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>                       
                          <a className="prjTitle" href="https://preprlabs.org/projects/ryanacham-frontend-developer-challenge-1-web-page-creation">ryanacham: Web Page Creation</a>
                          <p className="prjChallenge">Frontend Developer Challenge 1: Web Page Creation</p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="prjTitle" href="https://preprlabs.org/projects/ryanacham-frontend-developer-challenge-2-login-system">ryanacham: Login System</a>
                          <p className="prjChallenge">Frontend Developer Challenge 2: Login System</p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="prjTitle" href="ryanacham-frontend-developer-challenge-3-dashboard-and-project-creation">ryanacham: Dashboard &amp; Project Creation</a>
                          <p className="prjChallenge">Frontend Developer Challenge 3: Dashboard and Project Creation</p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="prjTitle" href="https://preprlabs.org/projects/ryanacham-frontend-developer-challenge-4-accessibility-integration">ryanacham: Accessibility Integration</a>
                          <p className="prjChallenge">Frontend Developer Challenge 4: Accessibility Integration</p>
                        </ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="assess" title="Need to Assess">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Assessments Required</p>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>

            {/* Challenges */}
            <Col className="dashboardCol" sm={12} md={6}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Challenges</h1>
                  <Tabs defaultActiveKey="challenges"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="challenges" title="Challenges">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>                       
                          <a className="chTitle" href="https://preprlabs.org/challengeManager/frontend-developer-challenge-1-web-page-creation">Frontend Developer Challenge 1: Web Page Creation</a>
                          <p className="chInfo">
                            Web Developer Career Lab &nbsp; &nbsp;
                            <i class="far fa-calendar-alt"></i>&nbsp;January 31, 2022  &nbsp;  &nbsp; 
                            <i class="fas fa-users"></i>&nbsp;44
                          </p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="chTitle" href="https://preprlabs.org/challengeManager/frontend-developer-challenge-2-login-system">Frontend Developer Challenge 2: Login System</a>
                          <p className="chInfo">
                            Web Developer Career Lab &nbsp; &nbsp;
                            <i class="far fa-calendar-alt"></i>&nbsp;January 31, 2022  &nbsp;  &nbsp; 
                            <i class="fas fa-users"></i>&nbsp;44
                          </p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="chTitle" href="https://preprlabs.org/challengeManager/frontend-developer-challenge-3-dashboard-and-project-creation">Frontend Developer Challenge 3: Dashboard and Project Creation</a>
                          <p className="chInfo">
                            Web Developer Career Lab &nbsp; &nbsp;
                            <i class="far fa-calendar-alt"></i>&nbsp;January 31, 2022  &nbsp;  &nbsp; 
                            <i class="fas fa-users"></i>&nbsp;44
                          </p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="chTitle" href="https://preprlabs.org/challengeManager/frontend-developer-challenge-4-accessibility-integration">Frontend Developer Challenge 4: Accessibility Integration</a>
                          <p className="chInfo">
                            Web Developer Career Lab &nbsp; &nbsp;
                            <i class="far fa-calendar-alt"></i>&nbsp;January 31, 2022  &nbsp;  &nbsp; 
                            <i class="fas fa-users"></i>&nbsp;44
                          </p>
                        </ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="following" title="Following">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">You are not following any challenges</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>

          </Row>

          <Row className="dashboardRow">

            {/* Labs */}
            <Col className="dashboardCol" sm={12} md={6}>
              <div className="dashboardCard">
                  <h1 className="cardTitle text-center">Labs</h1>
                  <Tabs defaultActiveKey="labs"  className="tabsGroup mb-3">
                    <Tab className="cardTab" eventKey="labs" title="Labs">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>                       
                          <a className="labTitle" href="https://preprlabs.org/labs/web-developer-career-lab">Web Developer Career Lab</a>
                          <p className="labInfo float-right">
                            <i class="fas fa-users"></i>&nbsp;126
                          </p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="labTitle" href="https://preprlabs.org/labs/career-planning-lab">Career Planning Lab </a>
                          <p className="labInfo float-right">
                            <i class="fas fa-users"></i>&nbsp;243
                          </p>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="labTitle" href="https://preprlabs.org/labs/fun-lab-winter-2021">FUN Lab - Winter 2021</a>
                          <p className="labInfo float-right">
                            <i class="fas fa-users"></i>&nbsp;96
                          </p>
                        </ListGroupItem>
                      </ListGroup>
                    </Tab>
                    <Tab className="cardTab" eventKey="invited" title="Invited">
                      <ListGroup className="listGroup list-group-flush">
                        <p className="noResult text-center">No Invitations</p>
                      </ListGroup>
                    </Tab>
                  </Tabs>
              </div>
            </Col>

            {/* Inbox */}

            <Col className="dashboardCol" sm={12} md={6}>
                <div className="dashboardCard">
                    <h1 className="cardTitle text-center">Inbox</h1>
                    <Tabs defaultActiveKey="inbox"  className="tabsGroup mb-3">
                      <Tab className="cardTab" eventKey="inbox" title="Inbox">
                      <ListGroup className="listGroup list-group-flush">
                        <ListGroupItem>                       
                          <a className="senderName" href=" ">Prepr</a>
                          <p className="msgDetail">
                            Hi everyone, We have nudged a few teams; times around a little for the sake of keeping presentations back to back, so check the schedules in...
                          </p>
                          <a className="seeMore float-right" href=" ">See More</a>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="senderName" href=" ">Prepr</a>
                          <p className="msgDetail">
                            Hi everyone, We have nudged a few teams; times around a little for the sake of keeping presentations back to back, so check the schedules in...
                          </p>
                          <a className="seeMore float-right" href=" ">See More</a>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="senderName" href=" ">Prepr</a>
                          <p className="msgDetail">
                            Hi everyone, We have nudged a few teams; times around a little for the sake of keeping presentations back to back, so check the schedules in...
                          </p>
                          <a className="seeMore float-right" href=" ">See More</a>
                        </ListGroupItem>
                        <ListGroupItem>                       
                          <a className="senderName" href=" ">Prepr</a>
                          <p className="msgDetail">
                            Hi everyone, We have nudged a few teams; times around a little for the sake of keeping presentations back to back, so check the schedules in...
                          </p>
                          <a className="seeMore float-right" href=" ">See More</a>
                        </ListGroupItem>
                      </ListGroup>
                      </Tab>
                      <Tab className="cardTab" eventKey="friendrequests" title="Friend Requests">
                        <ListGroup className="listGroup list-group-flush">
                          <p className="noResult text-center">No Friend Requests</p>
                        </ListGroup>
                      </Tab>
                    </Tabs>
                </div>
              </Col>


          </Row>

        </div>




    </Container>
  );
}

export default mainpage;