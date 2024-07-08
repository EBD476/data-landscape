import React, { useEffect, useRef, useState } from 'react';
import * as go from 'gojs';
import { ReactDiagram, ReactOverview, ReactPalette } from "gojs-react";

const GoJSChartPage = () => {
  
    const [sizes, setSizes] = useState([
        400,
        '20%',
        'auto',
    ]);

    const layoutCSS = {
        height: '70vmin',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

  function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram =$(go.Diagram,
        {
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
            {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            })
        });

    const simpletemplate =
    $(go.Node, 'Auto',  // the Shape will go around the TextBlock
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
    $(go.Shape, 'Rectangle',
      { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding('fill', 'color')),
    $(go.TextBlock,
      { margin: 28, editable: true },  // some room around the text
      new go.Binding('text').makeTwoWay()
    ),
    );

    diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      $(go.Shape, 'RoundedRectangle', { strokeWidth: 0 }, new go.Binding('fill', 'color')),
      $(go.TextBlock, { margin: 8 }, new go.Binding('text', 'key'))
    );

    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape),
      $(go.Shape, { toArrow: 'Standard' })
    );

    const detailtemplate =
    $(go.Node, "Auto",     
    $(go.Shape, "Rectangle",
        { name: 'SHAPE',width: 200, fill: 'white', strokeWidth: 0 },
        new go.Binding("fill", "color")),
    $(go.Panel, "Table",
        { defaultAlignment: go.Spot.Left },
        $(go.TextBlock, {  margin: 12, row: 0, column: 0, columnSpan: 2, font: "bold 12pt sans-serif" },
        new go.Binding("text", "text")),
        $(go.TextBlock, {  row: 1, column: 0 }, "source:"),
        $(go.TextBlock, { row: 1, column: 1 }, new go.Binding("text", "source")),
        $(go.TextBlock, {row: 2, column: 0 }, "score:"),
        $(go.TextBlock, { row: 2, column: 1 }, new go.Binding("text", "score"))
    )
    );

    const listtemplate =
    $(go.Node, "Auto",     
    $(go.Shape, "Rectangle",
        { name: 'SHAPE',width: 200, fill: 'white', strokeWidth: 0 },
    new go.Binding("fill", "color")),
        $(go.Panel, "Vertical",
        new go.Binding("itemArray", "items"),
        {
            itemTemplate:
            $(go.Panel, "Table",
            { defaultAlignment: go.Spot.Left },
            $(go.TextBlock, {  margin: 2, row: 0, column: 2, columnSpan: 2, font: "bold 12pt sans-serif" },
            new go.Binding("text", "text")),
            $(go.TextBlock, {  row: 1, column: 0 , stroke: "#777" }, "TID:"),
            $(go.TextBlock, { row: 1, column: 1 , stroke: "#777"}, new go.Binding("text", "")),
        )
        })
        );

    const templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
    // for each of the node categories, specify which template to use
    templmap.add("simple", simpletemplate);
    templmap.add("detailed", detailtemplate);
    templmap.add("list", listtemplate);

    diagram.nodeTemplateMap = templmap;
    diagram.layout = $(go.TreeLayout);

    // const model = new go.GraphLinksModel([
    //   { key: 'Alpha', color: '#44723e' },
    //   { key: 'Beta', color: '#dea323' },
    //   { key: 'Gamma', color: '#4ea5d9' },
    //   { key: 'Delta', color: '#b02b2c' }
    // ], [
    //   { from: 'Alpha', to: 'Beta' },
    //   { from: 'Alpha', to: 'Gamma' },
    //   { from: 'Beta', to: 'Beta' },
    //   { from: 'Gamma', to: 'Delta' },
    //   { from: 'Delta', to: 'Alpha' }
    // ]);

    const model = new go.GraphLinksModel([
    { key: 'c0', text: 'CASEID-1254', color: 'lightblue' , score : '10', category: "detailed" },
    { key: 1, text: 'CARD-8825664771', color: 'orange' , category: "simple"},
    { key: 2, text: 'CARD-1233457889', color: 'orange' , category: "simple"},
    { key: 3, text: 'CARD-1625441554', color: 'orange' , category: "simple"},
    { key: 4, text: 'CARD-5211402144', color: 'orange' , category: "simple"},

    { key: 5, text: 'TR-12345574', color: 'lightgreen' , category: "simple"},
    { key: 6, text: 'TR-14456687', color: 'lightgreen' , category: "simple"},
    { key: 7, text: 'TR-14556667', color: 'lightgreen' , category: "simple"},

    { key: 8, items: [ "TR-12345574", "TR-14456687", "TR-14556667" ] , color: '#eee'  , category: "list"}
    ],
    [
        { key: -1, from: 'c0', to: 1 },
        { key: -2, from: 'c0', to: 2 },
        { key: -3, from: 'c0', to: 3 },
        { key: -4, from: 'c0', to: 4 },            

        { key: -5, from: 1, to: 5},
        { key: -6, from: 1, to: 6 },
        { key: -7, from: 1, to: 7 },
    ]);
    diagram.model = model;
    return diagram;
  }



  return (
    <div  className="align-items-center mt-5">
      <h1>GoJS Chart Example</h1>
      <ReactDiagram
        initDiagram={initDiagram}
        style={{ ...layoutCSS }}
        divClassName="diagram-component"
        nodeDataArray={[]}
        linkDataArray={[]}
        // ref={diagramRef}
      />

      {/* <ReactDiagram
                        initDiagram={initDiagram}
                        divClassName='diagram-component'
                        style={{ ...layoutCSS }}
                        nodeDataArray={[
                            { key: 'c0', text: 'CASEID-1254', color: 'lightblue' , score : '10', category: "detailed" },
                            { key: 1, text: 'CARD-8825664771', color: 'orange' , category: "simple"},
                            { key: 2, text: 'CARD-1233457889', color: 'orange' , category: "simple"},
                            { key: 3, text: 'CARD-1625441554', color: 'orange' , category: "simple"},
                            { key: 4, text: 'CARD-5211402144', color: 'orange' , category: "simple"},

                            { key: 5, text: 'TR-12345574', color: 'lightgreen' , category: "simple"},
                            { key: 6, text: 'TR-14456687', color: 'lightgreen' , category: "simple"},
                            { key: 7, text: 'TR-14556667', color: 'lightgreen' , category: "simple"},

                            { key: 8, items: [ "TR-12345574", "TR-14456687", "TR-14556667" ] , color: '#eee'  , category: "list"}
                        ]}       
                        linkDataArray={[
                            { key: -1, from: 'c0', to: 1 },
                            { key: -2, from: 'c0', to: 2 },
                            { key: -3, from: 'c0', to: 3 },
                            { key: -4, from: 'c0', to: 4 },            

                            { key: -5, from: 1, to: 5},
                            { key: -6, from: 1, to: 6 },
                            { key: -7, from: 1, to: 7 },
                        ]} 
                    /> */}
    </div>
  );
};

export default GoJSChartPage;