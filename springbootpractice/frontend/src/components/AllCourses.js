import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Allcourse = () => {
  useEffect(() => {
    document.title = "All Available Courses";
  }, []);

  //function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //success
        console.log(response.data);
        toast.success("Courses Loaded", { position: "top-right" });
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Server Down!!", { position: "top-right" });
      }
    );
  };
  //calling Loading of Course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.courseId != id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of All Courses:</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.courseId} course={item} update={updateCourses}></Course>
          ))
        : "No Course Available"}
    </div>
  );
};

export default Allcourse;
