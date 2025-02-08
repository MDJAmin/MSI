import React from "react";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width tracking-wider">
        <div>
          <p className="font-semibold text-gray text-xs tracking-wider flex gap-1">
            Explore MSI:
            <span className="underline cursor-pointer text-red-500 hover:text-white transition-all">
              <p>Learn about MSI Gaming Laptops</p>
            </span>
            or
            <span className="underline cursor-pointer text-red-500 hover:text-white transition-all">
              <p>MSI Motherboards</p>
            </span>
            and more.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or contact us at
            <a href="mailto:support@msi.com">support@msi.com</a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2024 MSI Computer Corp. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs cursor-pointer hover:text-white"
              >
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
