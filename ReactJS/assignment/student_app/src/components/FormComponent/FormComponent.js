import React from "react";
import { useState } from "react";
import './Form.css'
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormComponent = ({setDataChanged,dataChanged}) => {
    //Declaring States

    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('');
    const [gender, setGender] = useState('');
    const [validName, setValidName] = useState(true)
    const [validClass, setValidClass] = useState(true)
    const [validGender, setValidGender] = useState(true)
    const [validDate, setValidDate] = useState(true)
    const [validDivision, setValidDivision] = useState(true)

    //Declaring functions

     // Handle name input change
    const handleNameChange = (e) => {
        e.preventDefault();
        setValidName(true)
        //Validate the name input to allow only letters and spaces
        setName(e.target.value)
    };

    // Handle date of birth input change
    const handleDOBChange = (e) => {
        e.preventDefault();
        setValidDate(true)
        setDateOfBirth(e.target.value);

    };

    // Handle class selection change
    const handleClassChange = (e) => {
        e.preventDefault();
        setValidClass(true)
        setSelectedClass(e.target.value);
    };

    // Handle division selection change
    const handleDivisionChange = (e) => {
        e.preventDefault();
        setValidDivision(true)
        setSelectedDivision(e.target.value);
    };

    // Handle gender selection change
    const handleGenderChange = (e) => {
        e.preventDefault();
        setValidGender(true)
        setGender(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {

         // preventing page from refreshing when submitting
        e.preventDefault(); 

        // Validate form inputs
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(name) || name === '' || name.length < 3) {
            setValidName(false)
            return
        }
        else { 
            setValidName(true)
        }
        if (dateOfBirth === "") {
            setValidDate(false)
            return
        }
        else {
            setValidDate(true)
        }
        if (selectedClass === "") {
            setValidClass(false)
            return
        }
        else {
            setValidClass(true)
        }
        if (selectedDivision === "") {
            setValidDivision(false)
            return
        }
        else {
            setValidDivision(true)
        }
        if(gender === "") {
            setValidGender(false)
            return
        }
        else {
            setValidGender(true)
        }

        // Prepare data for submission
        const data = {
            'name': name,
            'dob': dateOfBirth,
            'cls': selectedClass,
            'division': selectedDivision,
            'gender': gender.toLowerCase()
        }
        console.log(data)

        // Send POST request to the server
        const url = "http://localhost:8080/api/student/add"
        axios.post(url, data)
        .then((res) =>{
            setName("")
            setDateOfBirth("")
            setGender("")
            setSelectedClass("")
            setSelectedDivision("")

             // Show success toast
            toast.success('User Added Succesfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                // Trigger data update in the parent component
                setDataChanged(!dataChanged)
        })
        .catch((err)=>{
            console.log(err);

            // Show error toast
            toast.error(`Failed user registration` , {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    };
    return (
        <div className= 'form_wrapper col-md-6 col-sm-12' >
            <ToastContainer/>
             <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} placeholder='Name e.g : "john'/>
                    {
                        validName ? "" :<span className='danger_text'><p>Enter a valid Name</p></span>
                    } 
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date Of Birth</label>
                    <input type="date" value={dateOfBirth} onChange={handleDOBChange} className="form-control" id="date" />
                    {
                        validDate ? "" :<span className='danger_text'><p>Select a Date</p></span>
                    } 
                </div>  
                <div className="mb-3">
                    <label htmlFor="class" className="form-label">Class</label>
                    <select id="class" value={selectedClass} onChange={handleClassChange} className="form-select" required>
                    <option value="">Select Class</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          {
            validClass ? "" :<span className='danger_text'><p>Select a Class</p></span>
          }
          </div>
          <div className="mb-3">
                    <label htmlFor="division" className="form-label">Division</label>
                    <select id="division" className="form-select" value={selectedDivision} onChange={handleDivisionChange} required>
                    <option value="">Select Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    </select>
                    {
                        validDivision ? "" :<span className='danger_text'><p>Select a Division</p></span>
                    }
            </div>
            <div className='mb-5'>
          <label htmlFor="gender"className="form-label">Gender</label>
          <div className=' d-flex align-items-center'>
            <div className='radio_btn'>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={handleGenderChange}
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              className='radio_input'
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleGenderChange}
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        {
            validGender ? "" :<span className='danger_text'><p>Gender</p></span>
        }
        </div>
        <div className='mb-3 d-flex justify-content-center'>
            <button onClick={handleSubmit} className='btn btn-success lg'>Submit</button>
            
        </div>
      </form>
    </div>
  );
};

export default FormComponent;        
                    











    
    
    
    
    
    
    
    
    
    










