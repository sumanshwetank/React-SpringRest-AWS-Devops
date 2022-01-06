/*
 * Copyright (c) 2021. Shwetank Suman for Rest Web Services with React as front End Tutorial
 */

package com.shwetank.springbootpractice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shwetank.springbootpractice.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long>{
}
