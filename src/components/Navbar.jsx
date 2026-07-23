import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiChevronRight } from "react-icons/fi";
import LocationDropdown from "./LocationDropdown";
import locations from "../data/locations";
import logo from "../assets/images/logo.webp";

const Navbar = ({ location }) => {
const [open, setOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");
const navigate = useNavigate();
const routerLocation = useLocation();
const currentLocation =location || "syracuse";
const data =locations[currentLocation] || locations.syracuse;
const navLinks = [
 {
      name:"Home",
      id:"home"
    },

    {
      name:"About",
      id:"about"
    },

    {
      name:"Services",
      id:"services"
    },

    {
      name:"Blog",
      id:"blog"
    },

    {
      name:"Contact",
      id:"contact"
    }

  ];

const goToSection = (id)=>{ setOpen(false);
 if(routerLocation.pathname === `/${currentLocation}`){

const section = document.getElementById(id);
if(section){ section.scrollIntoView({
   behavior:"smooth",
   block:"start"
});
}
 }

 else{

 navigate(`/${currentLocation}#${id}`);
 }
 };

 useEffect(()=>{ if(routerLocation.hash){
const id = routerLocation.hash.replace("#","");
 setTimeout(()=>{
 const section = document.getElementById(id);

 if(section){ section.scrollIntoView({
    behavior:"smooth"

 });
 }
 },300);
 }
},[routerLocation]);

useEffect(()=>{
 const sections = document.querySelectorAll(
 "#home,#about,#services,#blog,#contact"
 );

 const observer = new IntersectionObserver(
 (entries)=>{

 const visible = entries.find( entry=>entry.isIntersecting );

 if(visible){ setActiveSection( visible.target.id );
 }
},

  {
     threshold:0.45
 }
 );

 sections.forEach(section=>{ observer.observe(section);
});
 return ()=>observer.disconnect();
 },[routerLocation.pathname]);

  return (

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

{/* Logo */}
<button
onClick={()=>goToSection("home")}
className="flex items-center gap-3">

<img src={logo} alt={data.name}
className="w-14 h-14 object-contain"/>

<div className="text-left">
<h1 className="text-xl font-black text-green-950 leading-none">
{data.name}
</h1>
</div>
</button>

{/* Desktop Menu */}
<nav className="hidden lg:flex items-center gap-8">
{ navLinks.map(link=>(

<button
key={link.id}
onClick={()=>goToSection(link.id)}
className="relative group text-sm font-semibold text-gray-700 transition">

<span className={ 
  activeSection===link.id ?
"text-green-700" :""
} >
{link.name}
</span>

<span className={` absolute left-0 bottom-[-6px] h-[2px] bg-green-700 transition-all
${ activeSection===link.id ? "w-full" : "w-0 group-hover:w-full"} `} />

</button>
))
}

<LocationDropdown />
</nav>

{/* Call Button */}
<a href={`tel:${data.phone}`}
className="hidden lg:flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold
shadow-lg transition">

<FiPhone/>
Call Now
</a>

{/* Mobile Button */}

<button onClick={()=>setOpen(!open)}
className="lg:hidden text-green-900">
{
open ?
<FiX size={30}/>
:
<FiMenu size={30}/>
}
</button>
</div>

{/* Mobile Menu */}

{ open &&
<div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t">
<div className="p-6 space-y-4">
{
navLinks.map(link=>(
<button key={link.id}
onClick={()=>goToSection(link.id)}
className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold
${ activeSection===link.id ?
"bg-green-50 text-green-700" : "text-gray-700" } `}>

{link.name}
<FiChevronRight/>
</button>
))
}

<LocationDropdown />
<a href={`tel:${data.phone}`}
className="flex justify-center items-center gap-2 bg-green-700 text-white py-3 rounded-xl font-bold">

<FiPhone/>
Call Now
</a>
</div>
</div>
}
</header>

  );

};

export default Navbar;