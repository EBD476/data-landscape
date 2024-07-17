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
    Table,
    Col,NavItem,NavLink,Nav,TabPane,CardText,TabContent
  } from "reactstrap";

  import classnames from 'classnames';
  import ModalWindow from './ModalWinodw.js';


function CoreNode({ data }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
      if (activeTab !== tab) setActiveTab(tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    
    <div >
        <img src={require("assets/img/core-server5.png")}  onDoubleClick={openModal} />
        {/* <Card className="card-stats" onDoubleClick={openModal}>
        <CardBody>
        <Row>
            <Col md="3" xs="5">
            <div className="icon-big text-center icon-warning">
                <i className="tim-icons icon-components text-info" />
            </div>
            </Col>
            <Col md="9" xs="7">
            <div className="numbers text-left">
                <CardTitle tag="p">{data.name}</CardTitle>
                <p />
                <p className="card-category">{data.job}</p>              
            </div>
            </Col>
        </Row>        
        </CardBody>
        <ListGroup flush>
            <ListGroupItem>
             <Row>
                 <Col md="3">IN</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
              </Row>                
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col md="3">OUT</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col md="3"  className="pr-0">TASKS/TIME</Col><Col md="5" className='text-center'>0 (0 bytes)</Col ><Col md="4" className='text-right'> 5 min</Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
        </Card> */}

            {/* <ModalWindow  isOpen={isModalOpen} onClose={closeModal}>
                              <h2>Modal Content</h2>
                              <p>This is the content inside the modal.</p>
            </ModalWindow> */}
            
        <Modal className='modal-success' isOpen={isModalOpen} toggle={closeModal} fade={false}>
            <ModalHeader toggle={closeModal}>Configure Processor | <small>ConsumeKafka_2_0 1.21.0</small>                        
            </ModalHeader>
            <div className="modal-status">status</div>
            <ModalBody>        
             <Nav tabs>
                <NavItem>
                <NavLink                 
                    className={classnames({ active: activeTab === '1' })}                                 
                    onClick={() => { toggleTab('1'); }}
                >
                    SETTINGS
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}                
                    onClick={() => { toggleTab('2'); }}
                >
                    SCHEDULING
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '3' })}                    
                    onClick={() => { toggleTab('3'); }}
                >
                    PROPERTIES
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '4' })}                    
                    onClick={() => { toggleTab('4'); }}
                >
                    RELATIONSHIPS
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '5' })}                    
                    onClick={() => { toggleTab('5'); }}
                >
                    COMMENTS
                </NavLink>
                </NavItem>
                

            </Nav>
             <TabContent activeTab={activeTab}> 
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <p className='ml-3'>
                        <div class="setting">                            
                                Name                            
                             <div className="setting-field">
                                <input type="text" id="processor-name" name="processor-name">
                                </input>
                                <input className="ml-2 mr-1" type="checkbox" id="processor-name" name="processor-name"></input>enabled
                                </div>
                            </div>                                                  
                            <div class="setting">
                                Id
                                <div className="setting-field">
                                    d135ce6b-4f19-3490-9058-1407027e9530 
                                </div>
                            </div>
                            
                            <div class="setting">
                            Type
                                <div className="setting-field">
                                ConsumeKafka_2_0 1.21.0 
                                </div>
                            </div>

                            <div class="setting">
                            Bundle
                                <div className="setting-field">
                                org.apache.nifi - nifi-kafka-2-0-nar
                                </div>
                            </div>
                           </p>
                                                            
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                 <Col sm="12">
                    <p >
                        Required fields
                    </p>
                    <Table striped>
                    <thead>
                        <tr>
                        <th>
                            Property
                        </th>
                        <th>
                            Value
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        </tr>
                        <tr>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        </tr>
                        <tr>
                        <td>
                            Larry
                        </td>
                        <td>
                            the Bird
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="5">                             
                    <div className="tab-content">
                        <textarea style={{ width: '98%' }} rows="8">
                        </textarea>    
                  </div>
                </TabPane>
            </TabContent>

            </ModalBody>
            <ModalFooter>
            <div class="dialog-buttons">
                <div class="button"><span>Apply</span></div>
                <div class="button cancel" ><span>Cancel</span></div></div>
            {/* <Button color="info" onClick={toggle}>
                Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button> */}
            </ModalFooter>
          </Modal>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CoreNode);