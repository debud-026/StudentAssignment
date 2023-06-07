package com.Mozanta.StudentAssignment.Controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Mozanta.StudentAssignment.Model.Student;
import com.Mozanta.StudentAssignment.Service.ServiceInterface;




@RestController
@CrossOrigin
@RequestMapping("api/student/")
public class StudentController {

	@Autowired
	private ServiceInterface service;
	
	
	/**
     * Endpoint to create a new student.
     *
     * @return The created student object
     */
	@PostMapping(value="/add")
	public Student create(@Valid @RequestBody Student stud){
		// Generate admission number using the service
		String addmissionNumber=service.getAdmnNumber();
		stud.setAdmn(addmissionNumber);
		
		// Generate a unique ID for the student
		stud.setId(UUID.randomUUID().toString());
		
		// Create the student using the service
		return service.create(stud);
	}
	
	
	/**
     * Endpoint to get all students.
     *
     * @return A list of all student objects
     */
	@GetMapping(value="/getall")
	public List<Student> getAllStudent(){
	 // Retrieve all student records using the service
		return service.findAll();
	}
	
}
