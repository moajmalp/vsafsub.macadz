import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Locations from "@/components/Locations";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Locations />
      <BlogPreview />
      <ContactForm />
      <Footer />
    </main>
  );
}
