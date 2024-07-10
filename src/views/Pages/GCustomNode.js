import React, { memo ,useState} from 'react';
import { Handle, Position } from 'reactflow';
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
    Modal,
    ModalHeader, 
    ModalBody,
    ModalFooter,
    Row,
    Col,NavItem,NavLink,Nav,TabPane,CardText,TabContent
  } from "reactstrap";

  import classnames from 'classnames';


function CustomNode({ data }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
      if (activeTab !== tab) setActiveTab(tab);
    };

  return (
    
    <div >
        <Card className="card-stats" onDoubleClick={toggle}>
        <CardBody>
        <Row>
            <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
                <i className="tim-icons icon-components text-info" />
            </div>
            </Col>
            <Col md="8" xs="7">
            <div className="numbers">
                <CardTitle tag="p">{data.job}</CardTitle>
                <p />
                <p className="card-category">{data.name}</p>              
            </div>
            </Col>
        </Row>        
        </CardBody>
        <ListGroup flush>
            <ListGroupItem>
             <Row>
                 <Col  md="3">IN</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
              </Row>                
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col  md="3">IN</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col  md="3">IN</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
        {/* <CardFooter>
            <div>
            <ul md="12" > 
                        <li>IN</li>
                        <li>OUT</li>
                        <li>TASKS/TIME</li>
                    </ul>
            </div>
        </CardFooter> */}
        </Card>

        <Modal className='modal-success' isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Configure Processor | <small>ConsumeKafka_2_0 1.21.0</small> </ModalHeader>
            <ModalBody>

             <Nav tabs>
                <NavItem>
                <NavLink                 
                    className={classnames({ active: activeTab === '1' })}                                 
                    onClick={() => { toggleTab('1'); }}
                >
                    Tab1
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}                
                    onClick={() => { toggleTab('2'); }}
                >
                    Tab2
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '3' })}                    
                    onClick={() => { toggleTab('3'); }}
                >
                    Tab3
                </NavLink>
                </NavItem>
            </Nav>
             <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <p className='ml-3'>
                        Id
                        d135ce6b-4f19-3490-9058-1407027e9530
                        Type
                        ConsumeKafka_2_0 1.21.0
                        Bundle
                        org.apache.nifi - nifi-kafka-2-0-nar
                        </p>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                 <Col sm="12">
                    <h4>
                        Tab 2 Contents
                    </h4>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                 <Col sm="12">
                    <textarea className='ml-3' style={{ width: '98%' }} rows="8">
                    </textarea>
                    </Col>
                </Row>
                </TabPane>
            </TabContent>

            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>
                Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
          </Modal>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);