import DropdownContainer from "../../containers/DropdownContainer";
import ColorChooserContainer from "../../containers/ColorChooserContainer";
import SliderContainer from "../../containers/SliderContainer";

export const fieldTypes = {
  COLOR: "COLOR",
  DROPDOWN: "DROPDOWN",
  SLIDER: "SLIDER",
};

export const fieldComponents = {
  [fieldTypes.DROPDOWN]: DropdownContainer,
  [fieldTypes.COLOR]: ColorChooserContainer,
  [fieldTypes.SLIDER]: SliderContainer,
};

export const fieldNames = {
  PRIMARY_COLOR: "primaryColor",
  SECONDARY_COLOR: "secondaryColor",
  FONT_FAMILY: "fontFamily",
  BUTTON_VARIANT: "buttonVariant",
  TEXT_INPUT_VARIANT: "textInputVariant",
  MODAL_BACKGROUND_COLOR: "modalBackgroundColor",
  MODAL_BORDER_RADIUS: "modalBorderRadius",
  OVERLAY_COLOR: "overlayColor",
};

export const fieldDefaultValues = {
  [fieldNames.PRIMARY_COLOR]: "#2a55b5",
  [fieldNames.SECONDARY_COLOR]: "#cde3fc",
  [fieldNames.FONT_FAMILY]: "Roboto",
  [fieldNames.BUTTON_VARIANT]: "outlined",
  [fieldNames.TEXT_INPUT_VARIANT]: "outlined",
  [fieldNames.MODAL_BACKGROUND_COLOR]: "#FFFFFF",
  [fieldNames.MODAL_BORDER_RADIUS]: 16,
  [fieldNames.OVERLAY_COLOR]: "#CDE4FF",
};

const config = [
  {
    title: "Color",
    fields: [
      {
        title: "Primary Color",
        subTitle: "Choose Primary Color",
        name: fieldNames.PRIMARY_COLOR,
        type: fieldTypes.COLOR,
        defaultValue: fieldDefaultValues[fieldNames.PRIMARY_COLOR],
      },
      {
        title: "Secondary Color",
        subTitle: "Choose Secondary Color",
        name: fieldNames.SECONDARY_COLOR,
        type: fieldTypes.COLOR,
        defaultValue: fieldDefaultValues[fieldNames.SECONDARY_COLOR],
      },
    ],
  },
  {
    title: "Font",
    isOpen: true,
    fields: [
      {
        title: "Font Family",
        subTitle: "Choose Font family",
        type: fieldTypes.DROPDOWN,
        name: fieldNames.FONT_FAMILY,
        defaultValue: fieldDefaultValues[fieldNames.FONT_FAMILY],
        options: [
          {
            title: "Roboto",
            value: "Roboto",
          },
          {
            title: "Source Sans Pro",
            value: "Source Sans Pro",
          },
          {
            title: "Verdana",
            value: "Verdana",
          },
          {
            title: "Tahoma",
            value: "Tahoma",
          },
          {
            title: "Trebuchet MS",
            value: "Trebuchet MS",
          },
        ],
      },
    ],
  },
  {
    title: "Buttons",
    fields: [
      {
        title: "Button type",
        subTitle: "Choose Button type",
        type: fieldTypes.DROPDOWN,
        name: fieldNames.BUTTON_VARIANT,
        defaultValue: fieldDefaultValues[fieldNames.BUTTON_VARIANT],
        options: [
          {
            title: "Outlined",
            value: "outlined",
          },
          {
            title: "Contained",
            value: "contained",
          },
          {
            title: "Text only",
            value: "text",
          },
        ],
      },
    ],
  },
  {
    title: "Advanced",
    fields: [
      {
        title: "Input",
        subTitle: "Input text Field Style",
        type: fieldTypes.DROPDOWN,
        name: fieldNames.TEXT_INPUT_VARIANT,
        defaultValue: fieldDefaultValues[fieldNames.TEXT_INPUT_VARIANT],
        options: [
          {
            title: "Outlined",
            value: "outlined",
          },
          {
            title: "Standard",
            value: "standard",
          },
          {
            title: "Filled",
            value: "filled",
          },
        ],
      },
      {
        title: "Modal Background Color",
        subTitle: "Background color for modal window",
        name: fieldNames.MODAL_BACKGROUND_COLOR,
        type: fieldTypes.COLOR,
        defaultValue: fieldDefaultValues[fieldNames.MODAL_BACKGROUND_COLOR],
      },
      {
        title: "Modal Border Radius",
        subTitle: "Border radius for modal window",
        name: fieldNames.MODAL_BORDER_RADIUS,
        type: fieldTypes.SLIDER,
        defaultValue: fieldDefaultValues[fieldNames.MODAL_BORDER_RADIUS],
        max: 64,
      },
      {
        title: "Overlay Color",
        subTitle: "Color of backgrounf color for embedded flow",
        name: fieldNames.OVERLAY_COLOR,
        type: fieldTypes.COLOR,
        defaultValue: fieldDefaultValues[fieldNames.OVERLAY_COLOR],
      },
    ],
  },
];

export default config;
