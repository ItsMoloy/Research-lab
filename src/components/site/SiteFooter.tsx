import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-[#4F4F4F] text-white">
      <div className="container-academic mx-auto px-4 py-8">
        <div className="grid gap-8 text-[13px] md:grid-cols-12">
          {/* Left Column - University Links */}
          <div className="md:col-span-4">
            <address className="not-italic">
              <p>
                <a href="https://www.sust.edu" className="block font-bold hover:text-[#B4AEA2] mb-1">
                  SUST Faculty Websites
                </a>
                <span className="block mb-4">
                  <a href="mailto:webmaster@sust.edu" className="font-bold hover:text-[#B4AEA2]">
                    webmaster@sust.edu
                  </a>
                </span>
                <a href="#" className="block font-bold hover:text-[#B4AEA2] mt-[10px]">
                  Report ADA Accessibility Concerns
                </a>
                <a href="#" className="block font-bold hover:text-[#B4AEA2] mt-[10px]">
                  Accessibility Statement
                </a>
                <a href="#" className="block font-bold hover:text-[#B4AEA2] mt-[10px]">
                  Notice of Non-Discrimination
                </a>
                <a href="#" className="block font-bold hover:text-[#B4AEA2] mt-[10px]">
                  Privacy Statement
                </a>
              </p>
            </address>
          </div>

          {/* Center Column - Social Media */}
          <div className="text-center md:col-span-4">
            <p className="invisible">&nbsp;</p>
            <ul className="flex justify-center gap-2 m-0 p-0 list-none">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-white hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-mahin-uddin-8515a1180/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-white hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Lab Address */}
          <div className="md:col-span-4 lg:text-left">
            <section>
              <p className="mb-3">
                <strong>SUST ATLAS Laboratory</strong>
              </p>
              <p className="mb-3">
                <strong>Phone Number</strong>: +880 XXXXXXXXXX
              </p>
              <p className="mb-3">
                <strong>Email</strong>: atlas-lab@sust.edu
              </p>
              <p className="mb-0">
                <strong>Address</strong>: Department of Geography and Environment, SUST, Sylhet, Bangladesh
              </p>
            </section>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <section className="text-center text-xs font-normal">
            <p className="mx-auto mb-[10px] max-w-4xl px-4 text-center">
              The statements and opinions included on this site are those of the respective faculty and researchers only. Any statements and opinions included in these webpages are not those of Shahjalal University of Science and Technology.
            </p>
            <div className="text-center mt-4">
              <p>
                <small className="text-[12px]">
                  Copyright © {new Date().getFullYear()} ATLAS Lab. All Rights Reserved.
                </small>
              </p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
