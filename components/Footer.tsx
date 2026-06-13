import Link from "next/link";
import { schoolInfo } from "../lib/SchoolData";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#800020] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* School Information */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white text-[#800020] rounded-full flex items-center justify-center font-bold text-xl">
                S
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {schoolInfo.name}
                </h2>

                <p className="text-sm text-white/70">
                  Celebrating 25 Years
                </p>
              </div>
            </div>

            <p className="italic text-white/80 mb-4">
              {schoolInfo.motto}
            </p>

            <p className="text-white/90 leading-7">
              Empowering students through academic excellence,
              character development, innovation, and holistic learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-yellow-300 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/academics" className="hover:text-yellow-300 transition">
                  Academics
                </Link>
              </li>

              <li>
                <Link href="/admissions" className="hover:text-yellow-300 transition">
                  Admissions
                </Link>
              </li>

              <li>
                <Link href="/faculty" className="hover:text-yellow-300 transition">
                  Faculty
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-yellow-300 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-yellow-300 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/notices" className="hover:text-yellow-300 transition">
                  Notices
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">
              <p>📍 {schoolInfo.address}</p>
              <p>📞 {schoolInfo.phone}</p>
              <p>📧 {schoolInfo.email}</p>
            </div>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              School Hours
            </h3>

            <div className="space-y-3">
              <p>
                <strong>Monday - Friday</strong>
                <br />
                8:00 AM - 4:00 PM
              </p>

              <p>
                <strong>Saturday</strong>
                <br />
                8:00 AM - 12:00 PM
              </p>

              <p>
                <strong>Sunday</strong>
                <br />
                Closed
              </p>
            </div>
          </div>

        </div>

        <hr className="my-10 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved.
          </p>

          <p>
            Designed & Developed for Sunshine Model School
          </p>
        </div>
      </div>
    </footer>
  );
}