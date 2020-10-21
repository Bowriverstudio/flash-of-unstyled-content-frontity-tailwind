/**
 * External dependencies
 */
import "twin.macro";

/**
 * React / Frontity dependencies
 */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "frontity";
import Image from "@frontity/components/image";

/**
 * Internal dependencies
 */
import Link from "../link";
import logo from "../../../assets/logo.png";

/**
 * Header
 */
const Header = ({ state }) => {
  return (
    <div tw="z-0 relative flex-shrink-0 bg-white">
      <div tw=" relative z-10 flex-shrink-0 shadow">
        <div tw="max-w-7xl flex-shrink-0 mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" tw="w-16 flex-shrink-0">
              <Image src={logo} alt="Logo" tw="h-8 w-auto sm:h-10" />
            </a>
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              aria-hidden="true"
              aria-label="Open the menu"
              tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                tw="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div tw="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
            <nav tw="flex space-x-10">
              {state.theme.menu.map(([name, link]) => {
                // Check if the link matched the current page url
                const isCurrentPage = state.router.link === link;
                return (
                  <Link
                    key={name}
                    link={link}
                    aria-current={isCurrentPage ? "page" : undefined}
                    tw="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  /**
   * Frontity state: https://docs.frontity.org/learning-frontity/state
   * The `state` props are provided by the global context, when we wrap this component in `connect(...)`
   */
  state: PropTypes.object,
};

export default connect(Header);
