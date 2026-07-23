import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import treePruning from "../assets/images/tree-pruning.webp";
import landClearing from "../assets/images/land-clearing.webp";

function Services({ data }) {
const services = [

    {
      title: "Tree Removal",
      image: treeRemoval,
      description:
        "Safe and professional tree removal services for damaged, dangerous, and unwanted trees."
    },

    {
      title: "Tree Trimming",
      image: treeTrimming,
      description:
        "Expert tree trimming services to improve tree health, safety, and appearance."
    },

    {
      title: "Stump Grinding",
      image: stumpGrinding,
      description:
        "Complete stump grinding services to remove unwanted stumps from your property."
    },

    {
      title: "Emergency Tree Service",
      image: emergencyTree,
      description:
        "Fast emergency tree services for storm damage and dangerous tree situations."
    },

    {
      title: "Tree Pruning",
      image: treePruning,
      description:
        "Professional pruning services to keep your trees healthy and well maintained."
    },

    {
      title: "Land Clearing",
      image: landClearing,
      description:
        "Reliable land clearing services for residential and commercial properties."
    }

  ];

  return (
<section className=" bg-white py-20 " >
<div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
<div className=" text-center mb-14 " >

 <p className=" text-green-700 font-semibold mb-3 " >
 Our Services
</p>

<h2 className=" text-3xl md:text-5xl font-bold text-[#071b12] " >
 Professional Tree Services in {data.city}
 </h2>
<p className=" mt-5 max-w-3xl mx-auto text-gray-600 leading-8 " >
 We provide reliable tree care solutions with quality workmanship, safety, and customer satisfaction.
</p>
</div>

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >

 { services.map((service,index)=>(
 <div key={index}
 className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-x transition duration-300 " >

<img src={service.image} alt={service.title}
 className=" w-full h-64 object-cover "/>
 <div className=" p-7 " >
 <h3 className=" text-xl font-bold text-gray-900 mb-3 " >
 {service.title}
 </h3>

 <p className=" text-gray-600 leading-7 " >
{service.description}
 </p>

 <a href="#contact"
 className=" inline-block mt-5 text-green-700 font-semibold hover:text-green-900 " >
 Get Free Estimate →
 </a>
</div>
 </div>
 ))
 }
</div>
 </div>
</section>

  );

}

export default Services;