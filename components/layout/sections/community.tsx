import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div>
                  O que é a
                  <span className="text-transparent pl-2 bg-gradient-to-r from-red-500 to-primary bg-clip-text">
                    Maratona Black?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              <p>
                Olá, eu sou o <strong>André Nieri</strong>! É provável que você já tenha visto algum dos meus cursos. Sou professor no <strong>Musicians Institute de Los Angeles</strong>, vencedor do <strong>Guitar Idol</strong>, e artista da <strong>Suhr</strong> e <strong>Bogner</strong>.
              </p>

              <br />

              <p>
                Muitos alunos aprendem de forma errada, e a maioria deles não sabe que é possível evocar emoções através de cada nota que tocam. 
                Por isso, decidi criar uma trilogia de cursos focada em improvisação, onde revelo técnicas que transformam solos comuns em verdadeiras obras-primas.
              </p>

              <br />

              <p>
                E como estamos em novembro, por que não unir o útil ao agradável? Estou lançando a <strong>Maratona Black: Seu Solo Perfeito</strong>! 
                Neste evento exclusivo de Black Friday antecipada, vou oferecer <strong>três aulas ao vivo e gratuitas</strong>, onde vou ensinar tudo o que você precisa saber para alavancar sua improvisação.
              </p>

              <br />

              <p>
                Ao final das aulas, você terá acesso a um <strong>mega cupom de desconto</strong> para adquirir a trilogia de cursos que preparei, tudo a um preço que você nunca viu antes! 
                Essa é uma oportunidade única, e tenho certeza de que você vai adorar o que estou preparando.
              </p>
            </CardContent>

            <CardFooter>
              <Button asChild className="mt-10 text-2xl font-bold px-12 py-6 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-xl shadow-2xl hover:from-yellow-500 hover:to-red-500 hover:scale-110 transition-transform">
                <a href="#hero">
                  QUERO PARTICIPAR!
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
