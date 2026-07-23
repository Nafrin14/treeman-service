import aboutImage from "../assets/images/about-tree.webp";

function About({ data }) {
return (
 <section className="bg-white py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

 {/* Image */}
<div>
<img src={aboutImage}
alt="TreeMan Service team" className="w-full h-[450px] object-cover rounded-3xl shadow-lg" />
</div>

{/* Content */}
<div>
 <p className="text-green-700 font-semibold mb-3">
About TreeMan Service
</p>

<h2 className="text-3xl md:text-5xl font-bold  text-[#071b12] leading-tight mb-6" >
Professional Tree Care Experts
Serving {data.city}, {data.state}
 </h2>

 <p className="text-gray-600 leading-8 mb-5">
TreeMan Service provides reliable and professional tree care solutions for homeowners and businesses. Our skilled
team handles tree removal, tree trimming, stump grinding,and emergency tree services with safety as our top priority.
</p>

<p className="text-gray-600 leading-8 mb-8">
 We understand the importance of maintaining safe and beautiful outdoor spaces. Every project is completed with
 quality workmanship, modern equipment, and customer-focused service.
</p>

{/* Stats */}
<div className="grid grid-cols-2 gap-5">
<div className="bg-green-50 rounded-xl p-5">
 <h3 className="text-3xl font-bold text-green-800"> 10+ </h3>
<p className="text-gray-600"> Years Experience </p>
</div>

<div className="bg-green-50 rounded-xl p-5">
<h3 className="text-3xl font-bold text-green-800">  1000+ </h3>
<p className="text-gray-600">  Happy Customers </p>
</div>
</div>
 </div>
 </div>
</div>
</section>

  );

}

export default About;