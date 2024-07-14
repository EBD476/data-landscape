import React ,{ useState } from 'react';
import { Button, Tooltip } from 'reactstrap';


export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);


  return (
   <div className="flow-toolbar">
    <div className="dndflow">
    <aside>
      <div className="title">
        <span>FLOW</span>
      <div className="description">toolbar selection</div>
      </div>
      
      <div id="item1"  className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-components text-info" />
             <Tooltip
                placement='bottom'
                isOpen={tooltipOpen}
                target={'item1'}
                autohide={false}
                toggle={toggle}
              >
                Tooltip Content!
              </Tooltip>
      </div>

      <div id="item2"  className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-credit-card text-info" />
             <Tooltip
                placement='bottom'
                isOpen={tooltipOpen}
                target="item2"
                autohide={false}
                toggle={toggle}
              >
                Tooltip Content!
              </Tooltip>
      </div>

      <div className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-email-85 text-info" />
      </div>

      <div className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-notes text-info" />
      </div>

      <div className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-triangle-right-17 text-info" />
      </div>

      <div className="item icon icon-info" onDragStart={(event) => onDragStart(event, 'input')} draggable>
             <i className="tim-icons icon-link-72 text-info" />
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