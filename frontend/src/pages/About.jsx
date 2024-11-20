// src/pages/About.jsx
// import from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-100">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-new-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center">
            About Supply Chain Management
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-yellow-300">
              What is Supply Chain Management?
            </h2>
            <p className="text-lg text-gray-200">
              Supply Chain Management (SCM) is the management of the flow of goods and services
              and includes all processes that transform raw materials into final products. It involves
              the coordination and integration of various stakeholders to ensure efficient and
              cost-effective operations from suppliers to end customers.
            </p>
            <p className="text-lg text-gray-200">
              In today’s world, an optimized supply chain is crucial for businesses to remain
              competitive. With the help of modern technology, automation, and data analytics, companies
              can streamline their operations, reduce costs, and improve customer satisfaction.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-yellow-300">
              Key Features of Our Supply Chain
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-200 space-y-4">
              <li>Real-time tracking and monitoring of shipments</li>
              <li>Efficient inventory management and demand forecasting</li>
              <li>Integrated communication channels for seamless coordination</li>
              <li>Automated processes for enhanced efficiency</li>
              <li>Global reach with local expertise</li>
            </ul>
            <p className="text-lg text-gray-200">
              Our supply chain solution focuses on optimizing every step, ensuring cost reduction
              while maintaining high levels of customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Supply Chain?</h2>
        <p className="text-lg mb-6">Join us in revolutionizing the logistics world. Get in touch for more details.</p>
        <a
          href="/contact"
          className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Contact Us
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">&copy; 2024 SupplyChain Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default About;
