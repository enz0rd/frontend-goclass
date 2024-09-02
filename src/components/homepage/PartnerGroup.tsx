const PartnerGroup = () => {
    const partner1 = "https://via.placeholder.com/150x100";
    const partner2 = "https://via.placeholder.com/150x100";
    const partner3 = "https://via.placeholder.com/150x100";
    const partner4 = "https://via.placeholder.com/150x100";
    
    return (
        <section id="partners" className="flex justify-center m-auto py-[5rem] dark:bg-zinc-900 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:justify-between lg:space-x-10 mx-auto">
                <div className="flex flex-col text-center lg:text-left lg:items-start">
                    <h1 className="text-center lg:text-right md:text-center w-[16rem] dark:text-zinc-50 text-5xl font-extrabold">
                        Nossos Parceiros
                    </h1>
                </div>
                <div className="mb-[3rem] lg:mb-0 overflow-hidden rounded-lg h-[7rem] lg:h-[15rem] w-full">
                    <div className="flex flex-col gap-y-2 lg:gap-y-3 animate-scroll-down w-[90%] mx-auto lg:w-full ">
                        <div className="flex gap-x-2 lg:gap-x-3 w-full justify-center mx-auto">
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner1} alt="Partner 1" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner2} alt="Partner 2" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner3} alt="Partner 3" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner4} alt="Partner 4" />
                        </div>
                        <div className="flex gap-x-2 lg:gap-x-3 w-full justify-center mx-auto">
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner1} alt="Partner 1" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner2} alt="Partner 2" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner3} alt="Partner 3" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner4} alt="Partner 4" />
                        </div>
                        <div className="flex gap-x-2 lg:gap-x-3 w-full justify-center mx-auto">
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner1} alt="Partner 1" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner2} alt="Partner 2" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner3} alt="Partner 3" />
                            <img className="rounded-md w-[22%] lg:w-[25%] border-zinc-200/50 dark:border-zinc-800/50 border-4" src={partner4} alt="Partner 4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerGroup;
