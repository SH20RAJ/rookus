"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  MenuIcon,
  User2Icon,
  BellIcon,
  SettingsIcon,
  ShoppingBagIcon,
} from "lucide-react"; // Import random icons
import { Button } from "./ui/button";
import Input from "./Input";

export function NavBar() {
  let menuItems = [
    {
      name: "AI Design Tools",
      href: "/ai-tools",
    },
    {
      name: "AI Tools",
      href: "/ai-tools",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-md sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-75">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img src={"/logo.png"} alt="Rookus Logo" className="h-20 w-20 mr-4 mb-2" />
      </Link>

      {/* Main Navigation (Hidden on mobile) */}
      <div className="hidden md:flex space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>AI Design Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/ai-tools" title="AI Design Tools">
                    Explore our AI-powered design tools for creating custom clothing.
                  </ListItem>
                  <ListItem href="/vendor-integration" title="Vendor Integration">
                    Learn how to integrate with our vendor network.
                  </ListItem>
                  <ListItem href="/virtual-fitting" title="Virtual Fitting Room">
                    Try on clothes virtually with our AR technology.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  AI Tools
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fashion Trends
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right-side icons and search (Hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-4">
        <Input className="hidden md:block" /> {/* Search is visible on desktop */}
        <Button variant="outline" size="icon" className="p-2 text-gray-500 hover:text-gray-700">
          <User2Icon className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="p-2 text-gray-500 hover:text-gray-700">
          <ShoppingBagIcon className="h-6 w-6" />
        </Button>
        
      </div> {/* No need for these buttons of this div */}

      {/* Mobile Menu with Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col p-4">
            <Input placeholder="Search..." className="mb-4" /> {/* Moved Search here */}
            <ul className="space-y-4">
              <li>
                <Link href="/ai-tools" className="block text-lg font-medium">
                  AI Design Tools
                </Link>
              </li>
              <li>
                <Link href="/docs" className="block text-lg font-medium">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-lg font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-lg font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block text-lg font-medium">
                  Blog
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
