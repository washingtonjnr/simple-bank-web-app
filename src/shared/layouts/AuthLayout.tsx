import { Outlet } from "react-router-dom";
// Components
import { Logo } from "../components/Logo";
//
import illustrationImg from "../assets/images/illustration.jpeg";

export function AuthLayout() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full lg:w-1/2 px-2 gap-8 flex flex-col items-center justify-center bg-gray-50">
        <Logo className="text-gray-500" />

        <div className="w-full flex flex-col max-w-[504px] justify-center">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="w-1/2 py-8 hidden lg:flex box-content justify-center items-center bg-white">
        <img
          src={illustrationImg}
          alt="mulher morena com franja mexendo no celular ao lado de um outro celular de 1 metro e meio de altura, com seu conteúdo sendo um banco"
          className="h-full  object-cover"
        />
      </div>
    </div>
  );
}
