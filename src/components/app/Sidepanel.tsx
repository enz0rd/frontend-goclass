import { NavLink } from "react-router-dom";
import {
  PanelRight,
  MailIcon,
  CheckCircle,
  GraduationCap,
  BookOpenText,
  CopyrightIcon,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react";
import { useState } from "react";

const Sidepanel = () => {
  const [minimized, setMinimized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    const minimized = JSON.parse(localStorage.getItem("minimized") || "false");
    setMinimized(minimized);
    setIsLoaded(true);
  }

  const handleMinimize = (value: boolean) => {
    setMinimized(value);
    localStorage.setItem("minimized", JSON.stringify(value));
  }

  return (
    <div
      className={`lg:mt-[3rem] top-11 lg:sticky lg:pt-10 lg:flex hidden border-r-2 dark:border-zinc-800 dark:bg-zinc-900 flex-col h-[95vh] 
      ${minimized ? "min-w-[3rem] lg:p-5" : "min-w-[14rem] lg:p-8"} 
        justify-between gap-6 group dark:text-zinc-50`}
    >
      <div className={`flex flex-col ${minimized ? "gap-4" : "gap-2"}`}>
        <NavLink
          className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 ${minimized ? "align-middle mx-auto" : "py-1 px-2"} rounded-md transition-[.2s]`}
          to="/dashboard"
        >
          <PanelRight />
        {minimized ? "" : "Dashboard"}
        </NavLink>
        <NavLink
          className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 ${minimized ? "align-middle mx-auto" : "py-1 px-2"} rounded-md transition-[.2s]`}
          to="/atividades"
          >
          <BookOpenText />
          {minimized ? "" : "Atividades"}
        </NavLink>
        <NavLink
          className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 ${minimized ? "align-middle mx-auto" : "py-1 px-2"} rounded-md transition-[.2s]`}
          to="/notas"
        >
          <GraduationCap />
        {minimized ? "" : "Notas"}
        </NavLink>
        <NavLink
          className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 ${minimized ? "align-middle mx-auto" : "py-1 px-2"} rounded-md transition-[.2s]`}
          to="/entregar"
        >
          <CheckCircle />
        {minimized ? "" : "Entregar"}
        </NavLink>
        <NavLink
          className={`flex flex-row gap-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 ${minimized ? "align-middle mx-auto" : "py-1 px-2"} rounded-md transition-[.2s]`}
          to="/mensagens"
        >
          <MailIcon />
          {minimized ? "" : "Mensagens"}
        </NavLink>
      </div>
      <div className="">
        {minimized ? (
          <div className="mb-3">
            <div className="flex mx-auto bottom-6">
              <div onClick={() => handleMinimize(false)}
              className="flex flex-row justify-center font-thin my-auto">
                <ArrowBigRight
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bottom-6">
            <div className="flex justify-between align-middle my-autoflex-row">
              <div className="flex flex-row align-middle font-medium gap-2 my-auto">
                <CopyrightIcon className="w-4" />
                <small className="py-[.2rem]">GoClass 2024</small>
              </div>
              <ArrowBigLeft
                onClick={() => handleMinimize(true)}
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidepanel;
