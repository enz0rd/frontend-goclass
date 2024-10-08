import SendForm from "@/components/app/send/SendForm";


const SendPage = () => {

  return (
    <section className="w-full flex align-middle justify-center m-auto
    bg-gradient-to-br from-primary to-[#064770] h-screen">
      <div className="w-full m-auto">
        <div className="mx-auto flex align-middle justify-center">
          <div className="mx-5 z-3 group dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-50 flex flex-col p-10 rounded-3xl">
            <h1 className="lg:text-3xl text-xl text-center font-bold mb-3">
              Qual atividade você quer entregar?
            </h1>
            <SendForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendPage;
