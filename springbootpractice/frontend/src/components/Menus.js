import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="true">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" >
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#">
                Contact
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#">
                About Us
            </Link>

        </ListGroup>
    )
};

export default Menus