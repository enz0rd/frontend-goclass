import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  IoMdMenu as MenuIcon,
  IoMdArrowDropdown as ArrowDownIcon,
} from "react-icons/io";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
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

const NavbarApp = ({ data }: { data: Record<string, string> }) => {
  const { isDarkMode, toggleTheme } = useTheme(); // Access the theme context
  const nomeInst = data.data
  const nomeUsuario = data.user_name

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }

  return (
    <div className="z-[20] w-full sticky top-0 bg-zinc-50 dark:bg-zinc-900 shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={isDarkMode ? darkLogo : lightLogo}
            className="h-10 w-15 bg-cover bg-center"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">GoClass</span>
            <span className="text-xs dark:text-zinc-50">{nomeInst}</span>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-4 md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <a className="flex flex-row align-middle cursor-pointer">
                <Avatar className="bg-primary">
                  <AvatarImage src="/images/user.png" className="scale-[75%] dark:invert" alt="Imagem do usuário" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <ArrowDownIcon className="dark:fill-white m-auto" />
              </a>
            </PopoverTrigger>
            <PopoverContent className="dark:text-zinc-50 w-60 m-2 ease-in dark:bg-zinc-900 bg-zinc-50 p-2 border-2 dark:border-zinc-600 border-zinc-200 rounded-md ">
              <div className="grid gap-4">
                <div className="flex flex-col">
                  <span className="text-md font-bold dark:text-zinc-50">{nomeUsuario}</span>
                  <span className="text-xs dark:text-zinc-50 border-b-2 dark:border-zinc-600 pb-2">{nomeInst}</span>
                </div>
                {window.location.pathname === "/dashboard" ? (
                  <a
                    href="#top"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Painel
                  </a>
                ) : (
                  <a
                    href="/dashboard"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Painel
                  </a>
                )}
                {window.location.pathname === "/" ? (
                  <a
                    href="#plans"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Planos
                  </a>
                ) : (
                  <a
                    href="/#plans"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Planos
                  </a>
                )}
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
                    <AvatarImage src="/images/user.png" className="scale-[75%] dark:invert" alt="Imagem do usuário" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span>{nomeUsuario}</span>
                    <span className="text-xs dark:text-zinc-50">{nomeInst}</span>
                  </div>
                </div>
                {window.location.pathname === "/dashboard" ? (
                  <a
                    href="#top"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Painel
                  </a>
                ) : (
                  <a
                    href="/dashboard"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Painel
                  </a>
                )}
                {window.location.pathname === "/" ? (
                  <a
                    href="#plans"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Planos
                  </a>
                ) : (
                  <a
                    href="/#plans"
                    className="dark:text-zinc-50 text-sm font-medium hover:underline hover:underline-offset-4"
                  >
                    Planos
                  </a>
                )}
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
                      {isDarkMode ? (
                        <FaSun className="fill-white" />
                      ) : (
                        <FaMoon />
                      )}
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
