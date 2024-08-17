import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import {
  IoMdMenu as MenuIcon,
  IoMdSettings as SettingsIcon,
} from "react-icons/io";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { useEffect, useState } from "react";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Label } from "./ui/label";
import { Switch } from "@radix-ui/react-switch";
import { Toggle } from "@radix-ui/react-toggle";

const Navbar = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'dark' ao elemento raiz do documento
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'dark' do elemento raiz do documento
    }
  }, [isDarkTheme]);

  return (
    <div className="z-[20] w-full sticky top-0 bg-zinc-50 dark:bg-zinc-900 shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <NavLink to="#" className="flex items-center gap-2">
          <img
            src={isDarkTheme ? darkLogo : lightLogo}
            className="h-10 w-15 bg-cover bg-center"
          />
          <span className="text-lg font-bold text-primary">GoClass</span>
        </NavLink>
        <nav className="hidden items-center gap-4 md:flex">
          <NavLink
            to="#top"
            className="text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
          >
            Início
          </NavLink>
          <NavLink
            to="#plans"
            className="text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
          >
            Planos
          </NavLink>
          <NavLink
            to="#partners"
            className="text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
          >
            Parceiros
          </NavLink>
          <NavLink
            to="#about"
            className="text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
          >
            Sobre Nós
          </NavLink>

          <Popover>
            <PopoverTrigger asChild>
              <a className="cursor-pointer">
                <SettingsIcon className="dark:fill-white" />
              </a>
            </PopoverTrigger>
            <PopoverContent className="dark:text-zinc-50 w-60 m-2 ease-in dark:bg-zinc-900 bg-zinc-50 p-2 border-2 dark:border-zinc-600 border-zinc-200 rounded-md ">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Aparência</h4>
                  <p className="text-sm text-muted-foreground">
                    Mude o tema da página
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-row w-full gap-5">
                    <div className="flex flex-col gap-1">
                      <Label>Tema</Label>
                      <span className="text-xs">Claro/Escuro</span>
                    </div>
                    <Toggle
                      id="theme"
                      onClick={() => setDarkTheme(!isDarkTheme)}
                    >
                      {isDarkTheme ? (
                        <FaSun className="fill-white" />
                      ) : (
                        <FaMoon />
                      )}
                    </Toggle>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="md:hidden dark:bg-zinc-800 bg-zinc-50"
            >
              {isDarkTheme ? (
                <MenuIcon className="h-6 w-6 fill-white" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="dark:bg-zinc-900 dark:text-zinc-50 flex"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <SheetClose></SheetClose>
            </div>
            <nav className="flex flex-col justify-center gap-5">
              <NavLink
                to="#top"
                className="text-sm font-medium hover:underline hover:underline-offset-4"
              >
                Início
              </NavLink>
              <NavLink
                to="#plans"
                className="text-sm font-medium hover:underline hover:underline-offset-4"
              >
                Planos
              </NavLink>
              <NavLink
                to="#partners"
                className="text-sm font-medium hover:underline hover:underline-offset-4"
              >
                Parceiros
              </NavLink>
              <NavLink
                to="#about"
                className="text-sm font-medium hover:underline hover:underline-offset-4"
              >
                Sobre Nós
              </NavLink>
              <Toggle id="theme" onClick={() => setDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? <FaSun className="fill-white" /> : <FaMoon />}
              </Toggle>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;