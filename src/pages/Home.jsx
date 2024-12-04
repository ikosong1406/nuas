import React, { useState, useEffect } from "react";
import cargif from "../assets/team.jpeg";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BackendApi from "../components/BackendApi";
import Header from "../components/Header";
import pics1 from "../assets/001.jpg";
import pics2 from "../assets/002.jpg";
import pics3 from "../assets/003.jpg";
import pics4 from "../assets/004.jpg";
import pics5 from "../assets/005.jpg";
import pics6 from "../assets/006.jpg";
import pics7 from "../assets/007.jpg";
import pics8 from "../assets/008.jpg";

const Home = () => {
  const [leadership, setLeadership] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Fetch Leadership Data
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allPosition`);
        setLeadership(response.data);
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    // Fetch News Data
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allNews`); // Replace with your API endpoint for news
        setNews(response.data.slice(0, 4)); // Limit to top 4 news
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchLeaders();
    fetchNews();
  }, []);

  const whatsappLink = "https://chat.whatsapp.com/D5Uhg43Ehb7Gwiahgy81MUs"; // Replace with your actual WhatsApp group link

  const handleJoinGroup = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const galleryData = [
    {
      image: pics1, // Replace with your actual image path
      description:
        "56TH NATIONAL EXECUTIVE COUNCIL WITH LM LUCKY SATURDAY ENEYO AT RCCG LIGHT HOUSE MEGA PARISH",
    },
    {
      image: pics2, // Replace with your actual image path
      description: "56TH NEC AND NUASITES AT 2024 EDUCATION AND HEALTH PROGRAM",
    },
    {
      image: pics3, // Replace with your actual image path
      description:
        "56TH NEC AND THE SSA ON STUDENT AFFAIRS TO ANDONI LGA CHAIRMAN",
    },
    {
      image: pics4, // Replace with your actual image path
      description:
        "56TH NEC WITH GSS NGO STUDENTS AT 2024 EDUCATION AND HEALTH PROGRAM",
    },
    {
      image: pics5, // Replace with your actual image path
      description:
        "THE SSA ON STUDENTS AFFAIRS TO THE EXECUTIVE CHAIRMAN ANDONI LGA, PRESENTING CERTIFICATES TO WINNERS AT 2024 EDUCATION AND HEALTH PROGRAM",
    },
    {
      image: pics6, // Replace with your actual image path
      description:
        "The 56th National Vice President, sharing gifts to Students at the 2024 Education and Health program",
    },
    {
      image: pics7, // Replace with your actual image path
      description:
        "NEC WITH JOEL BARA, Zonal Director, Rivers State Ministry of Education Board",
    },
    {
      image: pics8, // Replace with your actual image path
      description:
        "NEC AT COUNCIL SECRETARIATE AFTER A BRIEF MEETING WITH THE EXECUTIVE CHAIRMAN",
    },
  ];

  return (
    <Header>
      <div className="bg-white text-gray-900 font-sans mt-16">
        {/* Hero Section */}
        <section className="relative h-96">
          <img
            src={cargif}
            alt="Background GIF"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">
              National Union of Andoni Students Worldwide (NUAS)
            </h1>
            <button
              onClick={handleJoinGroup}
              className="bg-gold text-white font-bold py-3 px-6 rounded-lg"
            >
              Join the union
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-8 bg-gray-50 px-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gold">About Us</h2>
            <div className="text-lg sm:text-xl text-gray-700 mb-6">
              <p className="mb-4">
                As the apex student union in Andoni Local Government Area of
                Rivers State, Nigeria founded in the year 1962 but had its first
                National President in the year 1969, the National Union of
                Andoni Students (NUAS) Worldwide is dedicated to empowering
                Andoni communities through education, unity, and leadership
                development.
              </p>
              <p className="mb-4">
                NUAS strives to foster a culture of excellence, promoting the
                welfare, peace, and harmony of its members, while driving
                positive change and progress in Andoni.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Swiper */}
        <section className="pt-8 bg-white px-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-gold">
              Our Leadership
            </h3>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {leadership.map((leader, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-semibold text-gold mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-lg text-gray-700">{leader.position}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* News Swiper */}
        <section className="py-12 bg-gray-50 px-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-gold">Top News</h3>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {news.map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gold mb-2">
                      {article.heading}
                    </h4>
                    <p className="text-lg text-gray-700">{article.body}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="gallery" className="pt-8 bg-gray-50 px-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gold">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-gray-700 text-lg font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

export default Home;
