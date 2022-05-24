import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const RegisterModal = (props: any) => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  // const pathname = location?.state?.from?.pathname;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const handleOnBlur = (e: any) => {
  //   const field: any = e.target.name;
  //   const value: any = e.target.value;
  //   const newLoginData: object = { ...loginData };
  //   newLoginData[field] = value;
  //   setLoginData(newLoginData);
  //   console.log(loginData)
  // }

  const handleRegister =async (e:any) => {
    e.preventDefault();
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:name,email:email,password:password})
  };
  try{
  const response = await fetch('http://13.215.214.34:8080/player-services/signup', requestOptions);
  const data = await response.json();
  if(data.access_token){
    alert("Register Success");
  }
  if(data.hasOwnProperty("error_player_service") && data.error_player_service.http_status_code==400){
    alert("User Already Register");
  }
  }
  catch(error){
     alert("Something Error")
  }
  
  }

  return (
    <Modal
      {...props}
      size="w640"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
      </Modal.Header> */}
      <div className='pt-20 flex justify-end'>
        <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
      </div>
      <div className='text-center font-poppins text-42 text-iridium leading-63 tracking-5p'>REGISTER</div>
      <div className='text-center text-16 leading-24 font-poppins'>Welcom new Joiner. Just a few steps to apply</div>
      <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
        <div className="w-300 mx-auto">
          {/* <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Enter your first name" /> */}
          {/* <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Enter your name" onChange={(e) => {
            setName(e.target.value)
          }}/> */}
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Username or your nickname" onChange={(e) => {
            setName(e.target.value)
          }} />
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border mb-20p" placeholder="Email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border" placeholder="Confirm password" />
          <div className="flex flex-col items-center">
            <button className='w-230 h-40 text-default border-1 border-davygrey bg-davygrey rounded-8 px-32p py-8p my-15p' onClick={(e) => {
              handleRegister(e)
            }}>Register</button>
            <div className='h-1p border-dashed border-1 w-full border-davygrey'></div>
            <button className='w-230 h-40 text-davygrey border-1 border-davygrey bg-default rounded-8 px-32p py-8p my-15p'>Back to sign in option</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;