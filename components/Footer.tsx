import Link from "next/link";
import { schoolInfo } from "../lib/SchoolData";

export default function Footer() {
  return (
    <footer className="bg-[#800020] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* School Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {schoolInfo.name}
            </h2>

            <p className="italic text-white/80 mb-4">
              {schoolInfo.motto}
            </p>

            <p>
              Empowering students through excellence,
              innovation, and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/academics"
                  className="hover:text-gray-300 transition"
                >
                  Academics
                </Link>
              </li>

              <li>
                <Link
                  href="/admissions"
                  className="hover:text-gray-300 transition"
                >
                  Admissions
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-gray-300 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-2">
              <p>{schoolInfo.address}</p>
              <p>{schoolInfo.phone}</p>
              <p>{schoolInfo.email}</p>
            </div>
          </div>

        </div>

        <hr className="my-8 border-white/20" />

        <div className="text-center text-sm text-white/80">
          © {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}