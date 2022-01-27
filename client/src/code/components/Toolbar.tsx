import React from "react";
import Button from "@material-ui/core/Button";
import NewContactIcon from "@material-ui/icons/ContactMail";
import NewMessageIcon from "@material-ui/icons/Email";

const Toolbar = ({ state }) => (
  <div>
    <h2 className="logo">Mailbag App</h2>
    <Button variant="contained" color="primary" size="small" style={{ marginLeft:20, background:"green" }}
      onClick={ () => state.showComposeMessage("new") } >
      <NewMessageIcon style={{ marginRight:10 }} />New Message
    </Button>
    <Button variant="contained" color="primary" size="small" style={{ marginLeft:30, background:"green" }}
      onClick={ state.showAddContact } >
      <NewContactIcon style={{ marginRight:10 }} />New Contact
    </Button>
  </div>
);


export default Toolbar;
