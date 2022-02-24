import React from "react";
import "../../../../css/HomeCentral.css";
import project1 from "../../../../imgs/samen_web.png";
import chooseCV from "../../../../imgs/choose-cv.svg";
import checkPay from "../../../../imgs/check-pay.svg";

import { Link, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const FirstSectionCards = () => {
  const cardsInfo = [
    {
      title: "www.samenvvv.nl",
      description: `Create an account if you don't already have one. It takes only one minute.`,
      btn: "to Visit",
      image: `${project1}`,
      link: `https://www.samenvvv.nl`,
    },
    {
      title: "Club",
      description: "Choose the CV template that suits you among many designs.",
      btn: "Our Inovation",
      image: `${chooseCV}`,
      link: `www.samenvvv.nl`,
    },
    {
      title: "Check & Pay",
      description: `Receive your CV template via link, try it out for two days and if it's the perfect one for you, proceed to full purchase.`,
      btn: "Our Inovation",
      image: `${checkPay}`,
      link: `www.samenvvv.nl`,
    },
  ];

  const displayCards = cardsInfo.map((el, i) => {
    return (
      <div key={i} className="central-services-one-card">
        <div className="central-services-imgContainer">
          <img
            src={el.image}
            alt={`${el.title}`}
            className="central-services-card-image"
          />
        </div>
        {/* <h3 className="central-services-card-title">{el.title}</h3> */}

        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          <Link href={el.link} isExternal>
            {el.title} <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <p className="central-services-cardText">{el.description}</p>
      </div>
    );
  });
  return (
    <div id="ServicesId" className="central-firstSectionContainer">
      <div className="central-firstSectionTitle">
        <div className="central-firstSectionContainer">
          <h3 className="central-firstSectionTitle">
            Enjoy our services in three simple steps
          </h3>
          <div className="central-firstSection-cards-container">
            {displayCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSectionCards;
