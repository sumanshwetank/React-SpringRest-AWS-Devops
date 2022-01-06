import axios from "axios";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add New Course";
  }, []);

  const [course, setCourse] = useState({});

  //Function to handle Form Submit

  const formHandler = (e) => {
    console.log(course);
    PostDataOnServer(course);
  };
  //Creating Function to post data on Server
  const PostDataOnServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Data Posted On Server Successfully");
      },
      (error) => {
        console.log(error);
        console.error("Error");
        toast.error("Something Went Wrong!!!");
      }
    );
  };

  return (
    <Fragment>
      <h3 className="text-center">Add Course Details Below:</h3>
      <Form onSubmit={formHandler}>
        <FormGroup>
          <Label for="courseId">Course ID</Label>
          <Input
            type="text"
            placeholder="Enter Course ID Here"
            name="courseId"
            id="courseId"
            onChange={(e) => {
              setCourse({ ...course, courseId: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseName">Course Name</Label>
          <Input
            type="text"
            placeholder="Enter Course Name Here"
            name="courseName"
            id="courseName"
            onChange={(e) => {
              setCourse({ ...course, courseName: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseDesc">Course Description</Label>
          <Input
            type="textarea"
            placeholder="Enter Course Description Here"
            name="desc"
            id="desc"
            onChange={(e) => {
              setCourse({ ...course, desc: e.target.value });
            }}
            style={{ height: 100 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success" type="submit" style={{ margin: 4 }}>
            Add Course
          </Button>
          <Button color="warning" type="reset" style={{ margin: 4 }}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
