import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialCTA from "./components/SocialCTA";
import MissionSnapshot from "./components/MissionSnapshot";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialCTA />
        <MissionSnapshot />
      </main>
      <Footer />
    </div>
  );
}
