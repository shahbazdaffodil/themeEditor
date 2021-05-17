import apiHelper from "./apiHelper";
import endpoints from "./endpoints";

function getSaveThemeDataRequestBody({
  primaryColor = "",
  secondaryColor = "",
  fontFamily = "",
  buttonVariant = "",
  textInputVariant = "",
  modalBackgroundColor = "",
  modalBorderRadius = "",
  overlayColor = "",
}) {
  return {
    color: { primary: primaryColor, secondary: secondaryColor },
    font: {
      family: fontFamily,
    },
    buttons: {
      actionButtons: {
        variant: buttonVariant,
      },
    },
    advanced: {
      textInput: {
        variant: textInputVariant,
      },
      modal: {
        backgroundColor: modalBackgroundColor,
        borderRadius: modalBorderRadius,
      },
      overlayColor,
    },
    name:'Md Shahbaz'
  };
}

export function saveThemeData(data) {
  const payload = getSaveThemeDataRequestBody(data);
  return apiHelper({ method: "post", url: endpoints.themeData, payload });
}
