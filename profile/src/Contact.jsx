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
    <div className="flex min-h-screen bg-blue-200 flex-col" id="contact">
  <h1 className="flex font-bold w-full justify-center mt-4 text-4xl">
    Get in <span className="text-indigo-900"> Touch</span>
  </h1>

  <div className="bg-white flex flex-col md:flex-row px-5 py-5 mx-4 md:mx-20 my-9 rounded-lg justify-center">
    {/* Responsive Image */}
    <img
      src="../public/images/connect.png"
      alt=""
      ref={imgRef}
      className={`w-full md:w-80 h-auto md:h-96 mt-2 mx-auto ${
        imgView ? 'animate_animated animate__heartBeat' : ''
      }`}
    />

    {/* Responsive Form */}
    <form onSubmit={handleSubmit} className="w-full md:w-auto">
      <div
        ref={form}
        className={`flex flex-col w-full md:w-96 border-black px-5 py-5 mx-auto ${
          formView ? 'animate_animated animate__bounceOut' : ''
        }`}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="bg-blue-100 text-black my-4 px-5 rounded-md h-10 border-2 border-black w-full"
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-blue-100 text-black my-4 px-5 rounded-md h-10 border-2 border-black w-full"
        />

        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          className="bg-blue-100 text-black my-4 px-5 rounded-md h-10 border-2 border-black w-full"
        />

        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="bg-blue-100 text-black my-4 px-5 rounded-md h-16 border-2 border-black w-full"
        ></textarea>

        <button
          type="submit"
          className="border-2 border-black flex items-center justify-center py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-950 hover:text-white hover:font-bold w-full"
        >
          Submit <FaTelegramPlane className="ml-2" />
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default Contact;
