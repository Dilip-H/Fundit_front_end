import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection: "column",
    width: "50%",
    textAlign: "right",
    alignItems: "right",
    justifyContent: "center"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: "#121212"}}>
     {/* <h1 style={{ color: "white", fontSize: "50px", fontFamily: "sans-serif" }}>Frequently Asked Questions</h1> */}
      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>01. Provide Platform</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            We Provide platform for Startup's and Investors
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>02. Are you a Beginner?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            Need fund to develop prototype to pitch investor?
            You are at right place.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>03. What's there for an Investor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            We have something special for you, Join Now!!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
