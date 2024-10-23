import React from 'react';
import LagunaLogo from './../../assets/laguna.png';
import LagunaMainScreen from './../../assets/lagunamainscreen.png'; // Import the image of the website

const Laguna = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:p-8">
      {/* Left side - Logo */}
      <div className="relative flex justify-center items-center">
        <img 
          src={LagunaLogo} 
          alt="Laguna Logo"
          id="lagunalogo"
          className="w-6/12 h-auto z-10" 
        />
      </div>

      {/* Right side - Embedded Laguna website */}
      <div className="flex flex-col justify-center items-start p-4 md:p-8">
        <div className="w-full">
          {/* Embedded website in an iframe with mobile viewport simulation */}
          <div className="relative mx-auto">
            {/* Phone frame for larger screens */}
            <div className="justify-center items-center w-full max-w-[400px] aspect-[9/16] bg-white rounded-[40px] p-2 shadow-lg border-4 border-gray-300 md:block hidden">
              <iframe
                src="https://proud-desert-0a59d0b03.5.azurestaticapps.net"
                title="Laguna Website"
                className="w-full h-full rounded-[40px] border-none"
              />
            </div>
            {/* Image of the website for smaller screens */}
            <div className="w-full max-w-[400px] aspect-[9/16] bg-white rounded-[40px] p-2 shadow-lg border-4 border-gray-300 md:hidden block">
              <img
                src={LagunaMainScreen} // Use the imported image
                alt="Website Preview"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Butchery Web Application
      </h1>
      <p className="mb-4 hyphens-auto">
        To demonstrate my commitment to advancing my web development career, I built a web application for my brother-in-law's butchery business. The application serves as a digital storefront, allowing customers to explore available products and giving the owner the ability to easily update product details, prices, and availability.
      </p>
      
      <h2 className="text-xl font-semibold mb-2 ">Key Features:</h2>
      <ul className="list-disc list-inside mb-4 hyphens-auto">
        <li>Shop Front: A public-facing section where customers can browse products and view details like price, description, and availability.</li>
        <li>Admin Dashboard: Secure admin functionality using Auth0 for authentication, allowing product updates and management.</li>
        <li>Contact Us: Integrated React-Leaflet and SendGrid.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Frontend (React, Tailwind CSS):</h2>
      <ul className="list-disc list-inside mb-4 hyphens-auto">
        <li>Leveraged React for the component-based architecture and state management.</li>
        <li>Utilized React Router for seamless navigation and dynamic routing between components.</li>
        <li>Styled using Tailwind CSS for rapid UI development and responsiveness.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Backend (Node.js, Express):</h2>
      <ul className="list-disc list-inside mb-4 hyphens-auto">
        <li>Developed RESTful APIs using Express to handle CRUD operations for product data.</li>
        <li>Connected to a MongoDB database using Mongoose for schema-based data management.</li>
        <li>Utilized Auth0 REST API to retrieve user roles and manage authentication and authorization.</li>
        <li>Implemented middleware using OAuth 2.0 and JWT to handle token-based authentication for secure API access.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Additional Packages:</h2>
      <ul className="list-disc list-inside mb-4 hyphens-auto">
        <li>Axios: For making HTTP requests to the backend API.</li>
        <li>Dompurify: To sanitize HTML and protect against XSS attacks.</li>
        <li>React-Dropzone: Enabled drag-and-drop file upload functionality for product images.</li>
        <li>React-Leaflet: Mapping the butchery’s physical location.</li>
        <li>SendGrid: Integrated SendGrid for sending automated email notifications about potential orders and contact us form submissions, to the company’s email address.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Deployment:</h2>
      <p className="mb-4 hyphens-auto">
        Deployed the application to Azure Static Web App for production, with backend hosted on Azure App Service and CosmosDB for the Database.
      </p>

      <h2 className="text-xl font-semibold mb-2">Links:</h2>
      <ul className="list-none mb-4">
        <li>
          <a href="https://proud-desert-0a59d0b03.5.azurestaticapps.net" className="text-blue-500 hover:underline">Live Demo</a>
        </li>
        <li>
          <a href="https://www.github.com/JancoEngelbrecht/laguna-website" className="text-blue-500 hover:underline">GitHub</a>
        </li>
      </ul>
    </div>
    </section>
  );
};

export default Laguna;