import React from "react";
import { connect } from "react-redux";
import UploadCard from "../../components/UploadCard";

function UploadPhotoCard(props) {
  const { modalBackgroundColor, modalBorderRadius } = props;

  return (
    <UploadCard
      title="Upload a photo ID"
      subTitle="We require a photo of government ID to verify your identity."
      styles={{
        root: {
          backgroundColor: modalBackgroundColor,
          borderRadius: modalBorderRadius,
        },
      }}
    ></UploadCard>
  );
}

export default connect(
  ({ themeEditor: { modalBackgroundColor, modalBorderRadius } }) => ({
    modalBackgroundColor,
    modalBorderRadius,
  })
)(UploadPhotoCard);
