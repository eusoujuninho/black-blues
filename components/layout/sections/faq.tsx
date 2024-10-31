import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Link from 'next/link';

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "O que é a Black November do Blues?",
    answer:
      "A Black November do Blues é um evento especial de ofertas em cursos de guitarra com Artur Menezes, trazendo aulas ao vivo focadas em improvisação e técnicas de guitarra. Prepare-se para se aprofundar no universo do blues com conteúdos exclusivos!",
    value: "item-1",
  },
  {
    question: "Quando acontecerão as aulas?",
    answer:
      "As aulas ocorrerão nos dias 4, 5 e 6 de novembro, sempre às 20h. No dia 6, além da última aula, teremos uma oferta imperdível para você!",
    value: "item-2",
  },
  {
    question: "Como posso participar do evento?",
    answer:
      "Para participar, basta se inscrever com seu e-mail e número de WhatsApp. Você será adicionado a um grupo VIP no WhatsApp, onde receberá todas as informações e atualizações sobre o evento.",
    value: "item-3",
  },
  {
    question: "Qual é a oferta especial que será apresentada?",
    answer:
      "No dia 6 de novembro, revelaremos um super desconto para a compra dos cursos de guitarra de Artur Menezes. Essa é uma oportunidade exclusiva para os participantes da Black November do Blues!",
    value: "item-4",
  },
  {
    question: "O que acontecerá após o evento?",
    answer:
      "Após o evento, as vagas para os cursos estarão oficialmente abertas. Fique atento para garantir seu acesso antes que as vagas se esgotem!",
    value: "item-5",
  },
  {
    question: "As aulas ao vivo têm custo?",
    answer:
      "Não! Todas as aulas são 100% gratuitas. Elas funcionam como uma introdução ao conteúdo dos cursos do Artur, permitindo que você conheça um pouco mais do que está por vir.",
    value: "item-6",
  },
  {
    question: "Posso assistir às aulas depois do evento ao vivo?",
    answer:
      "Sim! As aulas estarão disponíveis para replay por um tempo limitado para todos os inscritos. As informações sobre como acessar o replay serão enviadas no grupo VIP.",
    value: "item-7",
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
        <Card className="overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Não perca essa oportunidade!
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Clique no botão abaixo e garanta sua participação na Black November do Blues!
            </p>
          </CardContent>
          <CardFooter className="p-6 sm:p-8 md:p-12 bg-blue-800/20">
            <Button
              asChild
              className="w-full h-14 text-lg font-bold uppercase bg-white text-blue-700 hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
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
