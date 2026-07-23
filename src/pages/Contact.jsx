import { useParams } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import locations from "../data/locations";

function Contact() {
  const { location } = useParams();

  const data =
    locations[location] || locations.syracuse;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
            Contact Tree Experts
          </span>

          <h1 className="mt-5 text-3xl md:text-5xl font-black text-gray-900">
            Get Your Free Tree Service Estimate
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-8">
            Schedule professional tree removal, trimming and complete tree
            care services in {data.city}.
          </p>

        </div>


        <div className="grid lg:grid-cols-12 gap-8">


          {/* Contact Info */}
          <div className="lg:col-span-4">

            <div className="bg-[#071b12] rounded-3xl p-7 text-white">

              <h2 className="text-2xl font-bold mb-7">
                Contact Us
              </h2>


              <div className="space-y-6">


                <div className="flex gap-4 items-center">
                  <div className="bg-green-700 w-11 h-11 rounded-full flex items-center justify-center">
                    <FiPhone />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Call Us
                    </p>

                    <p className="font-semibold">
                      {data.phone}
                    </p>
                  </div>
                </div>



                <div className="flex gap-4 items-center">
                  <div className="bg-green-700 w-11 h-11 rounded-full flex items-center justify-center">
                    <FiMail />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Email
                    </p>

                    <p className="font-semibold break-all">
                      {data.email}
                    </p>
                  </div>
                </div>



                <div className="flex gap-4 items-center">
                  <div className="bg-green-700 w-11 h-11 rounded-full flex items-center justify-center">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Location
                    </p>

                    <p className="font-semibold">
                      {data.city}
                    </p>
                  </div>
                </div>



                <div className="flex gap-4 items-center">
                  <div className="bg-green-700 w-11 h-11 rounded-full flex items-center justify-center">
                    <FiClock />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Working Hours
                    </p>

                    <p className="font-semibold">
                      Mon - Sat : 8AM - 6PM
                    </p>
                  </div>
                </div>


              </div>

            </div>

          </div>



          {/* Contact Form */}
          <div className="lg:col-span-8">

            <div className="bg-white rounded-3xl shadow-xl p-5 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Request Free Estimate
              </h2>


              <p className="text-gray-500 mb-5">
                Fill out the form and our tree service team will contact you shortly.
              </p>


              <iframe
                src={data.contactForm}
                title={`${data.city} Contact Form`}
                scrolling="no"
                className="w-full h-[900px] border-0 overflow-hidden"
              />

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}

export default Contact;