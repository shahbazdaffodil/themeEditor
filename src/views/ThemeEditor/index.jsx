import React from "react";
import { connect } from "react-redux";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { saveThemeValues, undoAll } from "../../redux/modules/themeEditor";
import SwiperWrapper from "../../components/SwiperWrapper";
import LeftSidebar from "../../components/LeftSidebar";
import UploadPhotoCard from "../../containers/UploadPhotoCard";
import VerificationCard from "../../containers/VerificationCard";
import DriversLicenceUploadCard from "../../containers/DriversLicenceUploadCard";
import useMuiTheme from "../../hooks/useMuiTheme";
import menuConfig from "./menuConfig";
import swiperConfig from "./swiperConfig";

import "./ThemeEditor.css";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "white",
    paddingTop: "100px",
    position: "fixed",
    width: "100%",
    height: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingBottom: "54px",
  },
}));

function ThemeEditor(props) {
  const { overlayColor, fontFamily, saveThemeValues, undoAll } = props;
  const classes = useStyles();
  const theme = useMuiTheme({ fontFamily });

  return (
    <div className={classes.root}>
      <LeftSidebar
        classes={classes}
        listItems={menuConfig}
        title="Theme Editor"
        onSave={saveThemeValues}
        onUndo={undoAll}
      />
      <main
        className={classes.content}
        style={{ backgroundColor: overlayColor }}
      >
        <ThemeProvider theme={theme}>
          <SwiperWrapper config={swiperConfig}>
            <VerificationCard />
            <UploadPhotoCard />
            <DriversLicenceUploadCard />
          </SwiperWrapper>
        </ThemeProvider>
      </main>
    </div>
  );
}

export default connect(
  ({ themeEditor: { overlayColor, fontFamily, ...rest } }) => ({
    overlayColor,
    fontFamily,
    ...rest,
  }),
  { saveThemeValues, undoAll }
)(ThemeEditor);
