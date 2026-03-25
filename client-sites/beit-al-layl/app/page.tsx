import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TheTable from "@/components/TheTable";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-midnight text-cream overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <TheTable />
      <Menu />
      <Story />
      <Reserve />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
