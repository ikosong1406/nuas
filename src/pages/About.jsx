import React from "react";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";

const About = () => {
  return (
    <Header>
      <div className="bg-white text-gray-900 font-sans pt-16">
        {/* Hero Section */}
        <section className="relative h-96">
          <img
            src={cargif} // Ensure this path is correct
            alt="Background GIF"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
          </div>
        </section>
        <div className="text-lg sm:text-xl text-gray-700 mb-6 px-8 mt-4">
          <p className="mb-4">
            As the apex student union in Andoni Local Government Area of Rivers
            State, Nigeria founded in the year 1962 but had its first National
            President in the year 1969, the National Union of Andoni Students
            (NUAS) Worldwide is dedicated to empowering Andoni communities
            through education, unity, and leadership development
          </p>
          <p className="mb-4">
            NUAS strives to foster a culture of excellence, promoting the
            welfare, peace, and harmony of its members, while driving positive
            change and progress in Andoni.
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-4 text-gold px-8">
          Aim & Objectives
        </h3>
        <ul className="px-8">
          <li className="text-lg">
            - To stimulate and sustain an accelerated programme that will
            liberate all our communities from neo-colonialist shackles and
            eliminate ignorance, illiteracy, wants, and diseases.
          </li>
          <li className="text-lg">
            - To create a level of awareness that seeks to harmonize the views
            of different communities in Andoni, using NUAS as a platform.
          </li>
          <li className="text-lg">
            - To strive to compliment the effort of our leaders to establish our
            political existence as a distinct group that seeks to make our
            position more real and meaningful.
          </li>
          <li className="text-lg">
            - To inculcate and promote the spirit of oneness and patriotism
            among our people as well as protect the socio- cultural interest of
            Andoni Kingdom.
          </li>
          <li className="text-lg">
            - To liaise with sister bodies or union (if and when necessary) so
            as to maintain cordial relationship and exchange of ideas for the
            internal development of Andoni Kingdom.
          </li>
          <li className="text-lg">
            - To promote the status, welfare, peace, and good relationship of
            its members.
          </li>
          <li className="text-lg">
            - To provide forum for the inculcation of leadership qualities in
            Andoni students; and
          </li>
          <li className="text-lg">
            - To build a virile and conscious bridge (educationally between the
            past leaders of Andoni and the present).
          </li>
          <li className="text-lg">
            - to carryout advocacy/campaigns on entrepreneurial education and
            other activities that will broaden and enhance the knowledge of
            Andoni students and graduates
          </li>
          <li className="text-lg">
            - to ensure that NUAS is a non-partisan student union and will
            remain apolitical never involved in party politics.
          </li>
        </ul>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-black py-8">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} National Union of Andoni
              Students. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </Header>
  );
};

export default About;
