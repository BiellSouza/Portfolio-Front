import React from "react";
import content from "../content/content";
import ServiceCard from "../components/ServiceCard";

const arrayFeatures = Object.values(content.features.cards);

function SectionTest() {
  return (
    <div>
      {arrayFeatures.map((card, index) => (
        <div key={index}>
          <ServiceCard
            number={card.number}
            title={card.title}
            description={card.subtitle}
          />
        </div>
      ))}
    </div>
  );
}

export default SectionTest;
