import React from "react";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";

import "../../assets/stylesheet/buttonGroup.scss";
import "bootstrap/dist/css/bootstrap.min.css";


function buttonGroup() {
  return (
    <div className="buttonGroup">
      <ButtonGroup vertical>
        <DropdownButton
          as={ButtonGroup}
          title="Infromation Technology"
          id="bg-vertical-dropdown-1"
        >
          <Dropdown.Item eventKey="1">Software</Dropdown.Item>
          <Dropdown.Item eventKey="2">Hardware</Dropdown.Item>
          <Dropdown.Item eventKey="1">Electronic components</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          title="Agriculture"
          id="bg-vertical-dropdown-2"
        >
          <Dropdown.Item eventKey="1">Farming</Dropdown.Item>
          <Dropdown.Item eventKey="2">Livestock</Dropdown.Item>
          <Dropdown.Item eventKey="3">Forestry</Dropdown.Item>
        </DropdownButton>

        <Button>Apparel</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Education"
          id="bg-vertical-dropdown-3"
        >
          <Dropdown.Item eventKey="1">English</Dropdown.Item>
          <Dropdown.Item eventKey="2">Japanese</Dropdown.Item>
          <Dropdown.Item eventKey="3">Chinese</Dropdown.Item>
          <Dropdown.Item eventKey="4">Korean</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          title="Manufacturing"
          id="bg-vertical-dropdown-4"
        >
          <Dropdown.Item eventKey="1">Wooden</Dropdown.Item>
          <Dropdown.Item eventKey="2">Pulp</Dropdown.Item>
          <Dropdown.Item eventKey="3">Chemial</Dropdown.Item>
          <Dropdown.Item eventKey="4">Petroleum</Dropdown.Item>
        </DropdownButton>

        <Button>Service</Button>

        <Button>Textile</Button>

        <Button>Medical</Button>
      </ButtonGroup>
    </div>
  );
}

export default buttonGroup;
