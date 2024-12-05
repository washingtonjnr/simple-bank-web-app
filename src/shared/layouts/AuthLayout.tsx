// Components
//
import { Outlet } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.jpeg";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="w-full h-full overflow-hidden flex">
      <div className="w-1/2 py-8 hidden lg:flex box-content justify-center items-center bg-white">
        <img
          src={illustrationImg}
          alt="mulher morena com franja mexendo no celular ao lado de um outro celular de 1 metro e meio de altura, com seu conteúdo sendo um banco"
          className="h-full  object-cover"
        />
      </div>

      <div className="w-full h-full lg:w-1/2 p-4 gap-8 bg-gray-50 flex justify-center overflow-auto items-center">
        <div className="px-0 w-full max-w-[468px] flex-col items-center justify-center">
          <Logo className="text-gray-500 mx-auto mb-4" />

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
