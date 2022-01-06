/*
 * Copyright (c) 2021. Shwetank Suman for Rest Web Services with React as front End Tutorial
 */

package com.shwetank.springbootpractice.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Entity
public class Course {
    @Id
    private long courseId;
    @Column
    private String courseName;
    @Column(name = "description")
    private String desc;
}

