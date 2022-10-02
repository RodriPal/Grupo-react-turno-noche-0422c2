import React from "react";
import Card from "./Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot} from "@fortawesome/free-solid-svg-icons"

const CardContainer = () => {
  return (
    <div className="bg-seventh-color dark:bg-fourth-color pt-10 pb-12">
      <h5 className="text-center text-4xl font-bold text-first-color dark:text-seventh-color pb-2">Recorré el mundo <FontAwesomeIcon icon={faPlaneDeparture}/></h5>
      <h3 className="text-center text-xl font-bold text-first-color dark:text-second-color mb-4"><FontAwesomeIcon icon={faLocationDot} className="text-second-color"/> Tours más famosos</h3>
    <section className="container mx-auto md:grid-flow-col-dense md:items-center sm:flex-row justify-center md:justify-evenly md:gap-2 sm:gap-1 items-center grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mb-6 lg:gap-7">
        <Card
        image = "/Media/Qatar.jpg"
        country = "QATAR"
        plan = "FIFA WORLD CUP 2022"
        duration = "21 DÍAS"
        reviews= "31"
        price= "5500"
        textDeploy="DOHA"
        />
        <Card
        image = "/Media/Sudafrica.jpg"
        country = "SUDÁFRICA"
        plan = "CONOCÉ LA SABANA"
        duration = "9 DÍAS"
        reviews= "92"
        price= "1900"
        textDeploy="SABI SABI"
        />
        <Card 
        image = "/Media/Cataratas.jpg"
        country = "ARGENTINA"
        plan = "VISITÁ LAS CATARATAS"
        duration = "7 DÍAS"
        reviews= "129"
        price= "790"
        textDeploy="MISIONES"
        />
        <Card 
        image = "/Media/España.jpg"
        country = "ESPAÑA"
        plan = "TOUR POR BARCELONA"
        duration = "10 DÍAS"
        reviews= "101"
        price= "3900"
        textDeploy="SAGRADA FAMILIA"
        />
    </section>
     </div>
  )
}

export default CardContainer