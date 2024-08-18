import UniPlan from "./Plans/UniPlan";
import GoPlan from "./Plans/GoPlan";
import NowPlan from "./Plans/NowPlan";

const PlansCards = () => {
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
          <GoPlan />
          <UniPlan />
          <NowPlan />
        </div>
      </div>
    </section>
  );
};

export default PlansCards;
