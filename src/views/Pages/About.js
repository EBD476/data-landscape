
import React from "react";
// react plugin used to create charts
import ParticleImage, {   
    ParticleOptions,
    Vector,
    forces,
    ParticleForce } from "react-particle-image";
import useWindowSize from "@rooks/use-window-size";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";


export default function LandingPage() {

 const { innerWidth, innerHeight } = useWindowSize();
 const particleOptions = {
        filter: ({ x, y, image }) => {
          // Get pixel
          const pixel = image.get(x, y);
          // Make a particle for this pixel if blue > 50 (range 0-255)
          return pixel.b > 50;
        },
        color: ({ x, y, image }) => "#61dafb"        
      };

    const motionForce = (x, y) => {
        return forces.disturbance(x, y, 5);
    };

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="black-overlay"></div>
      <div className="wrapper">
        <br /><br /><br />
        {/* <div className="page-header"> */}        
          <div className="content-center pt-5">
            <Row className="row-grid justify-content-between align-items-center text-left">             
              <Col lg="12" md="12">
              <ParticleImage
                src={require("assets/img/react-logo.png")}
                scale={0.95}
                entropy={20}        
                width={Number(innerWidth)}
                height={Number(innerHeight/2)}       
                backgroundColor="white" 
                maxParticles={4200}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                particleOptions={particleOptions}
                />
              </Col>
            </Row>
          </div>          
          <section className="section section-lg section-safe pt-2">
          <img  
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container>
          <Row className="pb-5"> 
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  About US{" "}
                  <span className="text-info">DATA</span>
                </h1>
              </Col>
            </Row>
            <Row className="row-grid justify-content-between mt-5">
              <Col md="5">                                      
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </div>
        {/* </div> */}
        
        </>
  );
}