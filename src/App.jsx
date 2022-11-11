import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Carousel from "./components/Carousel"
import List from "./components/List"
import Map from "./components/Map"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { experienceList, educationList } from "./listing"

function App() {

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <section>
        <h3>Things I have designed for digital media agencies</h3>
        <Carousel />
      </section>
      <section> 
        <h2>Projects</h2>
        <List list={experienceList} />
      </section>
      <section> 
        <h2>Educations</h2>
        <List list={educationList} />
      </section>
      <section>
        <Map />
        <h3>Interested to work together? Let's talk</h3>
        <Contact />
      </section>
      <Footer />
    </div>
  )
};

export default App;
