import { useEffect, useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import TableComponent from './components/TableComponent/TableComponent';
import axios from 'axios';

function App() {
   // State to store the data retrieved from the API
  const [data, setData] = useState([])

  // State to trigger data fetching from the API
  const [dataChanged, setDataChanged] = useState(true)
  useEffect(() =>{

    // Fetch data from the API when dataChanged state changes
    const url = "http://localhost:8080/api/student/getall"
    axios.get(url)
    .then((res)=>

     // Update the data state with the response data
    setData(res.data)
    )
    .catch((err)=>{
      // Log any errors that occur during the API call
      console.log(err)
    })
  },[dataChanged])

  return (
    <div className="App container-fluid justify-content-center align-items-center">
         <FormComponent setDataChanged={setDataChanged} dataChanged={dataChanged}/>
         <TableComponent data={data}/>
         
         
    </div>
  );
}


export default App;
  

