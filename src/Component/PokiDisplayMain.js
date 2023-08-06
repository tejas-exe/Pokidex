import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import img from "../Assets/bg.jpg";

const PokiDisplayMain = ({ info }) => {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(30deg)",
            "& > div:nth-child(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-child(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "500px",
          width: 500,
          backgroundImage: `url(${img})`,
          borderColor: "#000",
        }}
      >
        <Typography level="h1" fontSize="lg" textColor="#000">
          {info.name}
        </Typography>
        <CardCover
          sx={{
            border: "1px solid",
            borderColor: "#777",
            backdropFilter: "blur(1px)",
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff">
            {info && (
              <img
                src={
                  info
                    ? info.sprites.other["official-artwork"].front_default
                    : ""
                }
                alt=""
              />
            )}
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: "self-end",
            justifyContent: "flex-end",
            background:
              "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.0))",
            border: "0.1px solid",
            borderColor: "#000",
            backdropFilter: "blur(1px)",
          }}
        >
          {!info && (
            <Typography level="h1" fontSize="lg" textColor="#fff" m="auto">
              Gotta Catch them all
            </Typography>
          )}
          {info && (
            <Typography level="h2" fontSize="lg" textColor="#fff" m="2px auto">
              {`Health: ${info.stats[0].base_stat}`}
            </Typography>
          )}
          {info && (
            <Typography level="h2" fontSize="lg" textColor="#fff" m="2px auto">
              {`Attack: ${info.stats[1].base_stat}`}
            </Typography>
          )}
          {info && (
            <Typography level="h2" fontSize="lg" textColor="#fff" m="2px auto">
              {`Deffence: ${info.stats[2].base_stat}`}
            </Typography>
          )}
          {info && (
            <Typography level="h2" fontSize="lg" textColor="#fff" m="2px auto">
              {`Speed: ${info.stats[5].base_stat}`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokiDisplayMain;
