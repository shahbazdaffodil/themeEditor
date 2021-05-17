import React from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CollapsibleListItem from "../CollapsibleListItem";
import InputWrapper from "../InputWrapper";

import styles from "./LeftSidebar.module.css";

function LeftSidebar(props) {
  const { title, listItems, classes = {}, onUndo, onSave } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {listItems.map(({ title, fields, isOpen }) => (
          <CollapsibleListItem key={title} title={title} isOpen={isOpen}>
            {fields.map((field) => (
              <InputWrapper key={field.title} {...field} />
            ))}
          </CollapsibleListItem>
        ))}
      </List>
      <div className={styles.actionButtonContainer}>
        <Button variant="outlined" color="primary" fullWidth onClick={onUndo}>
          Undo All
        </Button>
        <Button variant="contained" color="primary" fullWidth onClick={onSave}>
          Save
        </Button>
      </div>
    </Drawer>
  );
}

export default LeftSidebar;
