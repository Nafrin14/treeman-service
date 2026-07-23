import { useParams } from "react-router-dom";
import locations from "../data/locations";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";

function Home() {
const { location } = useParams();
const data = locations[location] || locations.syracuse;

 return (

<main>
{/* Hero Section */}

<section id="home"
className="min-h-screen scroll-mt-20" >

<Hero data={data} />
</section>

{/* About Section */}
<section id="about"
 className="scroll-mt-20" >

 <About data={data} />
</section>

{/* Services Section */}
<section id="services"
 className="scroll-mt-20" >

 <Services data={data} />
</section>

{/* Blog Section */}
<section id="blog"
 className="scroll-mt-20">

<Blog data={data} />
</section>

{/* Contact Section */}
<section id="contact"
 className="scroll-mt-20" >

 <Contact data={data} />
</section>

{/* CTA Section */}
<section className="py-16 bg-green-900">
 <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center " >
 <h2 className=" text-3xl md:text-4xl font-bold text-white mb-5 " >
 Need Professional Tree Service?
 </h2>

 <p className=" text-green-100 mb-8 max-w-2xl mx-auto " >
 Contact our team today for a free estimate.
 </p>
<a href="#contact"
 className=" inline-flex items-center justify-center bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10
  transition " >
 Get Free Estimate
 </a>
 </div>
 </section>
 </main>

  );

}

export default Home;