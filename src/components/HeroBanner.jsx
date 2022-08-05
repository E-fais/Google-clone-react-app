import { Typography, styled } from "@mui/material";
import React from "react";
import "../App.css";


function HeroBanner() {
  const StyledTypography = styled("Typography")({
    
    fontSize: "40px",
    fontFamily: "roboto",
    color: "#2596be",
  });
  return (
    <div className="heroBanner">
      <div>
        <StyledTypography>Tez Search</StyledTypography>
      </div>
      <div>
        <Typography
         fontFamily={'roboto'} fontWeight={700} variant='body2'> <span className="google1" >Google </span>
        <span className="google2" >Without</span><span className="google3"> Ads! </span></Typography>
      </div>
    </div>
  );
}

export default HeroBanner;
