"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { RocketIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"

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
    ]
  return (
    <div className="flex items-center justify-between p-4 shadow-md sticky top-0 z-50   backdrop-filter backdrop-blur-lg bg-opacity-75">
      <Link href="/" className="flex items-center space-x-2">
        <RocketIcon className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold">Rookus</span>
      </Link>
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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="p-2 text-gray-500 hover:text-gray-700">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-4">
              <li>
                <Link href="/docs" className="block text-lg font-medium">
                  Documentation
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
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
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
    )
  }
)
ListItem.displayName = "ListItem"