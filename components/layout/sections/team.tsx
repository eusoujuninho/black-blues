import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  return (
    <>
      <div id="about" className="relative bg-black overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
              fill="black"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-4xl leading-tight tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                  Com quem você vai aprender
                </h2>

                <p className="text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
                  Você vai aprender com um dos professores titulares do{" "}
                  <span className="font-semibold text-white">
                    Musicians Institute
                  </span>
                  !
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  André Nieri é um guitarrista profissional com mais de duas
                  décadas de experiência. Ele é graduado em um renomado
                  Conservatório de Tatuí e professor no Musicians Institute em
                  Los Angeles, EUA. André foi vencedor de vários concursos
                  internacionais de guitarra, incluindo o Guitar Idol 2014 em
                  Londres, onde conquistou o primeiro lugar com uma composição
                  autoral.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Ele é o criador de diversos cursos de guitarra que já participaram da evolução de 
                  mais de 20 mil alunos ao redor do mundo.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  André dedica grande parte do seu tempo para criar e
                  disponibilizar materiais constantes e um aprendizado
                  diferenciado, oferecendo suporte aos seus alunos.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Além disso, nos últimos 10 anos, André tem acompanhado o
                  genial baterista{" "}
                  <span className="font-semibold text-white">Virgil Donati</span>{" "}
                  (Planet X, Steve Vai) em suas turnês pelo mundo, tocando em
                  seu trio instrumental e ministrando clínicas e workshops.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Com toda essa experiência, André teve a oportunidade de
                  compartilhar o palco, viagens e muitos cafés com os melhores
                  guitarristas do mundo, absorvendo conhecimento valioso de
                  todas essas experiências. E muitos desses conselhos são parte
                  do conteúdo que você encontra aqui na{" "}
                  <span className="font-semibold text-white">
                    Maratona Black
                  </span>
                  !
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/nieri.webp"
            alt="Team member"
            width={720}
            height={960}
          />
        </div>
      </div>
    </>
  );
};
