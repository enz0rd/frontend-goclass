// import { useEffect } from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

// const video = "/Videos/videoplayback.mp4";
const image = "/images/Header.jpg";

const Header = () => {
  // removed because of high outgoing traffic
  // useEffect(() => {
  //   const video = document.getElementById("header-video") as HTMLVideoElement;
  //   video.play();
  // });

  return (
    <div className="z-10">
      <header className="relative z-10 w-full h-[400px] md:h-[300px] lg:h-[500px]">
        {/* <video
          id="header-video"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          controls={false} // Adicionado para desativar os controles
          onContextMenu={(e) => e.preventDefault()} // Adicionado para desativar o menu de contexto
        >
          <source src={video} type="video/mp4" />
        </video> */}
        <img className="object-top object-cover w-full h-full" src={image} alt="Student image" />
        <div className="absolute z-10 inset-0 flex flex-col text-wrap flex-wrap items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl font-regular p-5 text-white text-center md:text-5xl lg:text-6xl">
            Organize seus estudos com a{" "}
            <span className="font-bold">GoClass</span>
          </h1>
          <div className="flex mt-4 space-x-4 md:mt-6 lg:mt-8">
            <Button className="bg-primary text-white hover:bg-primary rounded-full md:px-6 md:py-3 lg:px-8 lg:py-4">
              <a href="#plans">Ver planos</a>
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full md:px-6 md:py-3 lg:px-8 lg:py-4">
              <NavLink to="/login">Já é cadastrado?</NavLink>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
