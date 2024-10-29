"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import 'react-international-phone/style.css';
import Form from "@/components/form";

export const HeroSection02 = () => {
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
            alt="Maratona Black"
          />

          <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold text-left md:text-center">
            <h1>  
              Você nunca mais vai precisar comprar um <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">curso de improvisação!</span>
            </h1>
          </div>

          <div className="max-w-screen-md mx-auto text-lg md:text-xl font-medium text-left md:text-center">
            <p>
              Prepare-se para a <span className="bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">maior Black Friday antecipada da história!</span>
              <span className="hidden md:block"><br /></span> {/* Quebra de linha só no desktop */}
              Antes do grande dia, tenha um test-drive exclusivo:
              <span className="hidden md:block"><br /></span> {/* Quebra de linha só no desktop */}
              participe do nosso evento ao vivo com <span className="bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">3 aulas gratuitas</span> e descubra os segredos para transformar seus solos de guitarra!
            </p>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};
