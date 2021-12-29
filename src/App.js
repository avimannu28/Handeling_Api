import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import { Container,Row,Col,Card,CardBody,CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  const [detail,setDetail]=useState({})
  const FetchDetails = async() =>{
    const response = await axios.get('https://randomuser.me/api/')
    console.log("Response:",response.data.results[0])
    setDetail(response.data.results[0])
  }
useEffect(()=>{
   FetchDetails()
},[])

  return (
    <div className="App">
      <Container fluid>
      <Row>
        <Col>
             <Card>
          <CardBody height="300" width="400">
            <img height="150" width="150" className='rounded-circle img-thumbnail border-danger' src={detail.picture?.large}></img>
            <CardTitle>Name : {detail.name?.first}</CardTitle>
              
          </CardBody>
        </Card>
        </Col>
      </Row>
       
      </Container>
     </div>
  );
}

export default App;
