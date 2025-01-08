"use client";
import React from 'react';

const ServicePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-black to-pink-800 w-full min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-opacity-90 p-8 rounded-lg shadow-xl border-2 border-gray-700 text-white">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Services</h2>
        
        <div className="space-y-8">
          <div className="service-item">
            <h3 className="text-2xl font-bold">1. Donate to Support Creators/Individuals</h3>
            <p className="text-lg">Support your favorite creators by donating directly through our secure platform. You can choose one-time or recurring donations to ensure they continue their work.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">2. Payment Processing Integration</h3>
            <p className="text-lg">We offer secure payment processing services for creators, businesses, or organizations, helping you receive donations and payments with ease.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">3. Fundraising Campaigns</h3>
            <p className="text-lg">Create your own fundraising campaign with custom goals and timelines. Share your cause and raise funds for personal or charitable reasons.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">4. Profile Customization for Creators</h3>
            <p className="text-lg">Personalize your profile with a cover photo, profile picture, and messages that help tell your story and connect with your supporters.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">5. Top Supporters Section</h3>
            <p className="text-lg">See who your top supporters are. Donors can receive badges and rewards, and the leaderboard showcases the most generous individuals.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">6. User Analytics & Reports</h3>
            <p className="text-lg">Get a detailed overview of your donations with data-backed insights. See trends, total donations, and much more.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">7. Secure Transactions & Data Protection</h3>
            <p className="text-lg">Your safety is our priority. We ensure all transactions are encrypted and data is kept private with industry-standard security measures.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">8. Support for Businesses and Startups</h3>
            <p className="text-lg">Business owners and startups can integrate our payment solutions into their websites or apps, allowing for smooth and efficient donations.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">9. Charity Integration</h3>
            <p className="text-lg">Charities can create dedicated fundraising pages with tracking, donation management, and the ability to communicate with donors.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">10. Customized Donation Options</h3>
            <p className="text-lg">Donors can leave personalized messages with their donations, making their support more meaningful.</p>
          </div>

          <div className="service-item">
            <h3 className="text-2xl font-bold">11. User Support and Consultation</h3>
            <p className="text-lg">We offer support to help you with any issues or questions regarding your donations, payments, or using the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
