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
                  <span className="text-transparent pl-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                    Black November do Blues?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              <p>
                Antes de te explicar, permita-me apresentar...
              </p>

              <br />

              <p>
                Meu nome é Artur Menezes e como vencedor do concurso da <strong>Blues Foundation</strong> (Gibson/Albert King) em 2018 e professor no <strong>Musicians Institute de Los Angeles</strong>, tive a honra de compartilhar o palco com grandes nomes do gênero, como <strong>Joe Bonamassa</strong> e <strong>Buddy Guy</strong>. Com isso, aprendi que o Blues é muito mais do que técnica ou 'fórmulas mágicas'; trata-se de tocar cada nota com emoção e sentir a música.
              </p>

              <br />

              <p>
                Neste mês de novembro, vou oferecer <strong>três aulas ao vivo e gratuitas</strong>, onde ensinarei tudo o que você precisa saber para aprofundar sua compreensão e improvisação no Blues.
              </p>

              <br />

              <p>
                Ao final das aulas, você terá acesso a um <strong>mega cupom de desconto</strong> para adquirir minha trilogia de cursos sobre Blues, tudo a um preço que você nunca viu antes. Essa é uma chance única de aprender e crescer musicalmente.
              </p>

              <br />

              <p>
                Se você está pronto para essa jornada musical, espero vê-lo nas aulas!
              </p>
            </CardContent>

            <CardFooter>
              <Button asChild className="mt-10 text-2xl font-bold px-12 py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-2xl hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-transform">
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
