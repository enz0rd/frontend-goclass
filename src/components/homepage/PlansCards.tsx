import { useState, useEffect } from "react";
import UniPlan from "./Plans/UniPlan";
import GoPlan from "./Plans/GoPlan";
import NowPlan from "./Plans/NowPlan";
import api from "@/axiosconfig";

// Tipo inline para resposta
type PlansResponse = Record<string, Record<string, string>>;

const PlansCards = () => {
  const [prices, setPrices] = useState<PlansResponse | null>(null);
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchPlans() {
      if (!isFetched) {
        try {
          const response = await api.get<PlansResponse>(
            "/subscription/pricelookup"
          );
          const data = response.data;

          // Converta os valores de string para número
          const convertedData: PlansResponse = {
            uni: {
              anual: data.uni.anual,
              semestral: data.uni.semestral,
              mensal: data.uni.mensal,
            },
            now: {
              anual: data.now.anual,
              semestral: data.now.semestral,
              mensal: data.now.mensal,
            },
            go: {
              anual: data.go.anual,
              semestral: data.go.semestral,
              mensal: data.go.mensal,
            },
          };

          setPrices(convertedData);
          setFetched(true);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchPlans();
  }, [isFetched]);

  return (
    <section
      id="plans"
      className="w-full py-12 dark:bg-zinc-900 md:py-6 lg:py-5"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <h2 className="dark:text-zinc-50 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nossos Planos
            </h2>
          </div>
          <div className="text-muted-foreground md:text-right">
            <p className="text-xl/relaxed">Para você arrasar na escolha</p>
          </div>
        </div>
        <div className="grid grid-cols-1 group md:grid-cols-3 gap-6 md:gap-12 mt-12">
          {prices ? (
            <>
              <GoPlan prices={prices.go} />
              <UniPlan prices={prices.uni} />
              <NowPlan prices={prices.now} />
            </>
          ) : (
            <div className="col-span-3 flex align-middle justify-center w-full h-[20rem] group md:grid-cols-3 gap-6 md:gap-12 mt-12">
              <div role="status" className="m-auto">
                <svg aria-hidden="true" className="w-[5rem] h-[5rem] text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Carregando planos...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlansCards;
