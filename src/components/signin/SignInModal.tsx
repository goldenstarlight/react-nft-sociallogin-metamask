import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const SignInModal = (props: any) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('https://​​13.215.214.34:8080/player-services/email-auth', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
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
      <div className='text-center font-poppins text-42 text-iridium leading-63 tracking-5p'>SIGN IN</div>
      <div className='text-center text-16 leading-24 font-poppins'>You'll need to be logged in to upload to the Marketplace.</div>
      <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
        <div className="w-300 mx-auto">
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Username or Email" />
          <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border" placeholder="Password" />
          <div className="flex flex-row-reverse">
            <button className="text-lovelyPurple">Forgot password</button>
          </div>
          <div className="flex flex-col items-center">
            <button className='w-230 h-40 text-default border-1 border-davygrey bg-davygrey rounded-8 px-32p py-8p my-15p'>login</button>
            <div className='h-1p border-dashed border-1 w-full border-davygrey'></div>
            <button className='w-230 h-40 text-davygrey border-1 border-davygrey bg-default rounded-8 px-32p py-8p my-15p'>sign in with wallet</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignInModal;