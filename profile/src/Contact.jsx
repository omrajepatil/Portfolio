import React,{useState} from 'react';
import emailjs from '@emailjs/browser'
import {useInView} from 'react-intersection-observer';
import 'animate.css'
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = 'service_4kcou7f';
    const templateId = 'template_4vv2wuf';
    const publicKey = 'N0nM-3-3iUgQJ8X0V';

    const templateParams = {
      form_name : name,
      form_email : email,
      form_no: number,
      to_name:'frank justin',
      form_message: message
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setEmail('');
      setName('');
      setNumber('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Something went wrong:', err);
    })
  }

  const {ref:imgRef, inView : imgView} = useInView({
    threshold: 0.5,
    // triggerOnce: true,
  })

  const {ref:form , inView:formView} = useInView({
    threshold: 0.5,
  })

  return (
    <div className="flex min-h-screen bg-blue-200 flex-col " id='contact'>
      <h1 className='flex font-bold w-full justify-center mt-4 text-4xl'>Get in <span className='text-indigo-900'>  Touch</span></h1>

      <div className='bg-white flex px-5 py-5 mx-20 my-9 rounded-lg justify-center flex-col md:flex-row sm:flex-col'>
        <img src="../public/images/connect.png" alt="" ref={imgRef} className={`w-80 h-96 mt-2 mx-auto ml-15  ${imgView ? 'animate_animated animate__heartBeat' : ''}` }   />
        <form onSubmit={handleSubmit}>
          <div ref={form} className={`flex flex-col w-96 border-black  px-5 py-5 sm:justify-center mx-auto ${formView ? 'animate_animated animate__bounceOut' : '' }`}>

            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className=' bg-blue-100 text-black my-4 px-5 rounded-md h-10  border-2 border-black'  />

            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'className='bg-blue-100 text-black my-4 px-5 rounded-md h-10 border-2 border-black' />

            <input type="Number" name='number' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Number' className='bg-blue-100 text-black my-4 px-5 rounded-md h-10 border-2 border-black '/>

            <textarea name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message' className='bg-blue-100 text-black my-4 px-5 rounded-md h-16 border-2 border-black '></textarea>

            <button type='submit' className='border-2 border-black flex  pl-16 ml-6 mr-6 rounded-md bg-indigo-500 text-white hover:bg-indigo-950 hover:text-white hover:font-bold '> Submit <FaTelegramPlane className='mt-1 mx-2'/></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
