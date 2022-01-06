/*
 * Copyright (c) 2021. Shwetank Suman for Rest Web Services with React as front End Tutorial
 */

package com.shwetank.springbootpractice.Services;

import com.shwetank.springbootpractice.entity.Course;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CourseService {

    public List<Course> getAllCourses();

    public Course getCourse(Long id);

    public Course addCourse(Course course);

    public void deleteCourse(Long id);

    public Course updateCourse(Course course);
}
