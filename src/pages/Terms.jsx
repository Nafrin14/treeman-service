import { useParams } from "react-router-dom";
import locations from "../data/locations";

const serviceItems = [
  "Tree removal",
  "Tree trimming",
  "Stump grinding",
  "Emergency tree services",
  "Land clearing",
  "Storm cleanup",
];

const messageItems = [
  "Estimate updates",
  "Appointment confirmations",
  "Service reminders",
  "Project status notifications",
  "Emergency service updates",
  "Customer support messages",
  "Promotional offers related to our tree care services",
];

function Terms() {

  const { location } = useParams();

  const data =
    locations[location] || locations.syracuse;
  return (
    <>
{/* Hero Section */}
<section className="bg-[#071b12] py-14 text-white">
  <div className="mx-auto max-w-5xl px-4">

    <span className="inline-block rounded-full bg-green-500/20 px-4 py-1 text-sm font-semibold text-green-300">
      Legal
    </span>

    <h1 className="mt-4 text-2xl font-bold md:text-4xl">
      {data.name} Terms & Conditions
    </h1>

    <p className="mt-3 text-sm text-gray-300 md:text-base">
      Effective Date: January 19, 2025 | Last Updated: July 14, 2026
    </p>

  </div>
</section>

      {/* Terms Content */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-7 shadow-lg sm:p-10 md:p-14">
            <div className="space-y-10 text-gray-600">
              <p className="text-lg leading-8">
               Welcome to {data.name}. By accessing this website,
submitting a request for an estimate, or using our tree care
services, you agree to these Terms and Conditions.
              </p>

              <TermsSection title="Age Requirement">
                <p>
                  By using this website, submitting a contact form, or
                  enrolling in our SMS messaging program, you confirm that you
                  are at least 18 years of age.
                </p>
              </TermsSection>

              <TermsSection title="Terminology">
                <p>
                  “Client,” “You,” and “Your” refer to the individual using
                  this website or requesting our services.
                </p>

                <p className="mt-4">
                 “{data.name},” “The Company,” “We,” “Our,” and
“Us” refer to {data.name}.
                </p>
              </TermsSection>

              <TermsSection title="Estimates and Pricing">
                <p>
                  We may provide free estimates based on the information
                  available at the time of inspection.
                </p>

                <p className="mt-4">
                  Final pricing may change if additional hazards, hidden
                  damage, access restrictions, utility concerns, or other
                  unexpected conditions are discovered during the project.
                </p>

                <p className="mt-4">
                  Any changes to the original estimate will be discussed with
                  the client before additional work is completed.
                </p>
              </TermsSection>

              <TermsSection title="Property Access">
                <p>
                  By scheduling a service, you confirm that you have permission
                  to authorize tree work at the property.
                </p>

                <p className="mt-4">
                  The client is responsible for identifying property
                  boundaries, underground utilities, irrigation systems,
                  septic systems, invisible fences, and other concealed
                  structures that may affect the work.
                </p>
              </TermsSection>

              <TermsSection title="Safety and Weather Conditions">
                <p>
                  Tree care work may be delayed, rescheduled, or cancelled
                  because of severe weather, unsafe working conditions,
                  equipment issues, utility hazards, or other circumstances
                  beyond our control.
                </p>

                <p className="mt-4">
                  {data.name} reserves the right to stop or
postpone work that may place employees, customers,
                  surrounding property, or the public at risk.
                </p>
              </TermsSection>

              <TermsSection title="Emergency Tree Services">
                <p>
                  Emergency response times may vary depending on weather
                  conditions, road access, service demand, crew availability,
                  and the severity of the emergency.
                </p>

                <p className="mt-4">
                  Submitting an emergency service request does not guarantee
                  immediate arrival.
                </p>

                <p className="mt-4">
                  If a fallen tree or branch is touching a power line, stay
                  away from the area and contact the appropriate utility
                  provider or emergency service.
                </p>
              </TermsSection>

              <TermsSection title="Cookies">
                <p>
                  We may use cookies and similar technologies to improve
                  website performance, understand website usage, and provide a
                  better user experience.
                </p>

                <p className="mt-4">
                  Additional information about how we collect and use
                  information is available in our Privacy Policy.
                </p>
              </TermsSection>

              <TermsSection title="Intellectual Property License">
                <p>
              Unless otherwise stated, {data.name} owns or has permission
to use the text, graphics, logos, photographs, website design,
and other content displayed on this website.
                </p>

                <p className="mt-4">
                  You may not copy, reproduce, publish, sell, distribute,
                  modify, or reuse website content without prior written
                  permission.
                </p>
              </TermsSection>

              <TermsSection title="SMS Messaging Terms of Service">
                <h3 className="text-xl font-bold text-gray-900">
                  Program Description
                </h3>

                <p className="mt-4">
                  By providing your mobile phone number and consenting to
                  receive messages, you agree to receive recurring automated
                  or manually sent text messages from {data.name}.
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6">
                  {messageItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-5">
                  Consent to receive SMS messages is not required as a
                  condition of purchasing services.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  Opt-Out
                </h3>

                <p className="mt-4">
                  You may stop receiving SMS messages at any time by replying{" "}
                  <strong className="text-gray-900">STOP</strong> to any
                  message. After opting out, you may receive one final
                  confirmation message.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  Support
                </h3>

                <p className="mt-4">
                  For assistance, reply{" "}
                  <strong className="text-gray-900">HELP</strong> to any SMS
                  message or contact us directly using the information at the
                  bottom of this page.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  Message Frequency
                </h3>

                <p className="mt-4">
                  Message frequency may vary depending on your service
                  request, appointment status, and communication preferences.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  Message and Data Rates
                </h3>

                <p className="mt-4">
                  Standard message and data rates may apply depending on your
                  wireless carrier and mobile service plan.
                </p>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  Carrier Liability
                </h3>

                <p className="mt-4">
                Mobile carriers are not responsible for delayed or
undelivered messages. {data.name} cannot guarantee
delivery because it depends on carrier availability,
network coverage, and device compatibility.
                </p>
              </TermsSection>

              <TermsSection title="User-Submitted Information">
                <p>
                  When submitting a contact form, estimate request, review,
                  photograph, or other information, you agree that the
                  information provided is accurate and does not violate
                  applicable laws or another person’s rights.
                </p>

                <p className="mt-4">
                 {data.name} may remove content that is offensive,
                  misleading, unlawful, inappropriate, or in violation of
                  these Terms and Conditions.
                </p>
              </TermsSection>

              <TermsSection title="Links to External Websites">
                <p>
                  Our website may contain links to third-party websites or
                  services.{data.name} does not control and is not
                  responsible for their content, privacy practices,
                  availability, or security.
                </p>
              </TermsSection>

              <TermsSection title="Hyperlinking to Our Content">
                <p>
                  Organizations may link to our website provided that the link
                  is not misleading, does not falsely imply sponsorship or
                  endorsement, does not damage our reputation, and is relevant
                  to the linking website.
                </p>
              </TermsSection>

              <TermsSection title="Content Liability">
                <p>
                  We are not responsible for content appearing on external
                  websites that link to our website. You agree to protect and
                  defend {data.name} against claims resulting from unlawful
or misleading content published on a website under your control.
                </p>
              </TermsSection>

              <TermsSection title="Limitation of Liability">
                <p>
                  To the fullest extent permitted by law, {data.name} is not liable for indirect, incidental, special, or
                  consequential damages arising from use of this website,
                  delays, third-party services, weather conditions, or
                  information submitted through online forms.
                </p>
              </TermsSection>

              <TermsSection title="Disclaimer">
                <p>
                  Website information is provided for general informational
                  purposes and is not a substitute for an on-site professional
                  inspection.
                </p>

                <p className="mt-4">
                 {data.name} does not guarantee that all website
                  information will always be complete, accurate, or up to date.
                </p>
              </TermsSection>

              <TermsSection title="Changes to These Terms">
                <p>
                  {data.name} may update these Terms and Conditions
when necessary. Changes will be published on this page with
                  an updated “Last Updated” date.
                </p>
              </TermsSection>

              <TermsSection title="Governing Law">
                <p>
                  These Terms and Conditions are governed by the applicable
                  laws of the State of New York and the United States.
                </p>
              </TermsSection>

              <TermsSection title="Contact Information">
                <div className="rounded-2xl bg-green-50 p-6">

<p>
<strong className="text-gray-900">Company:</strong>{" "}
{data.name}
</p>

<p className="mt-3">
<strong className="text-gray-900">Service Area:</strong>{" "}
{data.city} and nearby areas
</p>

<p className="mt-3">
<strong className="text-gray-900">Phone:</strong>{" "}
{data.phone}
</p>

<p className="mt-3">
<strong className="text-gray-900">Email:</strong>{" "}
{data.email}
</p>

</div>
              </TermsSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsSection({ title, children }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
        {title}
      </h2>

      <div className="leading-8">{children}</div>
    </section>
  );
}

export default Terms;