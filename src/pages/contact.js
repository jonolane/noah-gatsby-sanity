import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start px-10 md:mx-auto">
        {/* Left Column */}
        <div className="md:w-1/2 py-4 px-8">
          <StaticImage
            src="../images/bedroom.jpg"
            alt="Bedroom"
            width={600}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
          />
          <div className="mt-4 tracking-wider font-poppins">
            <p className='mb-4'>
            Every project requires its own approach, and I would be honored to be involved in whatever capacity you’d like for me to be.
            </p>
            <p className='mb-4'>
            Fill out the form so I can familiarize myself with your project’s details. From there, I can provide you a quote and we can discuss a general timeline.
            </p>
            <p className='mb-4'>
            Happy to just talk gear or just lend an ear also.
            </p>
            <p className='mb-4'>
            FYI— Replies to these almost always go to spam. If you haven’t heard from me after a day or two, please reach out on Instagram or double-check the spam folder :)
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4">

          {/* method, action, access_key are all Web3Forms framework */}

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
    </Layout>
  );
};

export default Contact;