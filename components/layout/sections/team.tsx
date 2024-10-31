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
                  Você vai aprender com um dos grandes nomes da nova geração do Blues mundial!
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Artur Menezes é um guitarrista talentoso que vem se destacando na cena do blues desde seu álbum de estreia, lançado em 2010. Seu estilo é uma mistura envolvente de blues tradicional e hard rock, com uma habilidade impressionante para alternar entre grooves de jazz.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Com suas raízes brasileiras, Artur traz um toque único à sua música, que se diferencia de seus contemporâneos. Suas composições transitam entre o blues direto e influências do funk, e sua voz consegue transmitir a carga emocional de suas letras com a mesma eficácia que sua guitarra.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Seu álbum mais recente, **Fading Away**, produzido por Josh Smith e com a participação especial de Joe Bonamassa, marca um avanço significativo em sua carreira, reafirmando sua posição entre os novos ícones da guitarra blues.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Baseado em Los Angeles, Artur tem realizado turnês pelos Estados Unidos com frequência. Quando não está se apresentando, tem compartilhado o palco com grandes nomes como Buddy Guy, Kenny Wayne Shepherd, Eric Gales e Kingfish. Ele também faz turnês pela Europa e Brasil anualmente.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Nos últimos dois anos, Artur percorreu a Europa e a América do Sul, tocando em festivais e clubes em diversos países. Ele foi premiado pelo Gibson/Albert King como Melhor Guitarrista pela Blues Foundation e ficou em 3º lugar no **International Blues Challenge** em Memphis em 2018.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Como educador, Artur ensina guitarra no **Musicians Institute** em Hollywood, CA, e tem cursos online e masterclasses com plataformas como TrueFire, JamPlay, JTC e Pickup Music. Ele também é um dos fundadores da **Casa do Blues**, que promove shows semanais gratuitos, workshops e palestras sobre o blues.
                </p>

                <p className="mt-6 text-base text-gray-400 md:text-lg lg:text-xl leading-relaxed">
                  Artur já foi palestrante em eventos TEDx e, com toda essa experiência, traz um conhecimento valioso que você poderá aproveitar nas aulas.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/artur.png"
            alt="Artur Menezes"
            width={1372}
            height={890}
          />
        </div>
      </div>
    </>
  );
};
