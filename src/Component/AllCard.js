import * as React from "react";
import "../App.css";

const AllCard = ({ data, getpokemon }) => {
  
  console.log("===>??", data);
  return (
    <div
      className="pokimonSmallDisplay"
      onClick={() => {
        getpokemon(data);
      }}
    >
      <img
        src={data.sprites.other["official-artwork"].front_default}
        alt={data.name}
        className="pokiImg"
      />
      <h4>{data.name}</h4>
    </div>
  );
};

export default AllCard;
