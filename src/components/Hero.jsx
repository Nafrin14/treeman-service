import { Link } from "react-router-dom";

function Hero({ data }) {
 return (
<section className="relative min-h-screen overflow-hidden">

{/* Background */}

<img src={data.heroImage} alt={data.name} className=" absolute inset-0 h-full w-full object-cover" />

{/* Gradient Overlay */}
<div className=" absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent "/>

{/* Content */}
<div className=" relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12 " >

 <div className="max-w-3xl">
<p className=" mb-4 text-sm font-semibold uppercase tracking-[4px] text-green-300" >
   Welcome To </p>

 <h1 className=" text-5xl md:text-7xl font-black leading-tight text-white" >
 {data.name}</h1>

<div className=" mt-7 h-1 w-24 bg-green-600 "/>
 
  <p className=" mt-8 max-w-2xl text-lg leading-8 text-gray-200" >
   {data.heroText} </p>

 <div className=" mt-10 flex flex-wrap gap-5 " >

 {/* Get Free Estimate */}
 <Link
 to={`/${data.slug}/contact`}
  className="rounded-md bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition " >
   Get Free Estimate </Link>

 {/* Call Now */}
 <a href={`tel:${data.phone}`}
 className=" rounded-md border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white
  hover:text-black transition " >
   Call Now </a>
 </div>
</div>
 </div>
 </section>

  );

}

export default Hero;