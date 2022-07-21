import React from "react";

export default function ShopItem(props) {
  function handleImageClick() {
    props.onItemClick(props.item);
  }
  return (
    <figure className="shop__grid-item shop__item">
      <img
        className="shop__item-image"
        src={props.item.image}
        alt={props.item.name}
      />
    </figure>
  );
}
