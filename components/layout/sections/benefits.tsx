import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "LineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que é a Black November do Blues: Pague 1, leve todos!?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Olá, eu sou o André Nieri! Você, muito provavelmente, já deve ter visto algum anúncio dos meus cursos por aí. Sou professor no Musicians Institute de Los Angeles, vencedor do Guitar Idol e artista da Suhr e Bogner.
            <br /><br />
            Com toda essa experiência, percebi que muitos alunos ainda enfrentam dificuldades na hora de improvisar. Por isso, decidi criar uma trilogia de cursos focada em improvisação, onde compartilho técnicas e segredos que transformam solos comuns em verdadeiras obras-primas.
            <br /><br />
            E como estamos em novembro, por que não unir o útil ao agradável? Foi aí que pensei em criar a Black November do Blues: Pague 1, leve todos!! Neste evento exclusivo de Black Friday antecipada, vou oferecer três aulas ao vivo e gratuitas, onde vou te ensinar tudo o que você precisa saber para alavancar sua improvisação.
            <br /><br />
            Ao final das aulas, você terá acesso a um mega cupom de desconto para adquirir a trilogia de cursos que preparei, tudo com um preço que você nunca viu antes! Essa é uma oportunidade única, e tenho certeza de que você vai adorar o que estou preparando.
            <br /><br />
            Não há nada igual no Brasil! Junte-se a mim e descubra como aprimorar seus solos de guitarra de forma prática e divertida. Não fique de fora dessa chance de transformar sua música e elevar seu nível como guitarrista.
            <br /><br />
            Estou ansioso para te ver na Black November do Blues!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
