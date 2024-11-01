"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import 'react-international-phone/style.css';
import Form from "@/components/form-no-loader";

export const HeroSection = () => {
  return (
    <section className="container w-full" id="hero">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="space-y-8">
          {/* Logo adicionado aqui */}
          <Image
            className="mx-auto w-40"
            width={160}
            height={120}
            src="/logo.png"
            alt="Black November do Blues"
          />

          <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold text-left md:text-center">
            <h1>  
              <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
                Desperte sua Expressão Musical
              </span>: Junte-se à Black November do Blues e <span className="underline decoration-red-500 font-bold">Eleve sua Improvisação!</span>
            </h1>
          </div>

          <div className="max-w-screen-md mx-auto text-lg md:text-xl font-medium text-left md:text-center">
            <p>
              Nesta <span className="bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">Black November</span>, aproveite a 
              <span className="bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text"> oferta imperdível de 3 cursos pelo preço de 1</span> 
               e participe de <span className="bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">3 aulas ao vivo gratuitas</span> de improvisação!
            </p>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};
