import Link from 'next/link';
import React from 'react'

const regular_navbar = () => {
  return (
    <nav className="bg-white border-b-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-xl font-bold text-gray-800">BrandName</a>
            </Link>
          </div>
          <div className="hidden md:flex sFpace-x-8">
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-900">About</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-600 hover:text-gray-900">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-900">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default regular_navbar