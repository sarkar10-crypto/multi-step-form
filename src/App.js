import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/form';
import Formdetails from './Components/formdetails';

function App() {

  const data = [
    {
    id: "name",
    label: "Name",
    inputType: "text",
    placeholder: "Enter name",
    buttonName:"Next",
    },
    {
    id: "email",
    label: "Email",
    inputType: "email",
    placeholder: "Enter Email",
    buttonName:"Next",
    },
    {
    id: "DOB",
    label: "DOB",
    inputType: "date",
    placeholder: "",
    buttonName:"Next",
    },
    {
    id: "password",
    label: "Enter Password",
    inputType: "password",
    placeholder: "Enter Pass",
    buttonName:"Submit",
  },
  ]
  
  const [forms, setforms] = useState(data);
  const [index, setindex] = useState(0);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    DOB: "",
    password: "",
  })
const [isformSubmitted, setisformSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    //formData ko maintain karna hai
   const copyformData = { ...formData };
    copyformData[id] = value;
    setformData(copyformData);
  }
  console.log(formData);

  const handleClick = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("form  submitted");  
      setisformSubmitted(true);
    }
    else {
      setindex((idx) => idx + 1);
    }
  }

  const handleBack = (e) => {
    e.preventDefault();
    setindex((idx) => idx - 1);
  }


  return (
    <div className="App">
      
      {!isformSubmitted ? <Form  index={index} forms={forms} formData={formData} handleClick={handleClick} handleInputChange={handleInputChange} handleBack={handleBack} />
        
    : <Formdetails formData={formData} />
        
      }
    </div>
  );
}

export default App;
