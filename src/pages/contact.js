import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center px-4 py-6 font-poppins">
        <h1 className='text-xl mb-4 text-center'>Producer / Musician / Engineer</h1>
        {/* Form Section */}
        <div className="p-4 mb-2 w-full mx-auto max-w-screen-lg">
          {/* Web3Forms */}
          <form className="bg-white p-6 rounded-none tracking-wider" action='https://api.web3forms.com/submit' method='POST'>
            {/* Access Key */}
            <input type="hidden" name='access_key' value={process.env.GATSBY_WEB3FORMS_ACCESS_KEY} />
            {/* Name Input */}
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm pb-2">Name (required)</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm pb-2">Email Address (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            {/* Project Name Input */}
            <div className="mb-5">
              <label htmlFor="project" className="block text-sm pb-2">Project Name (required)</label>
              <input
                type="text"
                id="project"
                name="project"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            {/* Service Requested Input */}
            <div className="mb-5">
              <label htmlFor="service" className="block text-sm pb-2">Service Requested (required)</label>
              {/* <p className="text-sm mt-2">Mixing, Overdubbing, Mastering, Producing, or other collaboration</p> */}
              <input
                type='text'
                id="service"
                name="service"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            {/* Number of Songs Input */}
            <div className="mb-5">
              <label htmlFor="songs" className="block text-sm pb-2">How many songs? (required)</label>
              <input
                type="number"
                id="songs"
                name="songs"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            {/* Notes Textarea */}
            <div className="mb-5">
              <label htmlFor="notes" className="block text-sm pb-2">Notes (required)</label>
              <textarea
                id="notes"
                name="notes"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              ></textarea>
              {/* <p className="text-sm mt-2">Tell me about yourself, the project, link to demos, favorite breakfast food, etc</p> */}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
              <button className="bg-black text-white py-4 px-7 rounded-none transition duration-150 ease-in-out hover:bg-opacity-80" type='submit'>Send</button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className='flex flex-col items-center'>
          <StaticImage
            src="../images/noahStudio.jpg"
            alt="Bedroom"
            width={900}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
            placeholder='none'
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

/*
import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center px-4 md:px-10 py-6 md:mx-auto">

        <h1 className='text-xl font-poppins mb-4'>Producer / Musician / Engineer</h1>

        <div className="p-4 mb-8 max-w-2xl w-full">

          <form className="bg-white p-6 rounded-none tracking-wider" action='https://api.web3forms.com/submit' method='POST'>

            <input type="hidden" name='access_key' value='246f51fb-fee2-4610-8fd2-aba2ec308f2d' />

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-poppins pb-2">Name (required)</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-poppins pb-2">Email Address (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="project" className="block text-sm font-poppins pb-2">Project Name (required)</label>
              <input
                type="text"
                id="project"
                name="project"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-poppins pb-2">Service Requested (required)</label>
              <input
                type='text'
                id="service"
                name="service"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
              <p className="text-sm mt-2">Mixing, Overdubbing, Mastering, Producing, or other collaboration</p>
            </div>

            <div className="mb-4">
              <label htmlFor="songs" className="block text-sm font-poppins pb-2">How many songs? (required)</label>
              <input
                type="number"
                id="songs"
                name="songs"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-poppins pb-2">Notes (required)</label>
              <textarea
                id="notes"
                name="notes"
                className="w-full p-3 border border-gray-400 bg-gray-50"
                required
              ></textarea>
              <p className="text-sm mt-2">Tell me about yourself, the project, link to demos, favorite breakfast food, etc</p>
            </div>

            <button className="bg-black text-white py-3 px-4 rounded-none" type='submit'>Send</button>
          </form>
        </div>

        <div className="md:flex md:space-x-4">

          <div className="md:w-1/2 mb-4">
            <div>
              <StaticImage
                src="../images/noahLaugh.jpg"
                alt="Horizontal Image 1"
                width={600}
                quality={95}
                formats={['auto', 'webp', 'avif']}
              />
            </div>
            <div>
              <StaticImage
                src="../images/noahStudio.jpg"
                alt="Horizontal Image 2"
                width={600}
                quality={95}
                formats={['auto', 'webp', 'avif']}
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <StaticImage
              src="../images/noahGuitar.jpg"
              alt="Vertical Image"
              width={600}
              quality={95}
              formats={['auto', 'webp', 'avif']}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
*/

/*
import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start px-10 pb-6 md:mx-auto">

        <div className="md:w-1/2 py-4 px-8">
          <StaticImage
            src="../images/noahGuitar.jpg"
            alt="Bedroom"
            width={500}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
          />
        </div>

        <div className="md:w-1/2 p-4">

          <form className="bg-white p-4 rounded-none tracking-wider" action='https://api.web3forms.com/submit' method='POST'>

            <input type="hidden" name='access_key' value='246f51fb-fee2-4610-8fd2-aba2ec308f2d' />

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-poppins pb-2">Name (required)</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-poppins pb-2">Email Address (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="project" className="block text-sm font-poppins pb-2">Project Name (required)</label>
              <input
                type="text"
                id="project"
                name="project"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-poppins pb-2">Service Requested (required)</label>
              <input
                type='text'
                id="service"
                name="service"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
              <p className="text-sm mt-2">Mixing, Overdubbing, Mastering, Producing, or other collaboration</p>
            </div>
            <div className="mb-4">
              <label htmlFor="songs" className="block text-sm font-poppins pb-2">How many songs? (required)</label>
              <input
                type="number"
                id="songs"
                name="songs"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-poppins pb-2">Notes (required)</label>
              <textarea
                id="notes"
                name="notes"
                className="w-full p-2 border border-gray-400 bg-gray-50"
                required
              ></textarea>
              <p className="text-sm mt-2">Tell me about yourself, the project, link to demos, favorite breakfast food, etc</p>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-none" type='submit'>Send</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col items-center pb-6'>
          <StaticImage
            src="../images/noahStudio.jpg"
            alt="Bedroom"
            width={900}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
          />
        </div>
    </Layout>
  );
};

export default Contact;
*/