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
    width: "auto",
    alignItems: "center",
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
      <br></br>
      <h1 style={{ color: "white", fontSize: "50px", fontFamily: "sans-serif" }}>Frequently Asked Questions</h1>

      <br></br>
      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>What is Fund-it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>What we can do with it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#303030" }}>
        <AccordionSummary style={{ color: "white" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{ fontSize: "29px" }}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <br></br>
    </div>
  );
}
