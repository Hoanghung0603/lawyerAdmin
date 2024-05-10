import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import AdminApplications from "../components/AdminApplications";
import AdminAppointments from "../components/AdminAppointments";
import AdminDoctors from "../components/AdminDoctors";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
  <>
    <section className="layout-section">
        <div className="layout-container">
         
          <Sidebar /> 
          <AdminApplications />
        </div>
      </section>
    
  </>
    
  );
};

export default Home;
