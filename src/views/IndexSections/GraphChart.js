import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import $ from 'jquery';

import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledTooltip
} from "reactstrap";

const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';


const ForceGraphPage = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const myChart = echarts.init(chartRef.current);
      myChart.showLoading();
  
      $.get(ROOT_PATH + '/data/asset/data/webkit-dep.json', function (webkitDep) {
        myChart.hideLoading();
        const option = {
          legend: {
            data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
          },
          series: [
            {
              type: 'graph',
              layout: 'force',
              animation: false,
              label: {
                position: 'right',
                formatter: '{b}'
              },
              draggable: true,
              data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
              }),
              categories: webkitDep.categories,
              force: {
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2
              },
              edges: webkitDep.links
            }
          ]
        };
        myChart.setOption(option);
      });
  
      return () => {
        myChart.dispose();
      };
    }, []);
  

  return (
    <div>
    <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <section>        
        <Container className="align-items-center mt-5">
            <Row>
            <Col lg="8" md="8">
              <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>                  
              </Col>
              <Col lg="4" md="4">
                <h1 className="profile-title text-left">Apache ECharts Graph Chart Example</h1>                
                <p className="profile-description">
                  Offices parties lasting outward nothing age few resolve.
                  Impression to discretion understood to we interested he
                  excellence. Him remarkably use projection collecting. Going
                  about eat forty world has round miles.
                </p>          
              </Col>          
            </Row>
          </Container>
          </section>
      
    </div>
  );
};

export default ForceGraphPage;