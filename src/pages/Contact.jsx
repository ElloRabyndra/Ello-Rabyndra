import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactContent from "@/components/contact/ContactContent";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="container mx-auto min-h-screen">
        <Navbar />
        <div className="p-4 max-w-7xl mx-auto pt-24 lg:pt-28">
          <ContactHeader />
          <ContactContent/>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
