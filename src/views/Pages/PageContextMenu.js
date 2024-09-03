import React from 'react';

const PageContextMenu = ({ xPos, yPos, showMenu }) => {

  const menuStyle = {
    display: showMenu ? 'block' : 'none',
    top: yPos,
    left: xPos,
  };

  const handleItemClick = (action) => {
    // Define what happens when a menu item is clicked
    console.log('Clicked:', action);
    // You can perform actions based on 'action'
  };

  return (
    // style={menuStyle}
    <div style={menuStyle}  className="main-context-menu">
      <div onClick={() => handleItemClick('action1')}>  <i className="tim-icons icon-refresh-02 text-black" /> Refresh</div>      
      <div onClick={() => handleItemClick('action1')}>  <i className="tim-icons icon-settings text-black" /> Configure</div>
      <div onClick={() => handleItemClick('action1')}> <i className="tim-icons icon-user-run text-black" /> Start</div>
      <div onClick={() => handleItemClick('action2')}> <i className="tim-icons icon-app text-black" />  Stop</div>
      <div onClick={() => handleItemClick('action2')}> <i className="tim-icons icon-app text-black" />  Disable</div>
      <div onClick={() => handleItemClick('action2')}> <i className="tim-icons icon-app text-black" /> Enable</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-simple-add text-black" /> Create node</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-upload text-black" /> Upload Template</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-components text-black" /> Create Template</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-pin text-black" /> Save all</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-simple-remove text-black" /> Delete all</div>
      <div onClick={() => handleItemClick('action3')}> <i className="tim-icons icon-controller text-black" /> Empty all</div>
    </div>
  );
};

export default PageContextMenu;
