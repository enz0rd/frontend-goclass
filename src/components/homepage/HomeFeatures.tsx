const HomeFeatures = () => {
  return (
    <div className="relative h-[30rem] sm:h-[30rem] justify-center dark:bg-zinc-900 overflow-hidden">
      <div className="flex w-full justify-center overflow-hidden">
        <h1
          className="absolute top-1/2 z-[0] -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] font-extrabold text-transparent whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px #1B86CA",
          }}
        >
          GoClass
        </h1>
      </div>
      <div className="relative m-auto mt-[5rem] lg:mt-0 z-[10] lg:w-[1280px] lg:top-[40%] w-full">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:justify-between lg:space-x-10 mx-auto lg:w-[80%]">
          <div className="flex flex-col text-center lg:text-left lg:items-start">
            <h1 className="dark:text-zinc-50 text-5xl font-extrabold">
              Simples &
            </h1>
            <h1 className="dark:text-zinc-50 text-5xl font-extrabold">
              Rápida &
            </h1>
            <h1 className="dark:text-zinc-50 text-5xl font-extrabold">
              Objetiva
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-end mt-4 lg:mt-0">
            <p className="dark:text-zinc-50 text-xl font-medium text-center lg:text-right w-[90%] lg:w-[30rem]">
              Diga adeus aos trabalhos, atividades e avaliações desorganizadas
              com a GoClass. Uma plataforma feita para você e a sua Instituição
              de ensino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
