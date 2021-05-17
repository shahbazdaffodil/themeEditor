import React from "react";
import { connect } from "react-redux";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import UploadCard from "../../components/UploadCard";
import { ReactComponent as DrivingLicenseImg } from "../../assets/img/driving-license.svg";
import styles from "./DriversLicenceUploadCard.module.css";
import ModalButton from "../../components/ModalButton";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  caption: {
    marginTop: "8px",
    color: "#c4c5cb",
  },
}));

function DriversLicenceUploadCard(props) {
  const { themeProps } = props;
  const { modalBackgroundColor, modalBorderRadius } = themeProps;
  const classes = useStyles();

  return (
    <UploadCard
      title="Driver License"
      subTitle="take a clear photo of the back of your license."
      styles={{
        root: {
          backgroundColor: modalBackgroundColor,
          borderRadius: modalBorderRadius,
        },
      }}
    >
      <div className={styles.imgSection}>
        <div className={styles.imgContainer}>
          <DrivingLicenseImg />
        </div>
      </div>
      <ModalButton {...themeProps} buttonVariant="contained">
        <PhotoCameraOutlinedIcon style={{ fill: "white" }} />
      </ModalButton>
      <ModalButton {...themeProps}>Upload a photo</ModalButton>
      <Typography variant="caption" display="block" className={classes.caption}>
        Alternatively continue on your phone {`with `}
        <a href="#test-message">text message</a>
        {` or `}
        <a href="#email">email</a>
      </Typography>
    </UploadCard>
  );
}

export default connect(({ themeEditor }) => ({
  themeProps: themeEditor,
}))(DriversLicenceUploadCard);
