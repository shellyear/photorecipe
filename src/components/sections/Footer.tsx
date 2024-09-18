import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
              href="/#"
            >
              <img
                alt="PhotoRecipe logo"
                fetchPriority="high"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="w-6 h-6"
                src="/recipe.svg"
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                PhotoRecipe
              </strong>
            </a>
            <p className="mt-3 text-sm text-base-content/80">
              The tool to get recipes from dish or ingredients photos, powered by
              AI.
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © 2024 - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a
                  href="mailto:boolfunc@gmail.com"
                  target="_blank"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Support
                </a>
                <a className="link link-hover" href="/#pricing">
                  Pricing
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a className="link link-hover" href="/terms-of-service">
                  Terms of services
                </a>
                <a className="link link-hover" href="/privacy-policy">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
