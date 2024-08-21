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
              anual: data.uni.anual.replace(".", ","),
              semestral: data.uni.semestral.replace(".", ","),
              mensal: data.uni.mensal.replace(".", ","),
            },
            now: {
              anual: data.now.anual.replace(".", ","),
              semestral: data.now.semestral.replace(".", ","),
              mensal: data.now.mensal.replace(".", ","),
            },
            go: {
              anual: data.go.anual.replace(".", ","),
              semestral: data.go.semestral.replace(".", ","),
              mensal: data.go.mensal.replace(".", ","),
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
      className="w-full py-12 dark:bg-zinc-900 md:py-24 lg:py-32"
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
          {prices && (
            <>
              <GoPlan prices={prices.go} />
              <UniPlan prices={prices.uni} />
              <NowPlan prices={prices.now} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlansCards;
