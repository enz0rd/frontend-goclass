import { CheckIcon } from "@radix-ui/react-icons";
import { IoClose } from "react-icons/io5";
import { RiDiscountPercentFill as DiscountIcon } from "react-icons/ri";
import { Button } from "../../ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { NavLink } from "react-router-dom";

const NowPlan = () => {

  return (
    <div>
      <div className="justify-center align-center my-auto rounded-3xl h-[100%] bg-gradient-to-b dark:from-zinc-700 dark:to-zinc-800 from-zinc-100 to-zinc-200 text-primary-foreground">
        <CardHeader className="text-center">
          <div className="mt-4 m-auto flex flex-col justify-center text-center">
            <CardTitle className="text-4xl text-zinc-900 dark:text-zinc-50">
              Now
            </CardTitle>
            <CardDescription className="text-zinc-800 dark:text-zinc-50">
              Plano ideal para instituições de médio porte
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mb-4">
          <Tabs defaultValue="mensal">
            <TabsList className="group gap-1 rounded-xl w-full bg-zinc-200 dark:bg-zinc-800">
              <TabsTrigger
                className="dark:data-[state=active]:bg-zinc-600 w-1/3 rounded-lg "
                value="mensal"
              >
                Mensal
              </TabsTrigger>
              <TabsTrigger
                className="dark:data-[state=active]:bg-zinc-600 flex flex-row gap-1 w-1/3 rounded-lg"
                value="semestral"
              >
                Semestral
                <Badge className="hover:bg-zinc-200 bg-zinc-50 w-[.9rem] justify-center align-middle p-0 text-primary rounded-full">
                  <DiscountIcon className="w-3" />
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                className="dark:data-[state=active]:bg-zinc-600 flex flex-row gap-1 w-1/3 rounded-lg"
                value="anual"
              >
                <p>Anual</p>
                <Badge className="hover:bg-zinc-200 bg-zinc-50 w-[.9rem] justify-center align-middle p-0 text-primary rounded-full">
                  <DiscountIcon className="w-3" />
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-4 flex flex-col gap-2" value="mensal">
              <ul className="group font-medium text-zinc-900 dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li className="opacity-[75%]">
                  <IoClose className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group text-zinc-900 dark:text-zinc-50 flex items-end justify-between">
                <span className="text-4xl font-bold">R$199</span>
                <span className="text-primary-foreground text-sm text-zinc-800 dark:text-zinc-200">
                  /mês
                </span>
              </div>
              <NavLink to='/register?plan=Now&type=Mensal' onClick={() => window.scrollTo(0, 0)}>
                <Button className="w-full bg-zinc-900 dark:bg-zinc-50 dark:text-primary text-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300">
                  Assinar
                </Button>
              </NavLink>
            </TabsContent>
            <TabsContent className="space-y-4 flex flex-col gap-2" value="semestral">
              <ul className="group text-zinc-900 font-medium dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li className="opacity-[75%]">
                  <IoClose className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group text-zinc-900 dark:text-zinc-50 flex items-end justify-between">
                <div className="flex flex-row justify-center gap-2">
                  <span className="text-4xl font-bold">R$1014</span>
                  <Badge className="hover:bg-zinc-200 bg-primary dark:bg-zinc-50 justify-center p-1 h-5 font-medium dark:text-primary text-zinc-50 my-auto rounded-full">
                    <DiscountIcon className="w-3" /> 15% off
                  </Badge>
                </div>
                <span className="text-primary-foreground text-sm text-zinc-800 dark:text-zinc-200">
                  /6 meses
                </span>
              </div>
              <NavLink to='/register?plan=Now&type=Semestral' onClick={() => window.scrollTo(0, 0)}>
                <Button className="w-full bg-zinc-900 dark:bg-zinc-50 dark:text-primary text-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300">
                  Assinar
                </Button>
              </NavLink>
            </TabsContent>
            <TabsContent className="space-y-4 flex flex-col gap-2" value="anual">
              <ul className="group text-zinc-900 font-medium dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li className="opacity-[75%]">
                  <IoClose className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group text-zinc-900 dark:text-zinc-50 flex items-end justify-between">
                <div className="flex flex-row justify-center gap-2">
                  <span className="text-4xl font-bold">R$1669</span>
                  <Badge className="hover:bg-zinc-200 bg-primary dark:bg-zinc-50 justify-center p-1 h-5 font-medium dark:text-primary text-zinc-50 my-auto rounded-full">
                    <DiscountIcon className="w-3" /> 30% off
                  </Badge>
                </div>
                <span className="text-primary-foreground text-sm text-zinc-800 dark:text-zinc-200">
                  /ano
                </span>
              </div>
              <NavLink to='/register?plan=Now&type=Anual' onClick={() => window.scrollTo(0, 0)}>
                <Button className="w-full bg-zinc-900 dark:bg-zinc-50 dark:text-primary text-zinc-50 hover:bg-zinc-700 dark:hover:bg-zinc-300">
                  Assinar
                </Button>
              </NavLink>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </div>
  );
};

export default NowPlan;
