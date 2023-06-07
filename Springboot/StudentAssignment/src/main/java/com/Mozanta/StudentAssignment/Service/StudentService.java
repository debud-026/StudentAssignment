package com.Mozanta.StudentAssignment.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Mozanta.StudentAssignment.Model.Student;
import com.Mozanta.StudentAssignment.Repository.StudentRepository;




@Service
public class StudentService implements ServiceInterface {

	private static final String PREFIX="R-";
	String SUFFIX;
	
	@Autowired
	private StudentRepository repository;
	
	
	/**
     * Create a new student.
     *
     * @return The created student object
     */
	public Student create(Student stud) {
		return repository.save(stud);
	}
	
	
	 /**
     * Get all students.
     *
     * @return A list of all student objects
     */
	public List<Student> findAll(){
		return repository.findAll();
	}
	
	
	/**
     * Generate an admission number for a student.
     *
     * @return The generated admission number
     */
	public String getAdmnNumber() {
		long value=repository.count();
		if (value>0)
		{
			SUFFIX=String.format("%03d", value+1);
		}
		else
		{
			value=1;
			SUFFIX=String.format("%03d", value);
		}
		return PREFIX+SUFFIX;
	}
	
}
