
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
  Navbar,NavbarBrand,
  Col,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { layoutElements } from './layout-elements.js';
import useWindowSize from "@rooks/use-window-size";
import CustomNode from './GCustomNode.js';
import Sidebar from './Sidebar';

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
      // children: ['2']      
    },
    // 2: { id: '2', name: 'child node' , job: '22 K'}
}

let id = 0;
const getId = () => `dndnode_${id++}`

const { nodes: layoutedNodes, edges: layoutedEdges } = layoutElements(
  initialTree,
  treeRootId,
  'TB',
);

const initBgColor = '#f0f2f7';

export  function LandingPage() {

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
    const { screenToFlowPosition } = useReactFlow();

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
      );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }, []);

    const onDrop = useCallback(
      (event) => {
        event.preventDefault();
  
        const type = event.dataTransfer.getData('application/reactflow');
  
        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }
  
        // project was renamed to screenToFlowPosition
        // and you don't need to subtract the reactFlowBounds.left/top anymore
        // details: https://reactflow.dev/whats-new/2023-11-10
        const position = screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
        const newNode = {
          id: getId(),
          type:'custom',
          position,
          data: { label: `${type} node` },
        };
  
        setNodes((nds) => nds.concat(newNode));
      },
      [screenToFlowPosition],
    );

    const { setViewport, zoomIn, zoomOut ,zoomTo} = useReactFlow();

    const handleTransform = useCallback(() => {
        setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 });
      }, [setViewport]);

    zoomTo(0.6);

    const [bgColor, setBgColor] = useState(initBgColor);
    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
        document.body.classList.toggle("landing-page");
        };
    }, []);

      const layoutCSS = {
        height: '90vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerCSS = {
        height: '85vh',
        width: '100vw',
    };

    const flowCSS= {
        backgroudColor: '#f0f2f7'
    }

  return (
    <>
      {/* <ExamplesNavbar /> */}
      {/* <div className="black-overlay"></div> */}
      <div className="wrapper">
      <section >    
      {/* <Navbar                
        dark
      >
        <NavbarBrand href="/">
          Reactstrap
        </NavbarBrand>
        <NavItem>
          <NavLink href="#">
             Process
          </NavLink>
        </NavItem>
       <NavbarText>Simple Text</NavbarText>
      </Navbar> */}
      <Sidebar />
      <div id="flow-status">
          <div id="flow-status-container">
            <div><i className="tim-icons icon-credit-card text-info" /> 52 / 3.86 KB</div>
            <div><i className="tim-icons icon-minimal-right  text-info" /> 52 / 3.86 KB</div>
            <div><i className="tim-icons icon-pin text-info" /> 52 / 3.86 KB</div>
          </div>
       </div>
      <div style={{ ...containerCSS }}>               
            <Row className="row-grid justify-content-between h-100" >              
                <Col lg="12" md="12">             
                {/* <br/> */}
                {/* test react flow */}
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}   
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    // zoomOnScroll = {false}
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
                    {/* <Panel>
                      <h3>Node Toolbar position:</h3>
                      <button onClick={() => setPosition(Position.Top)}>top</button>
                      <button onClick={() => setPosition(Position.Right)}>right</button>
                      <button onClick={() => setPosition(Position.Bottom)}>bottom</button>
                      <button onClick={() => setPosition(Position.Left)}>left</button>
                      <h3>Override Node Toolbar visibility</h3>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => forceToolbarVisible(e.target.checked)}
                        />
                        <span>Always show toolbar</span>
                      </label>
                    </Panel> */}

                      <div className="updatenode__controls">
                              <label>label:</label>
                              <input
                                value="test"
                              />
                                <br/>
                              <label className="updatenode__bglabel">background:</label>                        
                              <input value="nodebg" />
                              <div className="updatenode__checkboxwrapper">
                                <label>hidden:</label>
                                <input
                                  type="checkbox"
                                  checked="nodeHidden"                           
                                />
                              </div>
                            </div>

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