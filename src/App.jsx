import Count from "./components/Count";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const username = "olayinka gbenga";
  return (
    <section className="">
      <Navbar />
      <Hero name={username} YOE={24}/>
      <Count />

    </section>
  );
}

export default App;
