import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({/*{questionsAnswers}*/}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const questionsAnswers = [
    {
      question: "BIOTINA",
      answer:
        "Este cunoscuta sub denumirea de vitamina H sau vitamina B7. Este o vitamina vitala in cresterea parului si in imbunatatirea aspectului acestuia. Conform numeroaselor studii si recenzii, Biotina ajuta parul sa devina sanatos, elastic si puternic. De asemenea, are un rol esential in sanatatea pielii si a unghiilor. Lipsa Biotinei din organism cauzeaza tulburari neuromusculare, forme severe de dermatita si calvitie(chelie).",
    },
    {
      question: "ZINC",
      answer:
        "Ajuta in asimilarea proteinelor, regleaza productia de sebum, participa la formarea structurii firului de par si accelereaza cresterea parului.",
    },
    {
      question: "COMPLEXUL DE VITAMINE B",
      answer: `B3(Niacina) imbunatateste circulatia sanguina la nivelul radacinii parului, iar lipsa acesteia duce la alopecie - chelie partiala.

      B5 (Acid Pantotenic) accelereaza cresterea parului.
      
      B6 sporeste efectul altor vitamine, ajutand la intarirea fibrei capilare.
      
      B12 stimuleaza reinnoirea foliculilor de par.
      
      B1 accelereaza diviziunea celulara si impreuna cu vitamina B8 intaresc fibra capilara.
      
      Deficitul de vitamine B provoaca alopecie , iar lipsa vitaminei B9 duce la aparitia firelor albe si caderea precoce a parului.`,
    },
   
  ];
  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "text-red-300 font-weight-bold " : "";
    
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
       
        item={item}
        index={index}
     
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <> 
    <div className="faq flex justify-center px-6  ">
    
      <dl className="faq__list ">{renderedQuestionsAnswers}</dl>
    </div>
    </>
  );
};

export default Accordion;