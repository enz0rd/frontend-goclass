import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Function from "./Indicators/Function";
import { getPropsBasedOnRole, RotaProps } from "../utils";

const FunctionsGroup = ({ role }: { role: string }) => {
  const props: RotaProps[] = getPropsBasedOnRole(role) || [];

  const colorStyle = [
    { light: "via-red-300/40", dark: "dark:via-red-700/40" },
    { light: "via-yellow-300/40", dark: "dark:via-yellow-700/40" },
    { light: "via-green-300/40", dark: "dark:via-green-700/40" },
    { light: "via-sky-300/40", dark: "dark:via-sky-700/40" },
  ];

  props.shift();

  role === "admin" ? (role = "instituicao") : (role = role);

  return (
    <div className="justify-center align-middle pb-6">
      <div className="mx-auto flex flex-col gap-3">
        <h1 className="text-2xl lg:text-3xl md:text-4xl dark:text-zinc-50">
          Funções:
        </h1>
        <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
          <div className="flex space-x-4 justify-center flex-grow">
            {props.map((prop) => (
              <Function
                to={prop.rota}
                title={prop.nome}
                icon={React.isValidElement<React.SVGProps<SVGSVGElement>>(prop.icone) ? React.cloneElement<React.SVGProps<SVGSVGElement>>(prop.icone, { width: 40, height: 40, className: "my-auto" }) : React.createElement(prop.icone as React.ElementType, { width: 40, height: 40, className: "my-auto" })}
                colorStyle={colorStyle[props.indexOf(prop) % colorStyle.length]}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default FunctionsGroup;
