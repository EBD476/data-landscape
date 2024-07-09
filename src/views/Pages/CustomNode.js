import React, { memo } from 'react';
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
    Row,
    Col,
  } from "reactstrap";

function CustomNode({ data }) {
  return (
    
    <div >
           <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">{data.job}</CardTitle>
                        <p className="card-category text-white">
                        {data.name}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

      {/* <div className="flex">
        <div className="ml-2 ">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div> */}

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);