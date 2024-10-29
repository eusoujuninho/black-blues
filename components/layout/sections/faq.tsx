import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent, CardFooter } from "@/components/ui/card"

import Link from 'next/link'

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react"

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "O que é a Maratona Black?",
    answer:
      "A Maratona Black: Seu Solo Perfeito é um evento exclusivo de Black Friday antecipada, organizado por André Nieri. Você terá acesso a três aulas gratuitas ao vivo focadas em improvisação na guitarra, além de uma oferta especial no final.",
    value: "item-1",
  },
  {
    question: "Quais são os dias e horários das aulas?",
    answer:
      "As aulas acontecem nos dias 4, 5 e 6 de novembro, sempre às 20h. No dia 6 de novembro, além da última aula, será revelada uma oferta especial.",
    value: "item-3",
  },
  {
    question: "Como faço para participar do evento?",
    answer:
      "Você pode se inscrever usando seu e-mail e WhatsApp. Depois disso, será adicionado ao grupo VIP no WhatsApp, onde receberá todas as informações.",
    value: "item-5",
  },
  {
    question: "Qual é a oferta especial que será revelada?",
    answer:
      "No dia 6 de novembro, você terá acesso a um mega desconto para adquirir a trilogia de cursos de improvisação de André Nieri. Essa oferta é exclusiva para os participantes da Maratona Black.",
    value: "item-6",
  },
  {
    question: "O que acontece no dia 8 de novembro?",
    answer:
      "No dia 8 de novembro, as vagas para a trilogia de cursos serão abertas oficialmente. Fique atento para garantir sua inscrição antes que as vagas se esgotem!",
    value: "item-7",
  },
  {
    question: "Preciso pagar algo para participar das aulas ao vivo?",
    answer:
      "Não, as aulas são 100% gratuitas. Elas servem como uma prévia do conteúdo dos cursos de André Nieri.",
    value: "item-8",
  },
  {
    question: "Posso assistir às aulas depois do evento ao vivo?",
    answer:
      "As aulas terão replay disponível por tempo limitado para os inscritos no evento. As informações sobre o replay serão divulgadas no grupo VIP.",
    value: "item-9",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="p-4 md:p-8 lg:p-12">
      <Card className="overflow-hidden bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg">
        <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            E aí, está esperando o que?
          </h2>
          <p className="text-green-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Toque no botão abaixo e garanta agora sua vaga na Maratona Black!
          </p>
        </CardContent>
        <CardFooter className="p-6 sm:p-8 md:p-12 bg-green-800/20">
          <Button
            asChild
            className="w-full h-14 text-lg font-bold uppercase bg-white text-green-700 hover:bg-green-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <Link href="#hero" className="flex items-center justify-center space-x-2">
              <span>GARANTIR MINHA VAGA AGORA!</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
    </section>
  );
};
