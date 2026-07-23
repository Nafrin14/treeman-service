import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiMapPin } from "react-icons/fi";

function LocationDropdown() {
const [open, setOpen] = useState(false);
const navigate = useNavigate();
const changeLocation = (city) => {

 navigate(`/${city}`);

window.scrollTo({ top: 0, behavior: "instant" });
setOpen(false);
};

 return (

 <div className="relative">
 <button onClick={() => setOpen(!open)}
 className=" flex items-center gap-2 text-gray-700 font-medium hover:text-green-700 transition " >

 <FiMapPin size={18}
 className="text-green-700" />
 Location

<FiChevronDown size={18}
 className={` transition-transform duration-30 ${open ? "rotate-180" : ""} `} />
 </button>

 {open && (

 <div className=" absolute top-12 left-0 w-52 bg-white/95 backdrop-blur-lg
  rounded-2xl shadow-2xl border border-gray-100 p-2 " >

<button onClick={() => changeLocation("syracuse")}
 className=" w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700
 hover:bg-green-50 hover:text-green-700 transition " >

 <FiMapPin className="text-green-600"/>
 Syracuse </button>

 <button onClick={() => changeLocation("rochester")}
 className=" w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700
 transition " >

<FiMapPin className="text-green-600"/>
Rochester
 </button>
</div>
      )}
    </div>

  );

}

export default LocationDropdown;