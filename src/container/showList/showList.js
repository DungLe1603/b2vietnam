import React, { Component } from "react";
import {
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
  CardDeck,
  Row,
  Container,
  Nav,
  Navbar,Form,Button
} from "react-bootstrap";
import "./showList.css";
// import "../../assets/stylesheet/HomePage.scss";
import { Link } from "react-router-dom";
import Information from "./info-json";
 import Header from "../../component/Header/Header";

class showLists extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  arrayTo2DArray2 = (list, howMany) => {
    var idx = 0;
    const result = [];

    while (idx < list.length) {
      if (idx % howMany === 0) result.push([]);
      result[result.length - 1].push(list[idx++]);
    }

    return result;
  };

  render() {
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        (data.description || "")
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <Card>
          <Image
            className="text-center p-3"
            variant="top"
            width="250"
            height="200"
            src={data.avatar}
          />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>

            <Card.Footer>
              <small className="text-muted">
                <p> Language: {data.description} </p>
                <p>  Certifications:{data.certification} </p>
              </small>
              <button>
                <Link to="/info"> learn More</Link>
              </button>
            </Card.Footer>
          </Card.Body>
        </Card>
      );
    });

    const rows = this.arrayTo2DArray2(items, 4).map((row) => {
      return <CardDeck>{row}</CardDeck>;
    });

    return (
      <React.Fragment>
          <Navbar style={{backgroundColor:"#006064"}} variant="dark">
    <Navbar.Brand  style={{fontSize:"30px"}} href="#home">B2Vietnam</Navbar.Brand>
    <Nav className="mr-auto">
     
    </Nav>
    
  </Navbar>
        <Container className="container-fluid">
      
          {/* <Header /> */}
          <h1 mt-3>Search your Translator</h1>
          <div className="container-fluid o-header">
            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Put keywords"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => this.searchSpace(e)}
                />
              </InputGroup>
            </Col>
          </div>
          <div className="container">{rows}</div>
        </Container>
      </React.Fragment>
    );
  }
}
export default showLists;
