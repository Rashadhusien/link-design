"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  //   disableHysteresis: true,
  //   threshold: 100,
  // });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade className=" z-50">
      <Box
        onClick={handleClick}
        role="presentation"
        bgcolor={"primary"}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props) {
  return (
    <>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          className="bg-primary opacity-60 hover:bg-primary hover:opacity-100"
        >
          <KeyboardArrowUpIcon className="text-slate  " />
        </Fab>
      </ScrollTop>
    </>
  );
}
