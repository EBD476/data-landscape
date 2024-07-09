
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
import CustomNode from './CustomNode.js';


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
      name: 'root node',
    //   type: 'input',
      type: 'custom',
      job: '22 K',
      children: ['2', '3'],
      siblings: ['8'],
      spouses: ['10'],
    },
    2: { id: '2', name: 'child2 node' , job: '22 K'},
    3: {
      id: '3',
      name: 'child3 node',
      job: '22 K',
      type: 'custom',
      children: ['4', '5'],
      siblings: ['9'],
      spouses: ['6'],
    },
    4: { id: '4', name: 'grandChild4' ,  job: '22 K',   type: 'custom' },
    5: { id: '5', name: 'grandChild5' ,    job: '22 K', type: 'custom' },
    6: { id: '6', name: 'spouse of child 3',  job: '22 K', isSpouse: true ,    type: 'custom'},
    8: {
      id: '8',
      name: 'root sibling',
      job: '10 K',
      type: 'custom',
      isSibling: true,
    },
    9: {
      id: '9',
      name: 'child3 sibling',
      job: '66 M',
      type: 'custom',
      isSibling: true,
    },
    10: {
      id: '10',
      name: 'root spouse',
      job: '22 K',
      type: 'custom',
      isSpouse: true,
    },
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
        height: '70vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerCSS = {
        height: '70vh',
        width: '98vw',
    };

    const flowCSS= {
        backgroudColor: '#f0f2f7'
    }

  return (
    <>
      <ExamplesNavbar />
      <div className="black-overlay"></div>
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
              
         <section className="section section-lg section-safe">
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
     

            </Row>
          </Container>
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