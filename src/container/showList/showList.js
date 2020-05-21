import React, { Component } from "react";
import {
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
  CardDeck,
} from "react-bootstrap";
import "./showList.css";
import { Link } from "react-router-dom";
import Information from "./info-json";

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
            src="https://picsum.photos/151/150"
            roundedCircle
          />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
<<<<<<< Updated upstream

            <Card.Footer>
              <small className="text-muted">
                <p> {data.description} </p>
                <p> {data.certification} </p>
              </small>
              <button>
                <Link to="/info"> learn More</Link>
              </button>
            </Card.Footer>
          </Card.Body>
        </Card>
      );
    });

=======

            <Card.Footer>
              <small className="text-muted">
                <p> {data.description} </p>
                <p> {data.certification} </p>
              </small>
              <button>
                <Link to="/info"> learn More</Link>
              </button>
            </Card.Footer>
          </Card.Body>
        </Card>
      );
    });

>>>>>>> Stashed changes
    const rows = this.arrayTo2DArray2(items, 4).map((row) => {
      return <CardDeck>{row}</CardDeck>;
    });

    return (
      <React.Fragment>
        <h1 mt-3>Search User</h1>
        <div className="container-fluid o-header">
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => this.searchSpace(e)}
              />
            </InputGroup>
          </Col>
        </div>
        <div className="container">{rows}</div>
      </React.Fragment>
    );
  }
}
export default showLists;

