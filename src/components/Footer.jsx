import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import locations from "../data/locations";

function Footer({ location }) {
  const currentLocation = location || "syracuse";

  const data =
    locations[currentLocation] || locations.syracuse;

  return (
    <footer className="bg-[#071b12] text-white">

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {data.name}
            </h2>

            <p className="text-gray-300 leading-7">
              Professional tree removal, trimming and complete tree
              care services for residential and commercial properties.
            </p>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Tree Removal
                </a>
              </li>

              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Tree Trimming
                </a>
              </li>

              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Stump Grinding
                </a>
              </li>

              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Emergency Tree Service
                </a>
              </li>

              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Tree Pruning
                </a>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <p className="flex items-center gap-3">
                <FiPhone className="text-green-400" />
                {data.phone}
              </p>


              <p className="flex items-center gap-3">
                <FiMail className="text-green-400" />
                {data.email}
              </p>


              <p className="flex items-start gap-3">
                <FiMapPin className="text-green-400 mt-1" />
                {data.address}
              </p>

            </div>
          </div>



          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3 text-gray-300">

              <li>
                <a
                  href={`/${currentLocation}#home`}
                  className="hover:text-green-400 transition"
                >
                  Home
                </a>
              </li>


              <li>
                <a
                  href={`/${currentLocation}#about`}
                  className="hover:text-green-400 transition"
                >
                  About Us
                </a>
              </li>


              <li>
                <a
                  href={`/${currentLocation}#services`}
                  className="hover:text-green-400 transition"
                >
                  Services
                </a>
              </li>


              <li>
                <a
                  href={`/${currentLocation}#blog`}
                  className="hover:text-green-400 transition"
                >
                  Blog
                </a>
              </li>


              <li>
                <a
                  href={`/${currentLocation}#contact`}
                  className="hover:text-green-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>



      {/* Bottom Footer */}
      <div className="border-t border-white/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">


          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} {data.name}. All Rights Reserved.
          </p>


          <div className="flex gap-6 text-sm">

            <Link
              to={`/${currentLocation}/terms`}
              className="text-gray-300 hover:text-green-400 transition"
            >
              Terms & Conditions
            </Link>


            <Link
              to={`/${currentLocation}/privacy`}
              className="text-gray-300 hover:text-green-400 transition"
            >
              Privacy Policy
            </Link>

          </div>


        </div>

      </div>


    </footer>
  );
}

export default Footer;