"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 text-transparent bg-clip-text">
                Learn.AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive(item.path) ? "text-emerald-600" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Subjects <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/subjects/business">Business</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subjects/computer-science">Computer Science</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subjects/data-science">Data Science</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subjects">View All Subjects</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 text-base font-medium ${
                  isActive(item.path) ? "text-emerald-600" : "text-zinc-700 dark:text-zinc-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Subjects</p>
              <Link
                href="/subjects/business"
                className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/subjects/computer-science"
                className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Computer Science
              </Link>
              <Link
                href="/subjects"
                className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300"
                onClick={() => setIsMenuOpen(false)}
              >
                View All Subjects
              </Link>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col space-y-2">
              <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
