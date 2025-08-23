"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      setIsOpen(false)
    } else {
      // For page redirections, let the default behavior handle it
      setIsOpen(false)
    }
  }

  const ministries = [
    { name: "Kerala Catholic Youth Congress(Kcym)", href: "/kcym" },
    { name: "Cherupushpa Mission League(Cml)", href: "/cml" },
    { name: "Sunday School", href: "/sunday-school" },
    { name: "Thirubalasakyam", href: "/Thirubalasakyam" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="font-serif text-xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
            ST JOHN THE BAPTIST CHURCH 
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              onClick={(e) => handleNavigation(e, "/")}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              onClick={(e) => handleNavigation(e, "/about")}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                    Ministries
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-in fade-in-0 zoom-in-95 duration-300">
                    <ul className="grid w-48 gap-3 p-4">
                      {ministries.map((ministry) => (
                        <li key={ministry.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={ministry.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 hover:shadow-md"
                              onClick={(e) => handleNavigation(e, ministry.href)}
                            >
                              <div className="text-sm font-medium leading-none">{ministry.name}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              onClick={(e) => handleNavigation(e, "/contact")}
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="transition-transform duration-300 hover:scale-110"
            >
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent rounded-md hover:translate-x-2"
                onClick={(e) => handleNavigation(e, "/")}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent rounded-md hover:translate-x-2"
                onClick={(e) => handleNavigation(e, "/about")}
              >
                About
              </a>
              <div className="px-3 py-2">
                <div className="text-foreground font-medium mb-2">Ministries</div>
                <div className="pl-4 space-y-1">
                  {ministries.map((ministry) => (
                    <a
                      key={ministry.name}
                      href={ministry.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                      onClick={(e) => handleNavigation(e, ministry.href)}
                    >
                      {ministry.name}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent rounded-md hover:translate-x-2"
                onClick={(e) => handleNavigation(e, "/contact")}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
