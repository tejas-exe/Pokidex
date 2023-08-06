import React from "react";
import { useEffect, useState } from "react";
import AllCard from "./AllCard";
import "../App.css";
import axios from "axios";
import PokiDisplayMain from "./PokiDisplayMain";
import { Button } from "@mui/material";

const PokiDisplay = () => {
  const [pokiURL, setPokiURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [poke, setPoke] = useState([]);
  const [offUrl, setoffUrl] = useState(0);

  const [nxtUrl, setNxtUrl] = useState("");
  const [prvUrl, setPrvUrl] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  useEffect(() => {
    console.log("==>", pokiURL);
    const dataFecher = async () => {
      const responce = await axios.get(pokiURL);
      setNxtUrl(responce.data.next);
      setPrvUrl(responce.data.previous);
      getPokemon(responce.data.results);
    };

    const getPokemon = async (res) => {
      res.map(async (item) => {
        const result = await axios.get(item.url);
        setPoke((state) => {
          state = [...state, result.data];
          return state;
        });
      });
    };

    dataFecher();
  }, [pokiURL]);

  console.log(
    ",.,.,.,.,..,.,.,..,.,.,.,.,.,....,.,.,.,.,...,...,.,.,..,.,.,..,.",
    pokiURL
  );

  const getpokemon = async (data) => {
    setMoreInfo(data);
  };

  return (
    <div>
      <div className="HomeContainer">
        <div className="pokiContainerAll">
          {poke.map((item) => (
            <AllCard data={item} getpokemon={getpokemon} />
          ))}
        </div>

        <div className="pokeDetails">
          <PokiDisplayMain info={moreInfo} />
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ width: "100%", margin: "auto" }}
        onClick={() => {
          setoffUrl((offUrl) => offUrl * 1 + 20);
          setPokiURL(
            `https://pokeapi.co/api/v2/pokemon?offset=${
              offUrl * 1 + 20
            }&limit=20`
          );
        }}
      >
        Load More
      </Button>
    </div>
  );
};

export default PokiDisplay;
