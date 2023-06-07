package com.Mozanta.StudentAssignment.Service;

import java.util.List;

import com.Mozanta.StudentAssignment.Model.Student;



public interface ServiceInterface {

	Student create(Student stud);
	
	String getAdmnNumber();

    List<Student> findAll();
}
