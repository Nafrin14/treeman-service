import { useParams } from "react-router-dom";
import locations from "../data/locations";

function Privacy() {
const { location } = useParams();
const data = locations[location] || locations.syracuse;
 return (
 <>

 {/* Hero Section */}
<section className="bg-[#071b12] py-14 text-white">
  <div className="mx-auto max-w-5xl px-4">

    <span className="inline-block rounded-full bg-green-500/20 px-4 py-1 text-sm font-semibold text-green-300">
      Legal
    </span>

    <h1 className="mt-4 text-2xl font-bold md:text-4xl">
      {data.name} Privacy Policy
    </h1>

    <p className="mt-3 text-sm text-gray-300 md:text-base">
      Effective Date: January 19, 2025 | Last Updated: July 14, 2026
    </p>

  </div>
</section>

<section className="bg-gray-50 py-16 md:py-20">
<div className="mx-auto max-w-5xl px-6">
<div className="rounded-3xl bg-white p-7 shadow-lg sm:p-10 md:p-14">
 <div className="space-y-10 text-gray-600">
 <p className="text-lg leading-8">
 {data.name} is committed to protecting your privacy and personal information. This Privacy Policy explains how we
 collect, use, store, and protect your information when you use our website, request a free estimate, schedule a service, or
 communicate with us.
 </p>
 
 <PrivacySection title="Information We Collect">
<p>
We may collect personal information when you contact us,
submit an estimate request, schedule tree care services,
or communicate with our team.
</p>

<ul className="mt-5 list-disc space-y-2 pl-6">
<li>Your name</li>
<li>Property or service address</li>
<li>Email address</li>
<li>Telephone or mobile phone number</li>
<li>Details about tree care services requested</li>
<li>Appointment and estimate information</li>
<li>Messages and communication details</li>
<li>Photographs or files submitted with a service request</li>
</ul>
</PrivacySection>

<PrivacySection title="SMS Privacy Notice">
<h3 className="text-xl font-bold text-gray-900">
Collection of Information
</h3>

<p className="mt-4">
We collect your mobile phone number when you voluntarily
opt in to receive SMS communications from {data.name}.
</p>

<h3 className="mt-8 text-xl font-bold text-gray-900">
Use of SMS Information
</h3>

<p className="mt-4">
We may use your phone number to send appointment reminders,
service updates, estimate notifications, project status
updates, emergency service communications, and customer
support messages.
</p>

<h3 className="mt-8 text-xl font-bold text-gray-900">
SMS Data Sharing
</h3>

<p className="mt-4">
We do not sell, rent, or share mobile phone information
or SMS consent data with third parties for marketing
purposes.
</p>
</PrivacySection>

<PrivacySection title="How We Use Your Information">
<p>
We may use your personal information to:
</p>

<ul className="mt-5 list-disc space-y-2 pl-6">
<li>Respond to questions and service requests</li>
<li>Provide and manage free estimates</li>
<li>Schedule appointments and tree care services</li>
<li>Communicate service and project updates</li>
<li>Provide customer support</li>
<li>Improve our website and customer experience</li>
<li>Maintain business and service records</li>
<li>Send promotional messages when consent is provided</li>
<li>Comply with legal and regulatory obligations</li>
</ul>
</PrivacySection>

<PrivacySection title="Mobile Information Sharing Statement">
<p>
No mobile information will be shared with third parties
or affiliates for marketing or promotional purposes.
</p>

<p className="mt-4">
All categories of information described in this Privacy
Policy exclude text messaging originator opt-in data and
consent. This information will not be shared with third
parties except where necessary to provide messaging
services or comply with applicable law.
</p>
</PrivacySection>

<PrivacySection title="How We Share Information">
<p>
We do not sell or rent your personal information.
We may share limited information with trusted service
providers that help us operate the website, manage
communications, schedule services, process forms,
or maintain business systems.
</p>

<p className="mt-4">
These providers may only use the information as necessary
to perform services on our behalf.
</p>

<p className="mt-4">
We may also disclose information where required by law,
court order, legal process, or to protect the safety,
property, and rights of {data.name}, our customers,
or others.
</p>
</PrivacySection>

<PrivacySection title="Cookie and Tracking Practices">
<p>
We may use cookies and similar technologies to improve
website performance, understand visitor usage, remember
preferences, and improve customer experience.
</p>

<p className="mt-4">
Cookies generally do not store sensitive personal
information. You may adjust your browser settings to
block or remove cookies.
</p>
</PrivacySection>

<PrivacySection title="Data Security and Handling">
<p>
We use reasonable administrative, technical, and
organizational safeguards to protect personal information
from unauthorized access, disclosure, alteration,
loss, or misuse.
</p>

<p className="mt-4">
However, no internet transmission, electronic storage
system, or security method can be guaranteed to be
completely secure.
</p>
</PrivacySection>

<PrivacySection title="Data Retention">
<p>
We retain personal information only for as long as
reasonably necessary to provide services, manage customer
relationships, maintain records, resolve disputes,
enforce agreements, or comply with legal obligations.
</p>

<p className="mt-4">
SMS consent records may be retained as needed to
demonstrate compliance with applicable messaging
requirements.
</p>
</PrivacySection>

<PrivacySection title="Your Privacy Rights">
<p>
Depending on your location and applicable law, you may
have the right to:
</p>

<ul className="mt-5 list-disc space-y-2 pl-6">
<li>Request access to your personal information</li>
<li>Request correction of inaccurate information</li>
<li>Request deletion of your personal information</li>
<li>Request a copy of certain personal information</li>
<li>Withdraw consent for certain communications</li>
<li>Opt out of SMS or promotional messages</li>
</ul>

<p className="mt-5">
To exercise an applicable privacy right, contact us using
the details listed at the bottom of this page. We may
need to verify your identity before completing the request.
</p>

</PrivacySection>
<PrivacySection title="California Privacy Rights">
<p>
California residents may have additional rights under the
California Consumer Privacy Act and related privacy laws,
including rights to know, correct, delete, and limit
certain uses of personal information where applicable.
</p>

<p className="mt-4">
{data.name} does not sell personal information as that
term is commonly defined under the CCPA.
</p>
</PrivacySection>

<PrivacySection title="International Privacy Rights">
<p>
Where the General Data Protection Regulation or similar
laws apply, personal information may be processed based on
your consent, the need to provide requested services,
compliance with legal obligations, or our legitimate
business interests.
</p>
</PrivacySection>

<PrivacySection title="Children's Privacy">
<p>
This website and our services are intended for adults.
We do not knowingly collect personal information from
children under 13 years of age.
</p>

<p className="mt-4">
Our SMS messaging program is only available to individuals
who are at least 18 years old.
</p>
</PrivacySection>

<PrivacySection title="Changes to This Privacy Policy">
<p>
{data.name} may update this Privacy Policy to reflect
changes in our practices, services, technologies, or
legal requirements.
</p>

<p className="mt-4">
Updates will be published on this page with a revised
“Last Updated” date. We encourage users to review this
page periodically.
</p>
</PrivacySection>

<PrivacySection title="Contact Information">
<p>
For privacy questions, SMS support, or requests relating
to your personal information, contact us using the
information below.
</p>

<div className="mt-6 rounded-2xl bg-green-50 p-6">
<p>
<strong className="text-gray-900">
Company:
</strong>{" "}
{data.name}
</p>

<p className="mt-3">
<strong className="text-gray-900">
Service Area:
</strong>{" "}
{data.city} and nearby areas
</p>

<p className="mt-3">
<strong className="text-gray-900">
Phone:
</strong>{" "}
{data.phone}
</p>

<p className="mt-3">
<strong className="text-gray-900">
Email:
</strong>{" "}
{data.email}
</p>
</div>
</PrivacySection> </div>
</div>
</div>
</section>
 </>
 );

}

function PrivacySection({ title, children }) {
 return (
<section>
<h2 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
{title}
</h2>

<div className="leading-8">
 {children}
</div>
 </section>

);

}

export default Privacy;