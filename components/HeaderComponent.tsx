"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookCopy,
  Contact,
  FoldVerticalIcon,
  HomeIcon,
  MenuIcon,
  NotebookPen,
  Server,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MutableRefObject, useRef } from "react";
import { ModeToggle } from "./Themetoggeler";

function HeaderComponent() {
  const path = usePathname();

  return (
    <header>
      <section className="max-w-7xl mx-auto py-6 scroll-smooth ">
        {/* Desktop Menu Item Build */}
        <div className="md:flex justify-between items-center hidden">
          <h3>ᖇOᕼIT Kᑌᗰᗩᖇ ᑭᗩTEᒪ</h3>
          <nav className="flex space-x-6">
            {/* <ModeToggle /> */}

            <Link
              href="#home"
              className={`${
                path == "/" ? "text-blue-600" : ""
              } flex space-x-2 items-center hover:text-gray-600`}
            >
              <h3>Home</h3>
              <HomeIcon />
            </Link>

            <Link
              href="#about"
              className={`${
                path == "/about" ? "border-b-[3px] border-gray-400 " : ""
              } flex space-x-2 items-center hover:text-gray-600 scroll-smooth`}
            >
              <h3>About</h3>
              <BookCopy />
            </Link>

            <Link
              href="#services"
              className={`${
                path == "/services" ? "border-b-[3px] border-gray-400 " : ""
              } flex space-x-2 items-center hover:text-gray-600 scroll-smooth`}
            >
              <h3>Services</h3>
              <Server />
            </Link>

            <Link
              href="#project"
              className={`${
                path == "/projects" ? "border-b-[3px] border-gray-400 " : ""
              } flex space-x-2 items-center hover:text-gray-600 scroll-smooth`}
            >
              <h3>Project</h3>
              <FoldVerticalIcon />
            </Link>

            <Link
              href="#resume"
              className={`${
                path == "/resume" ? "border-b-[3px] border-gray-400 " : ""
              } flex space-x-2 items-center hover:text-gray-600 scroll-smooth`}
            >
              <h3>Resume</h3>
              <NotebookPen />
            </Link>

            <Link
              href="#contact"
              className={`${
                path == "/contact" ? "border-b-[3px] border-gray-400 " : ""
              } flex space-x-2 items-center hover:text-gray-600 scroll-smooth`}
            >
              <h3>Contact</h3>
              <Contact />
            </Link>
          </nav>
        </div>

        {/* Phone device */}
        <div className="md:hidden flex justify-between px-2">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
          <div className="flex space-x-3 items-center justify-center">
            {/* <ModeToggle /> */}
            <h3>ᖇOᕼIT Kᑌᗰᗩᖇ ᑭᗩTEᒪ</h3>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeaderComponent;
