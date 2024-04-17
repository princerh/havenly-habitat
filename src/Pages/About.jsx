/* eslint-disable react/no-unescaped-entities */

import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
           <title>Havenly | About</title>
           </Helmet>

           <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-3xl leading-9 font-bold text-gray-900 mb-4">
              About Havenly Habitat
            </h3>
            <p className="text-lg text-gray-700">
              Havenly Habitat is more than just a real estate company - we're
              your partners in finding the perfect home. We understand that
              buying or renting a property is not just a transaction, but a
              significant milestone in your life. That's why we're committed
              to providing you with exceptional service, personalized advice,
              and a seamless experience every step of the way.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900 sm:col-span-1">
                  Our Mission
                </dt>
                <dd className="mt-1 text-lg text-gray-700 sm:col-span-2">
                  At Havenly Habitat, our mission is to make your dream home a
                  reality. Whether you're searching for a cozy apartment in
                  the city or a spacious family home in the suburbs, we're
                  here to help you find the perfect place to call your own.
                </dd>
              </div>

              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900 sm:col-span-1">
                  Our Values
                </dt>
                <dd className="mt-1 text-lg text-gray-700 sm:col-span-2">
                  Integrity, excellence, and community are at the core of
                  everything we do. We believe in treating our clients with
                  honesty and respect, striving for excellence in all aspects
                  of our work, and giving back to the communities we serve.
                </dd>
              </div>

              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-900 sm:col-span-1">
                  Our Team
                </dt>
                <dd className="mt-1 text-lg text-gray-700 sm:col-span-2">
                  Our team consists of experienced real estate professionals
                  who are passionate about helping you find your perfect home.
                  From our knowledgeable agents to our dedicated support staff,
                  we're here to provide you with expert guidance and support
                  every step of the way.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;