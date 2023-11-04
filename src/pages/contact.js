import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start mx-4 md:mx-auto">
        {/* Left Column */}
        <div className="md:w-1/2 py-4 px-8">
          <StaticImage
            src="../images/bedroom.jpg"
            alt="Bedroom"
          />
          <p className="mt-4 tracking-widest font-poppins">
            Every project requires its own approach, and I would be honored to be involved in whatever capacity you’d like for me to be.
            <br />
            Fill out the form so I can familiarize myself with your project’s details. From there, I can provide you a quote and we can discuss a general timeline.
            <br />
            Happy to just talk gear or just lend an ear also.
            <br />
            FYI— Replies to these almost always go to spam. If you haven’t heard from me after a day or two, please reach out on Instagram or double-check the spam folder :)
          </p>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4">
          <form className="bg-white p-4 rounded-none">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-poppins">Name (required)</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-poppins">Email Address (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="project" className="block text-sm font-poppins">Project Name (required)</label>
              <input
                type="text"
                id="project"
                name="project"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-poppins">Service Requested (required)</label>
              <select
                id="service"
                name="service"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              >
                <option value="" disabled selected>Select an option</option>
                <option value="mixing">Mixing</option>
                <option value="overdubbing">Overdubbing</option>
                <option value="mastering">Mastering</option>
                <option value="producing">Producing</option>
                <option value="collaboration">Other collaboration</option>
              </select>
              <p className="text-xs mt-2">Mixing, Overdubbing, Mastering, Producing, or other collaboration</p>
            </div>
            <div className="mb-4">
              <label htmlFor="songs" className="block text-sm font-poppins">How many songs? (required)</label>
              <input
                type="number"
                id="songs"
                name="songs"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-poppins">Notes (required)</label>
              <textarea
                id="notes"
                name="notes"
                className="w-full p-2 border border-gray-400 bg-slate-50"
                required
              ></textarea>
              <p className="text-xs mt-2">Tell me about yourself, the project, link to demos, favorite breakfast food, etc</p>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-none">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;