import React, {useState} from 'react';
import LoginForm from "../components/LoginForm";


export default function Login() {

  const [formData, setFormData] = useState({
        email: '',
        password: ''
  });

      
  return (
  <div>
      <LoginForm formData={formData} setFormData={setFormData}/>
  </div>
  );
}
