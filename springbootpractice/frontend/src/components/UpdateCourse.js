import axios from "axios";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${base_url}/courses/` + `${id}`).then(
        (response) => {
          //success
          console.log(response.data);
          toast.success("Course Loaded", { position: "top-right" });
          setCourse(response.data);
        },
        (error) => {
          console.log(error);
          toast.error("Server Down!!", { position: "top-right" });
        }
      );
    }
    document.title = "Update Existing Course";
  }, []);

  //alert(id);
  //alert(course.courseId);

  //Function to handle Form Submit

  const formHandler = (e) => {
    console.log(course);
    //alert(course.courseId+','+course.courseName+','+course.desc);
    updateDataOnServer(course, course.courseId);
    navigate("/view-courses");
  };
  //Creating Function to post data on Server
  const updateDataOnServer = (data, id) => {
    //  alert(data.courseId+','+data.courseName+','+data.desc);
    axios.put(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Data Updated On Server Successfully");
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
            value={course.courseId}
            name="courseId"
            id="courseId"
            disabled="true"
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseName">Course Name</Label>
          <Input
            type="text"
            value={course.courseName}
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
            value={course.desc}
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
            Update Course
          </Button>
          <Button color="warning" type="reset" style={{ margin: 4 }}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default UpdateCourse;
