import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

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

      <div className="p-20 pb-0 text-center">
        <Button
          type="submit"
          className="w-full bg-green-600 !bg-green-600 hover:bg-green-700 text-white h-14 text-lg font-bold uppercase"
        >
          <a href="#hero">QUERO PARTICIPAR!</a>
        </Button>
      </div>
    </section>
  );
};
