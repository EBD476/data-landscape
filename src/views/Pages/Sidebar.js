import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
   <div className="flow-toolbar">
    <div className="dndflow">
    <aside>
      <div className="description">toolbar selection</div>
      <div className="icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-components text-info" />
      </div>

      <div className="icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-credit-card text-info" />
      </div>

      <div className="icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-email-85 text-info" />
      </div>

      <div className="icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-notes text-info" />
      </div>

      {/* <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
    </aside>
    </div>
    </div>
  );
};