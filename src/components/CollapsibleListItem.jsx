import { useState } from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

function CollapsibleListItem(props) {
  const { title, isOpen: _isOpen, children } = props;
  const [isOpen, setIsOpen] = useState(_isOpen);

  return (
    <>
      <ListItem button onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
      <Divider />
    </>
  );
}

export default CollapsibleListItem;
