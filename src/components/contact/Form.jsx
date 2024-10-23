"use client"
import emailjs from '@emailjs/browser';
import { delay, motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};


export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

const sendEmail = (params) => {
  
  const toastId = toast.loading('Sending your message,please wait...')

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate : {
          throttle : 5000, //you can not send more than 1 emial per 5 seconds
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("I have recieved your message, I will get back to you soon!",{
            id : toastId
          })
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('There was an error while sending your message, please try again later!',{
            id : toastId
          })
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
      to_name: "Deepika",
      from_name: data.name,
      reply_to: data.email,
      message : data.message
    }
    console.log(templateParams);
    sendEmail(templateParams);
  }
  console.log(errors);

  
  
  return (
    <>
    <Toaster richColors={true} />
    <motion.form

    variants={container}
    initial="hidden"
    animate="show"
    
    onSubmit={handleSubmit(onSubmit)}
     className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <motion.input
      variants={item} 
      type="text" placeholder=" Name" {...register("name", {required: 'This filed is required!', minLength: {
        value :3,
        message: 'Name should be atleast 3 characters'
      }})} 
       className='w-full p-2 rounded-md  text-foreground focus:outline-none focus:ring-accent/50 
       bg-background/20 border border-accent/30 border-cyan-800 border-solid backdrop-blur-[6px] shadow-glass-inset   hover:shadow-glass-sm'
      />
      {
        errors.name && <span className='inline-block self-start text-cyan-300'>{errors.name.message}</span>
      }
      <motion.input
      variants={item}
      type="email" placeholder="Email" {...register("email", {required: 'This filed is required!', pattern: /^\S+@\S+$/i})}
      className='w-full p-2 rounded-md  text-foreground focus:outline-none focus:ring-accent/50 
       bg-background/20 border border-accent/30 border-cyan-800 border-solid backdrop-blur-[6px] shadow-glass-inset   hover:shadow-glass-sm'
      />
      {
        errors.email && <span className='inline-block self-start text-cyan-300'>{errors.email.message}</span>
      }
      <motion.textarea 
      variants={item}
      placeholder='Message...' {...register("message", {required : 'This filed is required!', 
      maxLength: {
        value: 500,
        message: 'Message should be less than 500 characters'
      }, minLength: {
        value : 50,
        message : "Message should be more than 50 characters"
      }})} 
      className='w-full p-2 rounded-md  text-foreground focus:outline-none focus:ring-accent/50 
       bg-background/20 border border-accent/30 border-cyan-800 border-solid backdrop-blur-[6px] shadow-glass-inset   hover:shadow-glass-sm'
      />
      {
        errors.message && <span className='inline-block self-start text-cyan-300'>{errors.message.message}</span>
      }
      <motion.input
      variants={item}
      value="Cast your message! " className='px-10 py-4 rounded-md shadow-lg bg-background border border-cyan-800 border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm
      text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </motion.form>
    </>
  );
}