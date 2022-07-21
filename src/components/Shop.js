import React from "react";
import brownSoap from "../images/brown-soap.jpg";
import faceSoap from "../images/face-soap.jpg";
import honeyBees from "../images/honey-bees.jpg";
import lipBulm from "../images/lipbulm.jpg";
import purpleSoap from "../images/purple-soap.jpg";
import relax from "../images/relax.jpg";
import pawBulm from "../images/doggy-palmbulm.jpg";
import doggyShampoo from "../images/doggy-shampoo.jpg";
import massageOil from "../images/massage-oil.jpg";
import pinkClay from "../images/pink-clay.jpg";
import salv from "../images/salv.jpg";
import soyCandle from "../images/soy-candel.jpg";
import wheetSack from "../images/wheet-sack.jpg";
import ShopItem from "./ShopItem";

export default function Shop() {
  const shopItems = [
    { name: "Olive Oil Soap Bar", image: brownSoap, id: "1" },
    { name: "Lavender Face Wash", image: faceSoap, id: "2" },
    { name: "Honey & Lavender Soap Bar", image: honeyBees, id: "3" },
    { name: "Lavender Lipbulm", image: lipBulm, id: "4" },
    { name: "Pure lavender Soap Bar", image: purpleSoap, id: "5" },
    { name: "Relax Lavender Oil", image: relax, id: "6" },
    { name: "Lavender Doggy Pawbulm", image: pawBulm, id: "7" },
    { name: "Lavender Doggy Shampoo ", image: doggyShampoo, id: "8" },
    { name: "Relaxing Massage Oil", image: massageOil, id: "9" },
    { name: "Lavnder & Pink Clay Soap Bar", image: pinkClay, id: "10" },
    { name: "Relaxing Lavensder Salv", image: salv, id: "11" },
    { name: "Lavender Soy Candle", image: soyCandle, id: "12" },
    { name: "Lavender Wheet Sack", image: wheetSack, id: "13" },
  ];

  return (
    <section className="shop" id="shop">
      <div className="shop__container">
        <h4 className="shop__heading">Premium Lavender Products</h4>
        <div className="shop__grid-container">
          <div className="shop__grid">
            {shopItems.map((item) => (
              <ShopItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <p className="shop__discprition">We are available at:</p>
        <a href="#" className="shop__button">
          Shopify
        </a>
        <p className="shop__footer">Or visit our lovley little shop!</p>
      </div>
    </section>
  );
}
