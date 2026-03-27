import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Lookbook from '@/components/Lookbook';
import Boutique from '@/components/Boutique';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Lookbook />
        <Boutique />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
