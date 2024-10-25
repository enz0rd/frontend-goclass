import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  IoMdMenu as MenuIcon,
  IoMdArrowDropdown as ArrowDownIcon,
} from "react-icons/io";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Label } from "@/components/ui/label";
import { Toggle } from "@radix-ui/react-toggle";
import { useTheme } from "@/ThemeProvider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  BookOpenText,
  CheckCircle,
  GraduationCap,
  MailIcon,
  PanelRight,
} from "lucide-react";
import { RotaProps } from "./utils";
import React from "react";

interface NavbarRotaProps {
  rotas: RotaProps[];
}

const NavbarApp = ({ rotas }: NavbarRotaProps) => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access the theme context
  const nomeInst = localStorage.getItem("nomeInst") || "undefined";
  const nomeUsuario = localStorage.getItem("name") || "undefined";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="z-[999] w-full fixed top-0 bg-zinc-50 dark:bg-zinc-900 dark:border-b-2 dark:border-zinc-800 shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <img
            src={isDarkMode ? darkLogo : lightLogo}
            className="h-10 w-15 bg-cover bg-center"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">GoClass</span>
            <span className="text-xs dark:text-zinc-50">{nomeInst}</span>
          </div>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <a className="flex flex-row align-middle cursor-pointer">
                <Avatar className="bg-primary">
                  <AvatarImage
                    src="/images/user.png"
                    className="scale-[75%] dark:invert"
                    alt="Imagem do usuário"
                  />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <ArrowDownIcon className="dark:fill-white m-auto" />
              </a>
            </PopoverTrigger>
            <PopoverContent className="dark:text-zinc-50 w-60 m-2 ease-in dark:bg-zinc-900 bg-zinc-50 p-2 border-2 dark:border-zinc-600 border-zinc-200 rounded-md ">
              <div className="grid gap-2">
                <div className="flex flex-col">
                  <span className="text-md font-bold dark:text-zinc-50">
                    {nomeUsuario}
                  </span>
                  <span className="text-xs dark:text-zinc-50 border-b-2 dark:border-zinc-600 pb-2">
                    {nomeInst}
                  </span>
                </div>
                {rotas?.map((rota) => (
                  <NavLink
                    key={rota.nome}
                    className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                    py-1 px-1 rounded-md transition-[.2s]`}
                    to={rota.rota}
                  >
                    {React.createElement(rota.icone)}
                    {rota.nome}
                  </NavLink>
                ))}
                {/* <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/dashboard"
                >
                  <PanelRight />
                  Dashboard
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/atividades"
                >
                  <BookOpenText />
                  Atividades
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/notas"
                >
                  <GraduationCap />
                  Notas
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/entregar"
                >
                  <CheckCircle />
                  Entregar
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/mensagens"
                >
                  <MailIcon />
                  Mensagens
                </NavLink> */}
                <a
                  href="/login"
                  onClick={handleLogout}
                  className="cursor-pointer text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
                >
                  Sair
                </a>
                <div className="grid gap-2">
                  <div className="flex flex-row w-full gap-5">
                    <div className="flex flex-col gap-1">
                      <Label>Tema</Label>
                      <span className="text-xs">Claro/Escuro</span>
                    </div>
                    <Toggle
                      id="theme"
                      onClick={() => toggleTheme()} // Alterna o estado do tema
                    >
                      {isDarkMode ? (
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
              {isDarkMode ? (
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
              <div className="grid gap-4">
                <div className="flex flex-row gap-2 align-middle cursor-pointer">
                  <Avatar className="bg-primary">
                    <AvatarImage
                      src="/images/user.png"
                      className="scale-[75%] dark:invert"
                      alt="Imagem do usuário"
                    />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span>{nomeUsuario}</span>
                    <span className="text-xs dark:text-zinc-50">
                      {nomeInst}
                    </span>
                  </div>
                </div>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/dashboard"
                >
                  <PanelRight />
                  Dashboard
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/atividades"
                >
                  <BookOpenText />
                  Atividades
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/notas"
                >
                  <GraduationCap />
                  Notas
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/entregar"
                >
                  <CheckCircle />
                  Entregar
                </NavLink>
                <NavLink
                  className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                  py-1 px-1 rounded-md transition-[.2s]`}
                  to="/mensagens"
                >
                  <MailIcon />
                  Mensagens
                </NavLink>
                <a
                  href="/login"
                  onClick={handleLogout}
                  className="cursor-pointer text-sm font-medium hover:underline dark:text-zinc-50 hover:underline-offset-4"
                >
                  Sair
                </a>
                <div className="grid gap-2">
                  <Toggle
                    id="theme"
                    onClick={() => toggleTheme()} // Alterna o estado do tema
                  >
                    {isDarkMode ? <FaSun className="fill-white" /> : <FaMoon />}
                  </Toggle>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavbarApp;
