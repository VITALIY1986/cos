import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({/*{questionsAnswers}*/}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const questionsAnswers = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
  ];
  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold, text-blue-600" : "";
    
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
    <>  <h1 className="faq__title text-center">FAQ</h1>
    <div className="faq flex justify-center ">
    
      <dl className="faq__list ">{renderedQuestionsAnswers}</dl>
    </div>
    </>
  );
};

export default Accordion;