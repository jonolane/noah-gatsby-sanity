import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const About = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center h-full">

        <div className="md:w-1/2 py-4 px-8">
          <h1 className="text-3xl font-bold mb-4">Hi! I’m Noah</h1>
          <p className="mb-4">
            I’m an Asheville-based music person. I tend to wear a ton of different hats, and I’m completely fine with that. Every day working on music feels a little different and exciting. I am endlessly thankful to others for trusting my hands and ears on their art.
          </p>
          <p className="mb-4">
            My primary instruments for remote overdubs are bass and pedal steel, though I have done remote overdubs with plenty of other instruments and am open to continuing to do that.
          </p>
          <p className="mb-4">
            I love to mix other people’s records. Helping something come over the finish line and reach mastering in an *almost* fully realized vision is one of my great joys. I view mixing as this wild mix of like 70% technical skill / 30% creative vision, and it’s really fun to get there with an artist.
          </p>
          <p className="mb-4">
            Some notable labels I have worked with are Harvest Records, Saddle Creek, Polyvinyl, Grand Jury, Double Double Whammy, Thrill Jockey & Keeled Scales. Records I’ve produced and mixed have been featured and reviewed by Pitchfork, Stereogum, Billboard, GoldFlakePaint, The New York Times, and NPR. Songs I’ve worked on have millions & millions of streams, but that should matter less than clear communication and helping you achieve your musical goals.
          </p>
          <p>
            Always looking for new work. If you’re interested in working together, I want to help you make stuff. It’s your art… so just visit that contact section and let me know how I might be able to do that ✨✨
          </p>
        </div>


        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <StaticImage // Use StaticImage instead of Img
            src="../images/noah-kitt.jpg" // Update the path to the image
            alt="Profile"
            width={400}
            quality={95} // You can adjust the image quality
            formats={['auto', 'webp', 'avif']} // Support multiple formats
          />
        </div>

      </div>
    </Layout>
  );
};

export default About;