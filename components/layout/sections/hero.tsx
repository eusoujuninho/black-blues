"use client";
import 'react-toastify/dist/ReactToastify.css';
import 'react-international-phone/style.css';
import Form from "@/components/form";

export const HeroSection = () => {
  return (
    <div className='bg-white' id="hero">
<section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="space-y-8">
          <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold text-left md:text-center text-black font-pangolin">
            <h1 className="text-shadow">
              Domine o Blues com feeling e expressão: <span className="text-purple-600">um pacote completo na Black Friday!</span>
            </h1>
          </div>

          <div className="max-w-screen-md mx-auto text-lg md:text-xl font-medium text-left md:text-center text-gray-800 font-pangolin">
            <p>
               <span className="font-bold">Você terá acesso à <strong>TODOS OS CURSOS POR UM ÚNICO PREÇO!</strong></span>
               <br />
              <span>Participe de um evento ao vivo com <span className="text-purple-500 font-bold">3 aulas gratuitas</span> e aprenda a tocar com alma e emoção!</span>
            </p>
          </div>

          <Form />
        </div>
      </div>
    </section>

    </div>
  );
};
