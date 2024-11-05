import IndicatorsGroup from "@/components/app/dashboard/indicatorsGroup";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import { useTheme } from "@/ThemeProvider";
import FunctionsGroup from "@/components/app/dashboard/FunctionsGroup";
import ActivitiesGroup from "@/components/app/dashboard/ActivitiesGroup";
import { getRole } from "@/components/app/utils";

const DashboardAdmin = () => {
  const { isDarkMode } = useTheme(); // Access the theme context
  const role = getRole();
  
  const data = {
    data: localStorage.getItem("userData") || {},
    user_name: localStorage.getItem("name") || "Usuário",
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-200 to-40% to-zinc-50 justify-center">
        <img
          className="h-[10rem] w-full object-cover"
          src="/images/success-classroom.jpg"
          alt=""
        />
        <div className="h-full justify-center max-w-[1280px] space-y-6 md:px-[6rem] px-4 mx-auto">
          <div className="pt-6 dark:text-zinc-50 mx-auto flex justify-between align-middle">
            <div className="w-[40%]">
              <h1 className="text-2xl lg:text-4xl md:text-4xl">
                Bem vindo, {data.user_name.split(" ")[0]}
              </h1>
              <span className="text-sm lg:text-md md:text-md my-auto">
                O que faremos hoje?
              </span>
            </div>
            <img
              src={isDarkMode ? darkLogo : lightLogo}
              alt="Logo Goclass"
              className="w-[7%] object-contain"
            />
          </div>
          <IndicatorsGroup role={role}/>
          <FunctionsGroup role={role}/>
          <ActivitiesGroup />
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
