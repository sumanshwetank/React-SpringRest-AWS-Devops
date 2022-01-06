/*
 * Copyright (c) 2021. Shwetank Suman for Rest Web Services with React as front End Tutorial
 */

package com.shwetank.springbootpractice.Services;

import com.shwetank.springbootpractice.entity.Course;
import com.shwetank.springbootpractice.repository.CourseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    List<Course> courseList;

   public CourseServiceImpl(){
        /*courseList = new ArrayList<>();
        courseList.add(new Course(111,"Java","Java Tutorial"));
        courseList.add(new Course(222,"Angular","Angular Tutorial"));
        courseList.add(new Course(333,"React","React Tutorial"));
        courseList.add(new Course(444,"Node.s","Node.js Tutorial"));*/
    }

    @Override
    public List<Course> getAllCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(Long id) {

        /*Course c1 =  null;

        for(Course course:courseList){
            if(id== course.getCourseId()){
                c1 = course;
                break;
            }
        }*/
        return courseDao.findById(id).get();
    }

    @Override
    public Course addCourse(Course course) {
      //  courseList.add(course);
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(Long id) {
       /* courseList = courseList.stream().filter(e->e.getCourseId()!=id).collect(Collectors.toList());*/

        courseDao.deleteById(id);
    }

    @Override
    public Course updateCourse(Course course) {

        /*courseList.forEach(e -> {
            if(e.getCourseId()==course.getCourseId()){
                e.setCourseName(course.getCourseName());
                e.setDesc(course.getCourseName());
            }
        });*/

        courseDao.save(course);
        return course;
    }

}
