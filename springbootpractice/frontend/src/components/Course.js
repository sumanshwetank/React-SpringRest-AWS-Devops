import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";

//Deleting the Course from Server

const Course = ({course, update}) =>{

    const deleteCourse=(id)=>{
        //alert("id: "+id);
        axios.delete(`${base_url}/courses/`+`${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Course Deleted Successfully");
                update(id);
            },
            (error)=>{
                console.error(error);
                toast.error("Something Went Wrong !!!")
            }
    
        )
    }

    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle>{course.courseId}</CardSubtitle>
                <CardSubtitle style={{fontWeight:"bold",fontSize:30}}>{course.courseName}</CardSubtitle>
                <CardText>{course.desc}</CardText>
            </CardBody>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{deleteCourse(course.courseId)}} style={{margin:4}}>Delete</Button>
                <Button color="warning" tag={Link} to={"/update-courses/" + course.courseId} style={{margin:4}}>Update</Button>
            </Container>
        </Card>
    )

};

export default Course