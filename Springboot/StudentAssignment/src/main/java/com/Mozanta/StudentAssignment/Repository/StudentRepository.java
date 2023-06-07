package com.Mozanta.StudentAssignment.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Mozanta.StudentAssignment.Model.Student;



@Repository
public interface StudentRepository extends MongoRepository<Student, String>{

}
