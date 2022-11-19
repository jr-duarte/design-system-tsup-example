"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Amstel: () => Amstel_default,
  Button: () => Button,
  ButtonTeste: () => ButtonTeste,
  GridCol: () => Col_default,
  GridRow: () => GridRow,
  Heineken: () => Heineken_default,
  Tiger: () => Tiger_default,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  globalStyles: () => globalStyles,
  gridGutter: () => gridGutter,
  keyframes: () => keyframes,
  prefix: () => prefix,
  reset: () => reset,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/styles/stitches.config.ts
var import_react = require("@stitches/react");
var gridGutter = {
  width: 15
};
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
  reset
} = (0, import_react.createStitches)({
  prefix: "duarte-design-system",
  theme: {
    fonts: {
      base: "Arial, Helvetica, sans-serif",
      highLight: "Ringside Compressed"
    },
    fontWeights: {
      normal: 400,
      bold: 700,
      black: 900
    },
    fontStyles: {
      normal: "normal",
      italic: "italic"
    },
    letterSpacings: {
      xtight: "-.04em",
      tight: "-.02em",
      normal: 0,
      loose: ".02em",
      xloose: " .04em"
    },
    lineHeights: {
      xloose: 2,
      loose: 1.75,
      medium: 1.5,
      tight: 1.2,
      xtight: 1
    },
    fontSizes: {
      xxnano: "12px",
      xnano: "14px",
      nano: "16px",
      xxsmall: "18px",
      xsmall: "20px",
      small: "24px",
      medium: "28px",
      large: "32px",
      xlarge: "40px",
      xxlarge: "48px",
      huge: "56px",
      xhuge: "64px",
      xxhuge: "72px",
      giant: "80px",
      xgiant: "88px",
      xxgiant: "96px"
    },
    borderWidths: {
      none: 0,
      hairline: "1px",
      thin: "2px",
      thick: "4px",
      heavy: "8px"
    },
    radii: {
      none: 0,
      small: "4px",
      medium: "8px",
      large: "16px",
      pill: "500px",
      circle: "50%"
    },
    shadows: {
      level1X: "0px",
      level1Y: "4px",
      level1B: "8px",
      level1Stack: "0px 4px 8px",
      level2X: "0px",
      level2Y: "8px",
      level2B: "24px",
      level2Stack: "0px 8px 24px",
      level3X: "0px",
      level3Y: "16px",
      level3B: "32px",
      level3Stack: "0px 16px 32px",
      level4X: "0px",
      level4Y: "16px",
      level4B: "48px",
      level4Stack: "0px 16px 48px"
    },
    aspectRatios: {
      "16x9": "56.25%",
      "3x2": "66.67%",
      "4x3": "75%",
      square: "100%",
      "3x4": "133.34%",
      "2x3": "150%",
      "9x16": "177.78%"
    },
    space: {
      nano: "4px",
      xxsmall: "6px",
      xsmall: "8px",
      small: "12px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
      xxlarge: "40px",
      huge: "48px",
      xhuge: "56px",
      xxhuge: "64px",
      giant: "80px",
      xgiant: "120px",
      xxgiant: "160px"
    },
    colors: {
      brandPrimaryPure: "#ED1C24",
      brandPrimaryLight: "#FBC6CB",
      brandPrimaryMedium: "#D51118",
      brandPrimaryDark: "#5E080B",
      brandSecondaryPure: "#BD8D28",
      brandSecondaryLight: "#EEDAAF",
      brandSecondaryMedium: "#976220",
      brandSecondaryDark: "#6E4017",
      accentPure: "#6339F9",
      accentLight: "#D4C3FE",
      accentMedium: "#3E27B0",
      accentDark: "#2B245D",
      neutralHighPure: "#FFFFFF",
      neutralHighLight: "#F5F5F4",
      neutralHighMedium: "#E4E3E1",
      neutralHighDark: "#B7B2AE",
      neutralLowPure: "#131211",
      neutralLowLight: "#958F88",
      neutralLowMedium: "#645E59",
      neutralLowDark: "#3B3835",
      statusFocusPure: "#009DF2",
      statusFocusLight: "#B3E6F4",
      statusFocusMedium: "#005BAE",
      statusFocusDark: "#143971",
      statusNegativePure: "#C51B62",
      statusNegativeLight: "#FAC7D2",
      statusNegativeMedium: "#9D0261",
      statusNegativeDark: "#5A014A"
    }
  },
  media: {
    lgUp: "(min-width: 992px)",
    lgDown: "(max-width: 991px)"
  },
  utils: {
    gridCol: (number) => {
      return {
        flex: `0 0 ${parseFloat((number / 12 * 100).toFixed(5))}%`,
        maxWidth: `${parseFloat((number / 12 * 100).toFixed(5))}%`,
        position: "relative",
        width: "100%",
        paddingRight: gridGutter.width,
        paddingLeft: gridGutter.width
      };
    }
  }
});
var globalStyles = globalCss({
  html: {
    scrollBehavior: "smooth",
    scrollPaddingTop: "80px"
  },
  ".Toastify": {
    fontSize: "$nano",
    color: "$neutralLowPure"
  },
  body: {
    fontFamily: "$base",
    fontSize: "$medium",
    fontWeight: "$normal",
    backgroundColor: "$neutralHighLight"
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "&::before": {
      boxSizing: "border-box"
    },
    "&::after": {
      boxSizing: "border-box"
    }
  },
  "#nprogress .bar": {
    background: "$brandPrimaryPure !important"
  },
  "#nprogress .peg": {
    boxShadow: "0 0 10px $brandPrimaryPure , 0 0 5px $brandPrimaryPure !important"
  },
  "#nprogress .spinner-icon": {
    borderTopColor: "$brandPrimaryPure !important",
    borderLeftColor: "$brandPrimaryPure !important"
  },
  '[data-hidden="onDesktop"]': {
    "@lgUp": {
      display: "none !important"
    }
  },
  '[data-hidden="onMobile"]': {
    "@lgDown": {
      display: "none !important"
    }
  },
  "@font-face": [
    {
      fontFamily: "Ringside Compressed",
      fontWeight: 400,
      src: "url(/fonts/Ringside-Compressed/RingsideCompressed-Book.woff2)",
      fontDisplay: "swap"
    },
    {
      fontFamily: "Ringside Compressed",
      fontWeight: 700,
      src: "url(/fonts/Ringside-Compressed/RingsideCompressed-Bold.woff2)",
      fontDisplay: "swap"
    }
  ]
});

// src/components/Button/ButtonDefault/styles.ts
var Text = styled("span", {
  display: "block",
  fontFamily: "$base",
  fontSize: "$nano",
  lineHeight: "24px",
  fontWeight: "$bold",
  letterSpacing: "$loose",
  textAlign: "center"
});
var Wrapper = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  textDecoration: "none",
  padding: "$small $medium",
  ".icon-start": {
    marginRight: "$xsmall"
  },
  ".icon-end": {
    marginLeft: "$xsmall"
  },
  variants: {
    onContrast: {
      false: {
        backgroundColor: "$brandPrimaryPure",
        color: "$neutralHighPure",
        svg: {
          fill: "$neutralHighPure"
        },
        "&:hover": {
          backgroundColor: "$brandPrimaryMedium"
        }
      },
      true: {
        backgroundColor: "$neutralHighPure",
        color: "$brandPrimaryPure",
        "&:hover": {
          backgroundColor: "$brandPrimaryLight"
        },
        svg: {
          fill: "$brandPrimaryPure"
        }
      }
    },
    disabledStyled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "$neutralHighMedium",
        color: "$neutralLowLight",
        svg: {
          fill: "$neutralLowLight"
        }
      }
    },
    border: {
      true: {
        backgroundColor: "transparent",
        border: "1px solid $statusFocusPure",
        color: "$statusFocusPure",
        svg: {
          fill: "$brandPrimaryPure"
        },
        "&:hover": {
          backgroundColor: "$brandPrimaryPure",
          color: "$brandSecondaryPure",
          svg: {
            fill: "$brandSecondaryPure"
          }
        }
      }
    }
  },
  compoundVariants: [
    {
      disabledStyled: true,
      onContrast: true,
      css: {
        backgroundColor: "$brandPrimaryPure",
        color: "$neutralLowLight",
        svg: {
          fill: "$neutralLowLight"
        },
        "&:hover": {
          backgroundColor: "$neutralHighMedium",
          color: "$neutralLowLight",
          svg: {
            fill: "$neutralLowLight"
          }
        }
      }
    },
    {
      disabledStyled: true,
      onContrast: false,
      css: {
        backgroundColor: "$neutralHighPure",
        svg: {
          fill: "$neutralLowLight"
        },
        "&:hover": {
          backgroundColor: "$neutralHighMedium",
          color: "$neutralHighPure",
          svg: {
            fill: "$neutralLowLight"
          }
        }
      }
    },
    {
      disabledStyled: false,
      onContrast: false,
      border: true,
      css: {
        backgroundColor: "transparent",
        border: "1px solid $brandPrimaryPure",
        color: "$neutralPrimaryPure",
        svg: {
          fill: "$brandPrimaryPure"
        },
        "&:hover": {
          backgroundColor: "$brandPrimaryPure",
          color: "$brandSecondaryPure",
          svg: {
            fill: "$brandSecondaryPure"
          }
        }
      }
    },
    {
      disabledStyled: false,
      onContrast: true,
      border: true,
      css: {
        backgroundColor: "transparent",
        border: "1px solid $brandSecondaryPure",
        color: "$brandSecondaryPure",
        svg: {
          fill: "$brandSecondaryPure"
        },
        "&:hover": {
          backgroundColor: "$brandSecondaryPure",
          color: "$neutralHighPure",
          svg: {
            fill: "$neutralHighPure"
          }
        }
      }
    }
  ],
  defaultVariants: {
    onContrast: "false",
    disabledStyled: "false",
    border: "false"
  }
});

// src/components/Button/ButtonDefault/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button(_a) {
  var _b = _a, {
    disabled = false,
    tag = "button",
    onContrast = false,
    border = false,
    children,
    type = "button",
    css: css2,
    onClick,
    fullWidth = false,
    borderRadius = "none"
  } = _b, props = __objRest(_b, [
    "disabled",
    "tag",
    "onContrast",
    "border",
    "children",
    "type",
    "css",
    "onClick",
    "fullWidth",
    "borderRadius"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrapper, __spreadProps(__spreadValues({
    "data-testid": "component-button",
    as: tag,
    css: __spreadProps(__spreadValues({}, css2), {
      borderRadius: `$${borderRadius}`,
      width: fullWidth ? "100%" : "auto"
    }),
    onContrast,
    border,
    type,
    onClick,
    disabled,
    disabledStyled: disabled
  }, props), {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
      children
    })
  }));
}

// src/components/Button/ButtonTeste/index.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function ButtonTeste({ children }) {
  const [count, setCount] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    console.log(count);
  }, [count]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", {
    type: "button",
    onClick: () => {
      setCount(count + 1);
    },
    children: [
      children,
      " ",
      count
    ]
  });
}

// src/components/Grid/Col/styles.ts
var itemsCol = {};
var itemsColLg = {};
Array(13).fill(0).forEach((_item, index) => {
  itemsCol[`${index}`] = {
    "@lgDown": {
      gridCol: `${index}`
    }
  };
  itemsColLg[`${index}`] = {
    "@lgUp": {
      gridCol: `${index}`
    }
  };
});
var Wrapper2 = styled("div", {
  variants: {
    col: __spreadValues({}, itemsCol),
    collg: __spreadValues({}, itemsColLg)
  }
});
var styles_default = Wrapper2;

// src/components/Grid/Col/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var GridCol = (_a) => {
  var _b = _a, { col, colLg, children, css: css2 } = _b, props = __objRest(_b, ["col", "colLg", "children", "css"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(styles_default, __spreadProps(__spreadValues({
    col,
    collg: colLg,
    css: css2
  }, props), {
    children
  }));
};
var Col_default = GridCol;

// src/components/Grid/Row/styles.ts
var Wrapper3 = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginRight: `-${gridGutter.width}px`,
  marginLeft: `-${gridGutter.width}px`
});
var styles_default2 = Wrapper3;

// src/components/Grid/Row/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function GridRow(_a) {
  var _b = _a, {
    children,
    css: css2
  } = _b, props = __objRest(_b, [
    "children",
    "css"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(styles_default2, __spreadProps(__spreadValues({
    css: css2
  }, props), {
    children
  }));
}

// src/styles/Themes/Amstel.ts
var Amstel_default = {
  brandPrimaryPure: "#ED1C24",
  brandPrimaryLight: "#FBC6CB",
  brandPrimaryMedium: "#D51118",
  brandPrimaryDark: "#5E080B",
  brandSecondaryPure: "#BD8D28",
  brandSecondaryLight: "#EEDAAF",
  brandSecondaryMedium: "#976220",
  brandSecondaryDark: "#6E4017",
  accentPure: "#6339F9",
  accentLight: "#D4C3FE",
  accentMedium: "#3E27B0",
  accentDark: "#2B245D",
  neutralHighPure: "#FFFFFF",
  neutralHighLight: "#F5F5F4",
  neutralHighMedium: "#E4E3E1",
  neutralHighDark: "#B7B2AE",
  neutralLowPure: "#131211",
  neutralLowLight: "#958F88",
  neutralLowMedium: "#645E59",
  neutralLowDark: "#3B3835",
  statusFocusPure: "#009DF2",
  statusFocusLight: "#B3E6F4",
  statusFocusMedium: "#005BAE",
  statusFocusDark: "#143971",
  statusNegativePure: "#C51B62",
  statusNegativeLight: "#FAC7D2",
  statusNegativeMedium: "#9D0261",
  bgDefault: "$neutralLowPure",
  bgSoft: "$neutralLowDark",
  bgBrand: "$brandPrimaryPure",
  bgBrandHover: "$brandPrimaryMedium",
  bgInverse: "$neutralHighPure",
  bgInverseHover: "$neutralHighLight",
  bgContrast: "$brandSecondaryPure",
  bgContrastHover: "$brandSecondaryMedium",
  bgDisabled: "$neutralLowMedium",
  bgNegative: "$statusNegativePure",
  fgDefault: "$neutralLowPure",
  fgSoft: "$neutralLowLight",
  fgBrand: "$brandPrimaryPure",
  fgBrandHover: "$brandPrimaryMedium",
  fgOnBrand: "$neutralHighPure",
  fgInverse: "$neutralHighPure",
  fgInverseHover: "$neutralHighMedium",
  fgOnContrast: "$neutralLowPure",
  fgDisabled: "$neutralHighDark",
  fgNegative: "$statusNegativePure",
  fgFocus: "$statusFocusPure"
};

// src/styles/Themes/Tiger.ts
var Tiger_default = {
  brandPrimaryPure: "#003087",
  brandPrimaryLight: "#6198FF",
  brandPrimaryMedium: "#002466",
  brandPrimaryDark: "#001438",
  brandSecondaryPure: "#ED8B00",
  brandSecondaryLight: "#FFCC84",
  brandSecondaryMedium: "#BD6E00",
  brandSecondaryDark: "#4C2D00",
  accentPure: "#CA8C4E",
  accentLight: "#F2B982",
  accentMedium: "#AD7338",
  accentDark: "#613A13",
  neutralHighPure: "#FFFFFF",
  neutralHighLight: "#F8F9FA",
  neutralHighMedium: "#E1E5E9",
  neutralHighDark: "#BBBCBC",
  neutralLowPure: "#001438",
  neutralLowLight: "#848F9A",
  neutralLowMedium: "#49566E",
  neutralLowDark: "#1F2D47",
  statusFocusPure: "#00B8B8",
  statusFocusLight: "#00F5F5",
  statusFocusMedium: "#007A7A",
  statusFocusDark: "#003333",
  statusNegativePure: "#D12929",
  statusNegativeLight: "#F76E6E",
  statusNegativeMedium: "#B31818",
  statusNegativeDark: "#5A0C0C",
  bgDefault: "$neutralLowPure",
  bgSoft: "$neutralLowDark",
  bgBrand: "$brandPrimaryPure",
  bgBrandHover: "$brandPrimaryMedium",
  bgInverse: "$neutralHighPure",
  bgInverseHover: "$neutralHighLight",
  bgContrast: "$brandSecondaryPure",
  bgContrastHover: "$brandSecondaryMedium",
  bgDisabled: "$neutralLowMedium",
  bgNegative: "$statusNegativePure",
  fgDefault: "$neutralLowPure",
  fgSoft: "$neutralLowLight",
  fgBrand: "$brandPrimaryPure",
  fgBrandHover: "$brandPrimaryMedium",
  fgOnBrand: "$neutralHighPure",
  fgInverse: "$neutralHighPure",
  fgInverseHover: "$neutralHighMedium",
  fgOnContrast: "$neutralLowPure",
  fgDisabled: "$neutralHighDark",
  fgNegative: "$statusNegativePure",
  fgFocus: "$statusFocusPure"
};

// src/styles/Themes/Heineken.ts
var Heineken_default = {
  brandPrimaryPure: "#288154ff",
  brandPrimaryLight: "#5acd8bff",
  brandPrimaryMedium: "#226d35ff",
  brandPrimaryDark: "#205527ff",
  brandSecondaryPure: "#a7e833ff",
  brandSecondaryLight: "#d5f49fff",
  brandSecondaryMedium: "#2ba423ff",
  brandSecondaryDark: "#288154ff",
  accentPure: "#ff2a00",
  accentLight: "#ffbdad",
  accentMedium: "#e12b00",
  accentDark: "#751600",
  neutralHighPure: "#ffffffff",
  neutralHighLight: "#eef0ebff",
  neutralHighMedium: "#d2d7cbff",
  neutralHighDark: "#8d977d",
  neutralLowPure: "#272924ff",
  neutralLowLight: "#6d7561ff",
  neutralLowMedium: "#3f4338ff",
  neutralLowDark: "#1a1c17ff",
  statusFocusPure: "#7b86d1ff",
  statusFocusLight: "#ced2eeff",
  statusFocusMedium: "#414e9fff",
  statusFocusDark: "#293160ff",
  statusNegativePure: "#dd1d60ff",
  statusNegativeLight: "#f5b2caff",
  statusNegativeMedium: "#ac164bff",
  statusNegativeDark: "#680d2dff",
  bgDefault: "$neutralHighPure",
  bgSoft: "$neutralHighLight",
  bgBrand: "$brandPrimaryPure",
  bgBrandHover: "$brandPrimaryMedium",
  bgInverse: "$neutralLowPure",
  bgInverseHover: "$neutralLowMedium",
  bgContrast: "$neutralHighPure",
  bgContrastHover: "$neutralHighLight",
  bgDisabled: "$neutralHighMedium",
  bgNegative: "$statusNegativePure",
  fgDefault: "$neutralLowPure",
  fgSoft: "$neutralLowLight",
  fgBrand: "$brandPrimaryPure",
  fgBrandHover: "$brandPrimaryMedium",
  fgOnBrand: "$neutralHighPure",
  fgInverse: "$neutralHighPure",
  fgInverseHover: "$neutralHighMedium",
  fgOnContrast: "$neutralLowPure",
  fgDisabled: "$neutralHighDark",
  fgNegative: "$statusNegativePure",
  fgFocus: "$statusFocusPure"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Amstel,
  Button,
  ButtonTeste,
  GridCol,
  GridRow,
  Heineken,
  Tiger,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  globalStyles,
  gridGutter,
  keyframes,
  prefix,
  reset,
  styled,
  theme
});
