import { useState } from "react";
import blogTrimming from "../assets/images/tree-trimming.webp";
import blogRemoval from "../assets/images/tree-removal.webp";
import blogStump from "../assets/images/stump-grinding.webp";

function Blog({ data }) {
const [expanded, setExpanded] = useState(null);
const blogs = [
{
  title: "How Often Should You Trim Your Trees?",
  date: "July 2026",
  image: blogTrimming,
  description:
    "Regular tree trimming helps maintain healthy growth, improve appearance, and prevent dangerous branches.",
  fullDescription:
    "Regular tree trimming keeps your trees healthy and safe. Professional trimming removes damaged branches, improves sunlight exposure, and helps prevent future tree problems. Our experts use safe methods to maintain the natural shape of your trees."
},


{
  title: "Signs You Need Professional Tree Removal",
  date: "June 2026",
  image: blogRemoval,
  description:
    "Learn the common warning signs that a tree may become a safety risk to your home or property.",
  fullDescription:
    "Trees that are damaged, leaning, diseased, or growing too close to buildings can become dangerous. Professional tree removal ensures the job is completed safely with proper equipment and experience."
},


{
  title: "Benefits of Professional Stump Grinding",
  date: "May 2026",
  image: blogStump,
  description:
   "Removing old tree stumps improves your landscape and creates a safer outdoor environment.",
  fullDescription:
   "Old stumps can attract insects, take up valuable space, and make lawn maintenance difficult. Stump grinding removes unwanted stumps and helps restore a clean, beautiful outdoor area."
}
];

return (

<section className="bg-gray-50 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-14">
<p className="text-green-700 font-semibold mb-3">
   Our Blog
</p>

 <h2 className="text-3xl md:text-5xl font-bold text-[#071b12]">
    Tree Care Tips & Information
 </h2>

<p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
   Helpful information about tree maintenance,safety, and professional tree services in {data.city}.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{
   blogs.map((blog,index)=>(

 <article key={index}
  className=" bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

<img src={blog.image} alt={blog.title}
  className=" w-full h-60 object-cover"/>

<div className="p-8">
 <p className="text-green-700 font-medium mb-3"> {blog.date} </p>

 <h3 className="text-xl font-bold text-gray-900 mb-4"> {blog.title} </h3>

 <p className="text-gray-600 leading-7"> {blog.description} </p>

{
  expanded === index && (
 <p className="mt-4 text-gray-600 leading-7" >
 {blog.fullDescription}</p>
 )
  }
<button
onClick={() => setExpanded(
   expanded === index ? null : index
 )
 }

className="mt-5 text-green-700 font-semibold hover:text-green-900 transition">
{ expanded === index ? "Read Less ↑" : "Read More →" }
</button>
</div>
</article>
))
  }
</div>
</div>
</section>
 );

}

export default Blog;