import React, { useCallback } from 'react';
import { useReactFlow } from 'reactflow';

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    addNodes({
      ...node,
      selected: false,
      dragging: false,
      id: `${node.id}-copy`,
      position,
    });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      style={{ top, left, right, bottom }}
      className="context-menu"
      {...props}
    >
      <p style={{ margin: '0.5em' }}>
        <small>node: {id}</small>
      </p>
      <ul class="menu-options">
      <li onClick={duplicateNode}><i className="tim-icons icon-settings text-black" />Configure</li>
      <li divider/>
      <li onClick={duplicateNode}><i className="tim-icons icon-app text-black" />Duplicate</li>
      <li onClick={deleteNode}><i className="tim-icons icon-simple-remove text-black" />Delete</li>  
        {/* <li><button onClick={duplicateNode}>duplicate</button></li>
        <li><button onClick={deleteNode}>delete</button></li>       */}
      </ul>
    </div>
  );
}
