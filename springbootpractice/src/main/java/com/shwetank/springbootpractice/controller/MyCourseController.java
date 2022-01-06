

package com.shwetank.springbootpractice.controller;

import com.shwetank.springbootpractice.Services.CourseService;
import com.shwetank.springbootpractice.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class MyCourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/home")
    public String home(){
        return "Hello";
    }

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return courseService.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public Course getCourse(@PathVariable String id){
        return this.courseService.getCourse(Long.parseLong(id));
    }

    @PostMapping(value = "/courses",consumes = "application/json")
    public Course addCourse(@RequestBody Course course){
        return this.courseService.addCourse(course);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String id){
        try{
                courseService.deleteCourse(Long.parseLong(id));
                return new ResponseEntity<>(HttpStatus.OK);
            }
            catch(Exception e) {
                return new ResponseEntity <>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

    }

    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course){

        return this.courseService.updateCourse(course);

    }
}
