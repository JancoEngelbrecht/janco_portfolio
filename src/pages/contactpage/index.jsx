import React from 'react';

import ContactForm from '../../components/contactfrom/index';


const Contact = () => {
  return (
    <div className=" top-10 min-h-screen flex items-center justify-center bg-gradient-to-tr from-neutral-800 from-0% to-neutral-950 to-70%">
      <div className="inset-0 opacity-50"></div>
      <div className="z-10 p-8 w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row ">

          <div className=" w-full md:w-1/2 p-4">
            <ContactForm />
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2 p-4 md:pl-0">
          <h1 className="text-6xl text-center text-white font-bold mb-8">Hello !</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;