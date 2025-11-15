import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms and Conditions - Razorbill Technologies",
  description: "Read our terms and conditions to understand the rules and regulations for using Razorbill Technologies services.",
};

export default function TermsAndConditions() {
  return (
    <main className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Title with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/images/razorbill-logo.png"
            alt="Razorbill Technologies Logo"
            width={70}
            height={70}
            className="w-12 h-12 rounded-lg"
          />
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        </div>
        
        <p className="mb-4 text-gray-900">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of Razorbill Technologies (&quot;Razorbill&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) services, including our website, software platforms, and related services. By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-900">
          By accessing or using Razorbill Technologies services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">2. Description of Services</h2>
        <p className="mb-4 text-gray-900">
          Razorbill Technologies provides digital business solutions including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>BookMySpot: Appointment booking, reservation, and event management platform</li>
          <li>Focus: Customer relationship management (CRM) and marketing automation platform</li>
          <li>eCommerce solutions</li>
          <li>POS and inventory management systems</li>
          <li>Related software and support services</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">3. User Accounts and Registration</h2>
        <p className="mb-4 text-gray-900">
          To access certain features of our services, you may be required to create an account. You agree to:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Provide accurate, current, and complete information during registration</li>
          <li>Maintain and update your account information to keep it accurate</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities that occur under your account</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">4. Use of Services</h2>
        <p className="mb-4 text-gray-900">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Transmit any harmful, offensive, or illegal content</li>
          <li>Attempt to gain unauthorized access to our systems or networks</li>
          <li>Interfere with or disrupt the operation of our services</li>
          <li>Use automated systems to access our services without permission</li>
          <li>Reverse engineer, decompile, or disassemble any part of our software</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">5. Payment Terms</h2>
        <p className="mb-4 text-gray-900">
          If you subscribe to paid services:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>You agree to pay all fees associated with your subscription</li>
          <li>Fees are billed in advance on a recurring basis (monthly or annually)</li>
          <li>All fees are non-refundable unless otherwise stated</li>
          <li>We reserve the right to change our pricing with reasonable notice</li>
          <li>Failure to pay may result in suspension or termination of your account</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">6. Intellectual Property</h2>
        <p className="mb-4 text-gray-900">
          All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and code, are owned by Razorbill Technologies and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">7. User Content</h2>
        <p className="mb-4 text-gray-900">
          You retain ownership of any content you upload or create using our services. By using our services, you grant us a license to use, store, and process your content as necessary to provide and improve our services. You are solely responsible for your content and warrant that you have all necessary rights to use and share it.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">8. Privacy</h2>
        <p className="mb-4 text-gray-900">
          Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">9. Service Availability</h2>
        <p className="mb-4 text-gray-900">
          We strive to provide reliable and continuous service, but we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice. We are not liable for any loss or damage resulting from service interruptions.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">10. Limitation of Liability</h2>
        <p className="mb-4 text-gray-900">
          To the maximum extent permitted by law, Razorbill Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">11. Indemnification</h2>
        <p className="mb-4 text-gray-900">
          You agree to indemnify and hold harmless Razorbill Technologies, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of our services, violation of these Terms, or infringement of any rights of another.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">12. Termination</h2>
        <p className="mb-4 text-gray-900">
          We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately. You may also terminate your account at any time by contacting us.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">13. Changes to Terms</h2>
        <p className="mb-4 text-gray-900">
          We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">14. Governing Law</h2>
        <p className="mb-4 text-gray-900">
          These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Ghana.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">15. Contact Us</h2>
        <p className="mb-4 text-gray-900">
          If you have any questions about these Terms and Conditions, please contact us:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Email: info@razorbill.tech</li>
          <li>Phone: +233 256 108 055</li>
        </ul>

        <p className="mb-4 text-gray-900 text-sm italic">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Close Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Close
          </Link>
        </div>
      </div>
    </main>
  );
}

