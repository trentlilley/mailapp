import React from "react";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";


// mailboxes
const MailboxList = ({ state }) => (
  <List>
    { state.mailboxes.map(value => {
      return (
        <Chip className="mailboxButtons" label={ `${value.name}` } onClick={ () => state.setCurrentMailbox(value.path) }
          style={{ width:130, marginBottom:0 }}
          color={ state.currentMailbox === value.path ? "secondary" : "primary" } />
      );
     } ) }
  </List>
);


export default MailboxList;
