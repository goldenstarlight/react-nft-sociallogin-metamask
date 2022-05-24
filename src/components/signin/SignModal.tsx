import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';


const SignModal = (props: any) => {
  const [siginShow, setSigninShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const location = useLocation();
  const redirectURL = '/';
  const navigate = useNavigate();
  const { signInUser, googleSingIn, facebookSignin, signInWithTwitter } = useAuth();

  const showSigninModal = () => {
    setSigninShow(true);
  }
  const showRegisterModal = () => {
    setRegisterShow(true);
  }

  //Google signin function
  const handleGoogleSignIn = () => {
    googleSingIn()
      .then((res: any) => {
        navigate(redirectURL);
        setRegisterShow(true);
        setSigninShow(false);
        console.log('new', res.additionalUserInfo.isNewUser);
      })
  }

  //Facebook Signin function
  const handleFacebookLogin = () => {
    facebookSignin()
      .then((res: any) => {
        navigate(redirectURL);
        setRegisterShow(true);
        setSigninShow(false);
      })
  }
  //Facebook Signin function
  const handleTwitterLogin = () => {
    signInWithTwitter()
      .then((res: any) => {
        navigate(redirectURL);
        setRegisterShow(true);
        setSigninShow(false);
      })
  }

  return (
    <div>
      <Modal
        {...props}
        size="w640"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
          <p className="uppercase text-35 leading-45">sign in or create account</p>
          <p className="uppercase text-16 leading-20">User May Login With Metamask</p>
          <p className="uppercase text-16 leading-20">General Registration Or Other Social Media</p>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">

            <div className="ml-22p">
              <p className="text-14 leading-18 text-left mt-5p">SOCIAL</p>
              <div className="bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                <div className="w-60 h-54 rounded-full bg-white flex items-center justify-center ml-5p shadow-sign1">
                  <FontAwesomeIcon icon={faFacebook} className='text-brightBlue text-28'></FontAwesomeIcon>
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleFacebookLogin()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-brightBlue">facebook</label>
                </div>
              </div>

              <div className="bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                <div className="w-60 h-54 rounded-full bg-white flex items-center justify-center ml-5p shadow-sign1">
                  <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleTwitterLogin()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-brightBlue">twitter</label>
                </div>
              </div>
              <div className="bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                <div className="w-60 h-54 rounded-full bg-white flex items-center justify-center ml-5p shadow-sign1">
                  <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleGoogleSignIn()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-brightBlue">google</label>
                </div>
              </div>
            </div>


            <div className="ml-22p">
              <div className="mr-22p">
                <p className="text-14 leading-18 text-left mt-5p">WEB3</p>
                <div className="bg-[#FFF3E9] rounded-10 h-135p my-6p flex flex-col justify-center">
                  <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-5p shadow-sign3 mx-auto">
                    <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                  </div>
                  <div className="uppercase ml-11p flex flex-col mx-auto mt-10p">
                    <label className="text-10 leading-12 opacity-75">continue with</label>
                    <label className="text-20 leading-26 text-[#ED8000]">metamasks</label>
                  </div>
                </div>
              </div>




              <div className="mr-22p">
                <p className="text-14 leading-18 text-left mt-12p uppercase">General register</p>
                <div className="bg-[#653E9D] bg-opacity-10 rounded-10 h-75p flex items-center cursor-pointer hover:border" key="2" onClick={() => showRegisterModal()}>
                  <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-5p shadow-sign2">
                    <FontAwesomeIcon icon={faUser} className='text-[#653E9D] text-28'></FontAwesomeIcon>
                  </div>
                  <div className="uppercase ml-5p pe-2 flex flex-col">
                    <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                    <label className="text-20 leading-26">Register</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SignInModal show={siginShow}
        onHide={() => setSigninShow(false)}></SignInModal>
      <RegisterModal show={registerShow}
        onHide={() => setRegisterShow(false)}></RegisterModal>
    </div>
  );
}

export default SignModal;