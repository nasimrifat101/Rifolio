/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_FIRST_KEY,
        import.meta.env.VITE_SEC_KEY,
        form.current,
        import.meta.env.VITE_THIRD_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent Successfully')
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.warn('Sending Failed')
        }
      );
  };

  return (
    <div className="cursor-crosshair">
      <div className="max-w-screen-2xl min-h-screen mx-auto grid lg:grid-cols-2 gap-5">
        <div className="">
          <form className="space-y-10 p-3 lg:p-0" ref={form} onSubmit={sendEmail}>
            <p className="text-2xl text-[#A6ADBB] lg:text-6xl lg:leading-normal font-bold hover:text-green-300 duration-1000">Let's bring your ideas into reality.</p>
          <div className="flex w-full space-x-5">
          <div>
              <input
                type="text"
                className=" outline-none text-xl font-bold bg-transparent border-b-2 w-full border-green-200"
                placeholder="Name"
                name='user_name'
              />
            </div>
            <div>
              <input
                type="email"
                className=" outline-none text-xl font-bold bg-transparent border-b-2 w-full border-green-200"
                placeholder="Email"
                name="user_email"
              />
            </div>
          </div>
            <div>
              <input
                type="text"
                className=" outline-none text-xl font-bold bg-transparent border-b-2 w-full border-green-200"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div>
              <input
                type="text"
                className=" outline-none text-xl font-bold bg-transparent border-b-2 w-full border-green-200"
                placeholder="Message"
                name="message"
              />
            </div>
            <input type="submit" value='send' className="w-full rounded-xl btn"/>
          </form>
        </div>
       <div className="hidden lg:block">
       <div className="flex justify-end">
        <iframe src="/giphy.gif" className="w-[480px] h-[480px]"></iframe>
        </div>
       </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ContactForm;
