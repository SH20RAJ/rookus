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

export function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
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
              <Link href="/ai-tools" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  AI Tools
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/vendor-integration" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Vendor Integration
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/virtual-fitting" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Virtual Fitting Room
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/fashion-trends" legacyBehavior passHref>
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
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-4">
              <li>
                <Link href="/ai-tools" className="block text-lg font-medium">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/vendor-integration" className="block text-lg font-medium">
                  Vendor Integration
                </Link>
              </li>
              <li>
                <Link href="/virtual-fitting" className="block text-lg font-medium">
                  Virtual Fitting Room
                </Link>
              </li>
              <li>
                <Link href="/fashion-trends" className="block text-lg font-medium">
                  Fashion Trends
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