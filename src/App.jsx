import {
  Navbar,
  Hero,
  Billing,
  Business,
  CardDeal,
  Reviews,
  Stats,
  Footer,
} from "./components";

function App() {
  return (
    <div
      className="bg-primary w-full overflow-x-hidden
    text-white scrollbar-thin scrollbar-thumb-[#33bbcf] scrollbar-track-gray-800 h-screen overflow-y-scroll z-50"
    >
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Business />
      </section>

      <section id="product">
        <Billing />
      </section>

      <section>
        <CardDeal />
      </section>

      <section id="clients">
        <Reviews />
      </section>

      <section>
        <Stats />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
