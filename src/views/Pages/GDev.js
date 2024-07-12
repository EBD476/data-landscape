
import React, { useCallback ,useState} from "react";
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    Background,
    ReactFlowProvider,
    useReactFlow,
    Panel,
    MiniMap,
    Controls,    
  } from 'reactflow';

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
import { layoutElements } from './layout-elements.js';
import useWindowSize from "@rooks/use-window-size";
import CustomNode from './GCustomNode.js';


import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const treeRootId = 1;
  const initialTree = {
    1: {
      id: '1',
      name: 'root node ',
    //   type: 'input',
      type: 'custom',
      job: '22 K',
      children: ['2']      
    },
    2: { id: '2', name: 'child node' , job: '22 K'}
}

const { nodes: layoutedNodes, edges: layoutedEdges } = layoutElements(
  initialTree,
  treeRootId,
  'TB',
);

const initBgColor = '#f0f2f7';

export  function LandingPage() {

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
      );

    const { setViewport, zoomIn, zoomOut ,zoomTo} = useReactFlow();

    const handleTransform = useCallback(() => {
        setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 });
      }, [setViewport]);

    zoomTo(0.9);

    const [bgColor, setBgColor] = useState(initBgColor);
    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
        document.body.classList.toggle("landing-page");
        };
    }, []);

      const layoutCSS = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerCSS = {
        height: '90vh',
        width: '100vw',
    };

    const flowCSS= {
        backgroudColor: '#f0f2f7'
    }

  return (
    <>
      <ExamplesNavbar />
      {/* <div className="black-overlay"></div> */}
      <div className="wrapper">
      <section >    
      <div style={{ ...containerCSS }}>         
            <Row className="row-grid justify-content-between h-100 pt-5" >
                <Col lg="12" md="12">
                <br/>
                {/* test react flow */}
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}   
                    zoomOnScroll = {false}
                    nodeTypes={nodeTypes}
                    fitView              
                    className="bg-teal-50"
                    style={{ background: bgColor }}
                    // style={{ ...flowCSS }}
                >           
                   {/* <Panel position="top-right">
                        <button onClick={() => zoomIn({ duration: 800 })}>zoom in</button>
                        <button onClick={() => zoomOut({ duration: 800 })}>zoom out</button>
                        <button onClick={handleTransform}>pan to center(0,0,1)</button>
                    </Panel>      */}
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
                </Col>
            </Row>            
        </div>
        </section>
        </div>    
      </>
  );
}

export default () => (
    <ReactFlowProvider>
      <LandingPage />
    </ReactFlowProvider>
  );