import CallToAction from "./homepage/CallToAction";
import Herosection from "./homepage/Herosection";
import Todo from "./homepage/Todo";
import Navbar from "./utils/Navbar"
import Footer from "./homepage/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Todo />
      <CallToAction />
      <Footer />
    </>
  );
}
