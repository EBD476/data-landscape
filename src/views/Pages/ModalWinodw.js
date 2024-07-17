import React, { useState } from 'react';

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
    Input,
    Col,NavItem,NavLink,Nav,TabPane,CardText,TabContent
  } from "reactstrap";

const ModalWindow = ({ isOpen, onClose, onAccept, statusBar, returnData, children }) => {
  const [selectedRow, setSelectedRow] = useState(1);

  if (!isOpen) return null;

  const data = [
    { id: 1, type: 'Convertor',version:'1.0.0', tags: 'Create,Delete' },
    { id: 2, type: 'KafkaListener',version:'2.0.0', tags: 'Create,Delete' },
    { id: 3, type: 'KafkaProducer',version:'2.0.0', tags: 'Create,Delete' },
    { id: 4, type: 'Postgres',version:'3.0.0', tags: 'Create,Delete' },
    { id: 5, type: 'Oracle',version:'8.0.0', tags: 'Create,Delete' },
    { id: 6, type: 'Mssql',version:'12.0.0', tags: 'Create,Delete' },
    { id: 7, type: 'Mariadb',version:'6.0.0', tags: 'Create,Delete' },
    { id: 8, type: 'DeleteMongo',version:'2.0.0', tags: 'Create,Delete' },
    { id: 9, type: 'CreateMongo',version:'2.0.0', tags: 'Create,Delete' },
  ];

  const tags = [
    { id: 1, name: 'amazon' },
    { id: 2, name: 'attribute' },
    { id: 3, name: 'aws' },
    { id: 4, name: 'azure' },
    { id: 5, name: 'cloud' },
    { id: 6, name: 'consume' },
    { id: 7, name: 'delete' },
    { id: 8, name: 'fetch' },
    { id: 9, name: 'Put' },
    { id: 10, name: 'text' },
    { id: 11, name: 'source' },
    { id: 12, name: 'record' },
    { id: 13, name: 'json' },
    { id: 14, name: 'message' },
    { id: 15, name: 'update' }
  ];

  const handleRowClick = (rowId) => {
    setSelectedRow(rowId);
    returnData(rowId);    
  };

  return (
    <Modal className='modal-success' isOpen={isOpen} toggle={onClose} fade={false}>
      <ModalHeader toggle={onClose}>Configure Processor | <small>ConsumeKafka_2_0 1.21.0</small>                        
      </ModalHeader>
       <div style={{display:statusBar? '':'none'}} statusBar className="modal-status">status</div>
       <ModalBody>  
       <Row>
         <Col sm="3">
                <p >
                    Source
                </p>
                  <Input
                  id="exampleSelectMulti"                
                  name="selectMulti"
                  type="select"
                >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
              </Input>
              <br></br>
              <div className="tags">
                <ul className="tag-cloud">
                {tags.map((item) => (
                      <li> <span class="link">{item.name}</span> </li>
                 ))}
                </ul>
              </div>
          </Col>
                 <Col sm="9">
                    <Row className="row-grid justify-content-between"> 
                      <Col><span>Required fields</span> </Col>
                      <Col sm="5">
                        <div id="processor-type-filter-container">
                          <input type="text" id="processor-name" name="processor-name" placeholder="Filter">
                          </input>
                        </div>                        
                      </Col>                        
                    </Row>
              <div id="processor-types-table">
               <Table striped hover>
                    <thead>
                        <tr>
                        <th>
                            Type
                        </th>
                        <th>
                            Version
                        </th>
                        <th>
                            Tags  
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((row) => (
                          <tr
                            key={row.id}
                            onClick={() => handleRowClick(row.id)}
                            style={{
                              backgroundColor:
                                selectedRow === row.id ? '#ffef85' : '',
                            }}
                          >
                            <td>{row.type}</td>
                            <td>{row.version}</td>
                            <td>{row.tags}</td>
                          </tr>
                        ))}
                    </tbody>
                    </Table>
                    </div>
                    <div id="processor-type-container">
                      <h4>DeleteHBaseCells 1.21.0</h4>
                      <div id="processor-type-bundle">org.apache.nifi - nifi-hbase-nar</div>
                    </div>
                    <p>
                       This processor allows the user to delete individual HBase cells by specifying one or more lines in the flowfile content that are a sequence composed of row ID, column family, column qualifier and associated visibility labels if visibility labels are enabled and in use. A user-defined separator is used to separate each of these pieces of data on each line, with :::: being the default separator.
                    </p>
                    </Col>
                    </Row>
        
        </ModalBody>
        <ModalFooter>
            <div class="dialog-buttons">
                {/* <div class="button"><span>ADD</span></div> */}
                {/* <div class="button cancel"  onClick={onclose} ><span>Cancel</span></div> */}
                <Button onClick={onAccept}>ADD</Button>
                <Button className="cancel" onClick={onClose}>Cancel</Button>
             </div>
                
        </ModalFooter>
   </Modal>
  );
};

export default ModalWindow;