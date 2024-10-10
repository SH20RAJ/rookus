import React from 'react';
import Link from 'next/link';
import { XIcon, YoutubeIcon } from 'lucide-react';
import { InstagramLogoIcon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">Rookus</h2>
            <p className="mt-4 text-muted-foreground">
              AI-powered Clothing Brand. Discover the future of fashion with us.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about">
                  <span className="hover:text-primary">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-primary">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-primary">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" className="hover:text-primary">
                <XIcon className='w-6 h-6 text-white hover:text-green-500 hover:scale-110'/>
              </a>
              <a href="#" className="hover:text-primary">
                <YoutubeIcon className='w-6 h-6 text-white hover:text-fuchsia-500 hover:scale-110'/>
              </a>
              <a href="#" className="hover:text-primary">
                <InstagramLogoIcon className='w-6 h-6 text-white hover:text-pink-500 hover:scale-110'/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Rookus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
