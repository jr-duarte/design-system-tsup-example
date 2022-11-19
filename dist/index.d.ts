import * as react from 'react';
import react__default, { HTMLAttributeAnchorTarget } from 'react';
import * as Stitches from '@stitches/react';
import * as _stitches_react_types_theme from '@stitches/react/types/theme';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as _stitches_react_types_util from '@stitches/react/types/util';

declare const gridGutter: {
    width: number;
};
declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | react.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | react.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, {
    fonts: {
        base: string;
        highLight: string;
    };
    fontWeights: {
        normal: number;
        bold: number;
        black: number;
    };
    fontStyles: {
        normal: string;
        italic: string;
    };
    letterSpacings: {
        xtight: string;
        tight: string;
        normal: number;
        loose: string;
        xloose: string;
    };
    lineHeights: {
        xloose: number;
        loose: number;
        medium: number;
        tight: number;
        xtight: number;
    };
    fontSizes: {
        xxnano: string;
        xnano: string;
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    borderWidths: {
        none: number;
        hairline: string;
        thin: string;
        thick: string;
        heavy: string;
    };
    radii: {
        none: number;
        small: string;
        medium: string;
        large: string;
        pill: string;
        circle: string;
    };
    shadows: {
        level1X: string;
        level1Y: string;
        level1B: string;
        level1Stack: string;
        level2X: string;
        level2Y: string;
        level2B: string;
        level2Stack: string;
        level3X: string;
        level3Y: string;
        level3B: string;
        level3Stack: string;
        level4X: string;
        level4Y: string;
        level4B: string;
        level4Stack: string;
    };
    aspectRatios: {
        '16x9': string;
        '3x2': string;
        '4x3': string;
        square: string;
        '3x4': string;
        '2x3': string;
        '9x16': string;
    };
    space: {
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    colors: {
        brandPrimaryPure: string;
        brandPrimaryLight: string;
        brandPrimaryMedium: string;
        brandPrimaryDark: string;
        brandSecondaryPure: string;
        brandSecondaryLight: string;
        brandSecondaryMedium: string;
        brandSecondaryDark: string;
        accentPure: string;
        accentLight: string;
        accentMedium: string;
        accentDark: string;
        neutralHighPure: string;
        neutralHighLight: string;
        neutralHighMedium: string;
        neutralHighDark: string;
        neutralLowPure: string;
        neutralLowLight: string;
        neutralLowMedium: string;
        neutralLowDark: string;
        statusFocusPure: string;
        statusFocusLight: string;
        statusFocusMedium: string;
        statusFocusDark: string;
        statusNegativePure: string;
        statusNegativeLight: string;
        statusNegativeMedium: string;
        statusNegativeDark: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    gridCol: (number: number) => {
        flex: string;
        maxWidth: string;
        position: string;
        width: string;
        paddingRight: number;
        paddingLeft: number;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, _stitches_react_types_css_util.CSS<{
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, {
    fonts: {
        base: string;
        highLight: string;
    };
    fontWeights: {
        normal: number;
        bold: number;
        black: number;
    };
    fontStyles: {
        normal: string;
        italic: string;
    };
    letterSpacings: {
        xtight: string;
        tight: string;
        normal: number;
        loose: string;
        xloose: string;
    };
    lineHeights: {
        xloose: number;
        loose: number;
        medium: number;
        tight: number;
        xtight: number;
    };
    fontSizes: {
        xxnano: string;
        xnano: string;
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    borderWidths: {
        none: number;
        hairline: string;
        thin: string;
        thick: string;
        heavy: string;
    };
    radii: {
        none: number;
        small: string;
        medium: string;
        large: string;
        pill: string;
        circle: string;
    };
    shadows: {
        level1X: string;
        level1Y: string;
        level1B: string;
        level1Stack: string;
        level2X: string;
        level2Y: string;
        level2B: string;
        level2Stack: string;
        level3X: string;
        level3Y: string;
        level3B: string;
        level3Stack: string;
        level4X: string;
        level4Y: string;
        level4B: string;
        level4Stack: string;
    };
    aspectRatios: {
        '16x9': string;
        '3x2': string;
        '4x3': string;
        square: string;
        '3x4': string;
        '2x3': string;
        '9x16': string;
    };
    space: {
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    colors: {
        brandPrimaryPure: string;
        brandPrimaryLight: string;
        brandPrimaryMedium: string;
        brandPrimaryDark: string;
        brandSecondaryPure: string;
        brandSecondaryLight: string;
        brandSecondaryMedium: string;
        brandSecondaryDark: string;
        accentPure: string;
        accentLight: string;
        accentMedium: string;
        accentDark: string;
        neutralHighPure: string;
        neutralHighLight: string;
        neutralHighMedium: string;
        neutralHighDark: string;
        neutralLowPure: string;
        neutralLowLight: string;
        neutralLowMedium: string;
        neutralLowDark: string;
        statusFocusPure: string;
        statusFocusLight: string;
        statusFocusMedium: string;
        statusFocusDark: string;
        statusNegativePure: string;
        statusNegativeLight: string;
        statusNegativeMedium: string;
        statusNegativeDark: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    gridCol: (number: number) => {
        flex: string;
        maxWidth: string;
        position: string;
        width: string;
        paddingRight: number;
        paddingLeft: number;
    };
}>>;
declare const css: <Composers extends (string | _stitches_react_types_util.Function | react.JSXElementConstructor<any> | react.ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, {
    fonts: {
        base: string;
        highLight: string;
    };
    fontWeights: {
        normal: number;
        bold: number;
        black: number;
    };
    fontStyles: {
        normal: string;
        italic: string;
    };
    letterSpacings: {
        xtight: string;
        tight: string;
        normal: number;
        loose: string;
        xloose: string;
    };
    lineHeights: {
        xloose: number;
        loose: number;
        medium: number;
        tight: number;
        xtight: number;
    };
    fontSizes: {
        xxnano: string;
        xnano: string;
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    borderWidths: {
        none: number;
        hairline: string;
        thin: string;
        thick: string;
        heavy: string;
    };
    radii: {
        none: number;
        small: string;
        medium: string;
        large: string;
        pill: string;
        circle: string;
    };
    shadows: {
        level1X: string;
        level1Y: string;
        level1B: string;
        level1Stack: string;
        level2X: string;
        level2Y: string;
        level2B: string;
        level2Stack: string;
        level3X: string;
        level3Y: string;
        level3B: string;
        level3Stack: string;
        level4X: string;
        level4Y: string;
        level4B: string;
        level4Stack: string;
    };
    aspectRatios: {
        '16x9': string;
        '3x2': string;
        '4x3': string;
        square: string;
        '3x4': string;
        '2x3': string;
        '9x16': string;
    };
    space: {
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    colors: {
        brandPrimaryPure: string;
        brandPrimaryLight: string;
        brandPrimaryMedium: string;
        brandPrimaryDark: string;
        brandSecondaryPure: string;
        brandSecondaryLight: string;
        brandSecondaryMedium: string;
        brandSecondaryDark: string;
        accentPure: string;
        accentLight: string;
        accentMedium: string;
        accentDark: string;
        neutralHighPure: string;
        neutralHighLight: string;
        neutralHighMedium: string;
        neutralHighDark: string;
        neutralLowPure: string;
        neutralLowLight: string;
        neutralLowMedium: string;
        neutralLowDark: string;
        statusFocusPure: string;
        statusFocusLight: string;
        statusFocusMedium: string;
        statusFocusDark: string;
        statusNegativePure: string;
        statusNegativeLight: string;
        statusNegativeMedium: string;
        statusNegativeDark: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    gridCol: (number: number) => {
        flex: string;
        maxWidth: string;
        position: string;
        width: string;
        paddingRight: number;
        paddingLeft: number;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.JSXElementConstructor<any> | react.ExoticComponent<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, CSS>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{
        lgUp: "(min-width: 992px)";
        lgDown: "(max-width: 991px)";
    }, {
        fonts: {
            base: string;
            highLight: string;
        };
        fontWeights: {
            normal: number;
            bold: number;
            black: number;
        };
        fontStyles: {
            normal: string;
            italic: string;
        };
        letterSpacings: {
            xtight: string;
            tight: string;
            normal: number;
            loose: string;
            xloose: string;
        };
        lineHeights: {
            xloose: number;
            loose: number;
            medium: number;
            tight: number;
            xtight: number;
        };
        fontSizes: {
            xxnano: string;
            xnano: string;
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        borderWidths: {
            none: number;
            hairline: string;
            thin: string;
            thick: string;
            heavy: string;
        };
        radii: {
            none: number;
            small: string;
            medium: string;
            large: string;
            pill: string;
            circle: string;
        };
        shadows: {
            level1X: string;
            level1Y: string;
            level1B: string;
            level1Stack: string;
            level2X: string;
            level2Y: string;
            level2B: string;
            level2Stack: string;
            level3X: string;
            level3Y: string;
            level3B: string;
            level3Stack: string;
            level4X: string;
            level4Y: string;
            level4B: string;
            level4Stack: string;
        };
        aspectRatios: {
            '16x9': string;
            '3x2': string;
            '4x3': string;
            square: string;
            '3x4': string;
            '2x3': string;
            '9x16': string;
        };
        space: {
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        colors: {
            brandPrimaryPure: string;
            brandPrimaryLight: string;
            brandPrimaryMedium: string;
            brandPrimaryDark: string;
            brandSecondaryPure: string;
            brandSecondaryLight: string;
            brandSecondaryMedium: string;
            brandSecondaryDark: string;
            accentPure: string;
            accentLight: string;
            accentMedium: string;
            accentDark: string;
            neutralHighPure: string;
            neutralHighLight: string;
            neutralHighMedium: string;
            neutralHighDark: string;
            neutralLowPure: string;
            neutralLowLight: string;
            neutralLowMedium: string;
            neutralLowDark: string;
            statusFocusPure: string;
            statusFocusLight: string;
            statusFocusMedium: string;
            statusFocusDark: string;
            statusNegativePure: string;
            statusNegativeLight: string;
            statusNegativeMedium: string;
            statusNegativeDark: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        gridCol: (number: number) => {
            flex: string;
            maxWidth: string;
            position: string;
            width: string;
            paddingRight: number;
            paddingLeft: number;
        };
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{
    lgUp: "(min-width: 992px)";
    lgDown: "(max-width: 991px)";
}, {
    fonts: {
        base: string;
        highLight: string;
    };
    fontWeights: {
        normal: number;
        bold: number;
        black: number;
    };
    fontStyles: {
        normal: string;
        italic: string;
    };
    letterSpacings: {
        xtight: string;
        tight: string;
        normal: number;
        loose: string;
        xloose: string;
    };
    lineHeights: {
        xloose: number;
        loose: number;
        medium: number;
        tight: number;
        xtight: number;
    };
    fontSizes: {
        xxnano: string;
        xnano: string;
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    borderWidths: {
        none: number;
        hairline: string;
        thin: string;
        thick: string;
        heavy: string;
    };
    radii: {
        none: number;
        small: string;
        medium: string;
        large: string;
        pill: string;
        circle: string;
    };
    shadows: {
        level1X: string;
        level1Y: string;
        level1B: string;
        level1Stack: string;
        level2X: string;
        level2Y: string;
        level2B: string;
        level2Stack: string;
        level3X: string;
        level3Y: string;
        level3B: string;
        level3Stack: string;
        level4X: string;
        level4Y: string;
        level4B: string;
        level4Stack: string;
    };
    aspectRatios: {
        '16x9': string;
        '3x2': string;
        '4x3': string;
        square: string;
        '3x4': string;
        '2x3': string;
        '9x16': string;
    };
    space: {
        nano: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        giant: string;
        xgiant: string;
        xxgiant: string;
    };
    colors: {
        brandPrimaryPure: string;
        brandPrimaryLight: string;
        brandPrimaryMedium: string;
        brandPrimaryDark: string;
        brandSecondaryPure: string;
        brandSecondaryLight: string;
        brandSecondaryMedium: string;
        brandSecondaryDark: string;
        accentPure: string;
        accentLight: string;
        accentMedium: string;
        accentDark: string;
        neutralHighPure: string;
        neutralHighLight: string;
        neutralHighMedium: string;
        neutralHighDark: string;
        neutralLowPure: string;
        neutralLowLight: string;
        neutralLowMedium: string;
        neutralLowDark: string;
        statusFocusPure: string;
        statusFocusLight: string;
        statusFocusMedium: string;
        statusFocusDark: string;
        statusNegativePure: string;
        statusNegativeLight: string;
        statusNegativeMedium: string;
        statusNegativeDark: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    gridCol: (number: number) => {
        flex: string;
        maxWidth: string;
        position: string;
        width: string;
        paddingRight: number;
        paddingLeft: number;
    };
}>; })[]) => () => string;
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{
        lgUp: "(min-width: 992px)";
        lgDown: "(max-width: 991px)";
    }, {
        fonts: {
            base: string;
            highLight: string;
        };
        fontWeights: {
            normal: number;
            bold: number;
            black: number;
        };
        fontStyles: {
            normal: string;
            italic: string;
        };
        letterSpacings: {
            xtight: string;
            tight: string;
            normal: number;
            loose: string;
            xloose: string;
        };
        lineHeights: {
            xloose: number;
            loose: number;
            medium: number;
            tight: number;
            xtight: number;
        };
        fontSizes: {
            xxnano: string;
            xnano: string;
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        borderWidths: {
            none: number;
            hairline: string;
            thin: string;
            thick: string;
            heavy: string;
        };
        radii: {
            none: number;
            small: string;
            medium: string;
            large: string;
            pill: string;
            circle: string;
        };
        shadows: {
            level1X: string;
            level1Y: string;
            level1B: string;
            level1Stack: string;
            level2X: string;
            level2Y: string;
            level2B: string;
            level2Stack: string;
            level3X: string;
            level3Y: string;
            level3B: string;
            level3Stack: string;
            level4X: string;
            level4Y: string;
            level4B: string;
            level4Stack: string;
        };
        aspectRatios: {
            '16x9': string;
            '3x2': string;
            '4x3': string;
            square: string;
            '3x4': string;
            '2x3': string;
            '9x16': string;
        };
        space: {
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        colors: {
            brandPrimaryPure: string;
            brandPrimaryLight: string;
            brandPrimaryMedium: string;
            brandPrimaryDark: string;
            brandSecondaryPure: string;
            brandSecondaryLight: string;
            brandSecondaryMedium: string;
            brandSecondaryDark: string;
            accentPure: string;
            accentLight: string;
            accentMedium: string;
            accentDark: string;
            neutralHighPure: string;
            neutralHighLight: string;
            neutralHighMedium: string;
            neutralHighDark: string;
            neutralLowPure: string;
            neutralLowLight: string;
            neutralLowMedium: string;
            neutralLowDark: string;
            statusFocusPure: string;
            statusFocusLight: string;
            statusFocusMedium: string;
            statusFocusDark: string;
            statusNegativePure: string;
            statusNegativeLight: string;
            statusNegativeMedium: string;
            statusNegativeDark: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        gridCol: (number: number) => {
            flex: string;
            maxWidth: string;
            position: string;
            width: string;
            paddingRight: number;
            paddingLeft: number;
        };
    }>;
}) => {
    (): string;
    name: string;
};
declare const getCssText: () => string;
declare const theme: string & {
    className: string;
    selector: string;
} & {
    fonts: {
        base: _stitches_react_types_theme.Token<"base", string, "fonts", "duarte-design-system">;
        highLight: _stitches_react_types_theme.Token<"highLight", string, "fonts", "duarte-design-system">;
    };
    fontWeights: {
        normal: _stitches_react_types_theme.Token<"normal", string, "fontWeights", "duarte-design-system">;
        bold: _stitches_react_types_theme.Token<"bold", string, "fontWeights", "duarte-design-system">;
        black: _stitches_react_types_theme.Token<"black", string, "fontWeights", "duarte-design-system">;
    };
    fontStyles: {
        normal: _stitches_react_types_theme.Token<"normal", string, "fontStyles", "duarte-design-system">;
        italic: _stitches_react_types_theme.Token<"italic", string, "fontStyles", "duarte-design-system">;
    };
    letterSpacings: {
        xtight: _stitches_react_types_theme.Token<"xtight", string, "letterSpacings", "duarte-design-system">;
        tight: _stitches_react_types_theme.Token<"tight", string, "letterSpacings", "duarte-design-system">;
        normal: _stitches_react_types_theme.Token<"normal", string, "letterSpacings", "duarte-design-system">;
        loose: _stitches_react_types_theme.Token<"loose", string, "letterSpacings", "duarte-design-system">;
        xloose: _stitches_react_types_theme.Token<"xloose", string, "letterSpacings", "duarte-design-system">;
    };
    lineHeights: {
        xloose: _stitches_react_types_theme.Token<"xloose", string, "lineHeights", "duarte-design-system">;
        loose: _stitches_react_types_theme.Token<"loose", string, "lineHeights", "duarte-design-system">;
        medium: _stitches_react_types_theme.Token<"medium", string, "lineHeights", "duarte-design-system">;
        tight: _stitches_react_types_theme.Token<"tight", string, "lineHeights", "duarte-design-system">;
        xtight: _stitches_react_types_theme.Token<"xtight", string, "lineHeights", "duarte-design-system">;
    };
    fontSizes: {
        xxnano: _stitches_react_types_theme.Token<"xxnano", string, "fontSizes", "duarte-design-system">;
        xnano: _stitches_react_types_theme.Token<"xnano", string, "fontSizes", "duarte-design-system">;
        nano: _stitches_react_types_theme.Token<"nano", string, "fontSizes", "duarte-design-system">;
        xxsmall: _stitches_react_types_theme.Token<"xxsmall", string, "fontSizes", "duarte-design-system">;
        xsmall: _stitches_react_types_theme.Token<"xsmall", string, "fontSizes", "duarte-design-system">;
        small: _stitches_react_types_theme.Token<"small", string, "fontSizes", "duarte-design-system">;
        medium: _stitches_react_types_theme.Token<"medium", string, "fontSizes", "duarte-design-system">;
        large: _stitches_react_types_theme.Token<"large", string, "fontSizes", "duarte-design-system">;
        xlarge: _stitches_react_types_theme.Token<"xlarge", string, "fontSizes", "duarte-design-system">;
        xxlarge: _stitches_react_types_theme.Token<"xxlarge", string, "fontSizes", "duarte-design-system">;
        huge: _stitches_react_types_theme.Token<"huge", string, "fontSizes", "duarte-design-system">;
        xhuge: _stitches_react_types_theme.Token<"xhuge", string, "fontSizes", "duarte-design-system">;
        xxhuge: _stitches_react_types_theme.Token<"xxhuge", string, "fontSizes", "duarte-design-system">;
        giant: _stitches_react_types_theme.Token<"giant", string, "fontSizes", "duarte-design-system">;
        xgiant: _stitches_react_types_theme.Token<"xgiant", string, "fontSizes", "duarte-design-system">;
        xxgiant: _stitches_react_types_theme.Token<"xxgiant", string, "fontSizes", "duarte-design-system">;
    };
    borderWidths: {
        none: _stitches_react_types_theme.Token<"none", string, "borderWidths", "duarte-design-system">;
        hairline: _stitches_react_types_theme.Token<"hairline", string, "borderWidths", "duarte-design-system">;
        thin: _stitches_react_types_theme.Token<"thin", string, "borderWidths", "duarte-design-system">;
        thick: _stitches_react_types_theme.Token<"thick", string, "borderWidths", "duarte-design-system">;
        heavy: _stitches_react_types_theme.Token<"heavy", string, "borderWidths", "duarte-design-system">;
    };
    radii: {
        none: _stitches_react_types_theme.Token<"none", string, "radii", "duarte-design-system">;
        small: _stitches_react_types_theme.Token<"small", string, "radii", "duarte-design-system">;
        medium: _stitches_react_types_theme.Token<"medium", string, "radii", "duarte-design-system">;
        large: _stitches_react_types_theme.Token<"large", string, "radii", "duarte-design-system">;
        pill: _stitches_react_types_theme.Token<"pill", string, "radii", "duarte-design-system">;
        circle: _stitches_react_types_theme.Token<"circle", string, "radii", "duarte-design-system">;
    };
    shadows: {
        level1X: _stitches_react_types_theme.Token<"level1X", string, "shadows", "duarte-design-system">;
        level1Y: _stitches_react_types_theme.Token<"level1Y", string, "shadows", "duarte-design-system">;
        level1B: _stitches_react_types_theme.Token<"level1B", string, "shadows", "duarte-design-system">;
        level1Stack: _stitches_react_types_theme.Token<"level1Stack", string, "shadows", "duarte-design-system">;
        level2X: _stitches_react_types_theme.Token<"level2X", string, "shadows", "duarte-design-system">;
        level2Y: _stitches_react_types_theme.Token<"level2Y", string, "shadows", "duarte-design-system">;
        level2B: _stitches_react_types_theme.Token<"level2B", string, "shadows", "duarte-design-system">;
        level2Stack: _stitches_react_types_theme.Token<"level2Stack", string, "shadows", "duarte-design-system">;
        level3X: _stitches_react_types_theme.Token<"level3X", string, "shadows", "duarte-design-system">;
        level3Y: _stitches_react_types_theme.Token<"level3Y", string, "shadows", "duarte-design-system">;
        level3B: _stitches_react_types_theme.Token<"level3B", string, "shadows", "duarte-design-system">;
        level3Stack: _stitches_react_types_theme.Token<"level3Stack", string, "shadows", "duarte-design-system">;
        level4X: _stitches_react_types_theme.Token<"level4X", string, "shadows", "duarte-design-system">;
        level4Y: _stitches_react_types_theme.Token<"level4Y", string, "shadows", "duarte-design-system">;
        level4B: _stitches_react_types_theme.Token<"level4B", string, "shadows", "duarte-design-system">;
        level4Stack: _stitches_react_types_theme.Token<"level4Stack", string, "shadows", "duarte-design-system">;
    };
    aspectRatios: {
        '16x9': _stitches_react_types_theme.Token<"16x9", string, "aspectRatios", "duarte-design-system">;
        '3x2': _stitches_react_types_theme.Token<"3x2", string, "aspectRatios", "duarte-design-system">;
        '4x3': _stitches_react_types_theme.Token<"4x3", string, "aspectRatios", "duarte-design-system">;
        square: _stitches_react_types_theme.Token<"square", string, "aspectRatios", "duarte-design-system">;
        '3x4': _stitches_react_types_theme.Token<"3x4", string, "aspectRatios", "duarte-design-system">;
        '2x3': _stitches_react_types_theme.Token<"2x3", string, "aspectRatios", "duarte-design-system">;
        '9x16': _stitches_react_types_theme.Token<"9x16", string, "aspectRatios", "duarte-design-system">;
    };
    space: {
        nano: _stitches_react_types_theme.Token<"nano", string, "space", "duarte-design-system">;
        xxsmall: _stitches_react_types_theme.Token<"xxsmall", string, "space", "duarte-design-system">;
        xsmall: _stitches_react_types_theme.Token<"xsmall", string, "space", "duarte-design-system">;
        small: _stitches_react_types_theme.Token<"small", string, "space", "duarte-design-system">;
        medium: _stitches_react_types_theme.Token<"medium", string, "space", "duarte-design-system">;
        large: _stitches_react_types_theme.Token<"large", string, "space", "duarte-design-system">;
        xlarge: _stitches_react_types_theme.Token<"xlarge", string, "space", "duarte-design-system">;
        xxlarge: _stitches_react_types_theme.Token<"xxlarge", string, "space", "duarte-design-system">;
        huge: _stitches_react_types_theme.Token<"huge", string, "space", "duarte-design-system">;
        xhuge: _stitches_react_types_theme.Token<"xhuge", string, "space", "duarte-design-system">;
        xxhuge: _stitches_react_types_theme.Token<"xxhuge", string, "space", "duarte-design-system">;
        giant: _stitches_react_types_theme.Token<"giant", string, "space", "duarte-design-system">;
        xgiant: _stitches_react_types_theme.Token<"xgiant", string, "space", "duarte-design-system">;
        xxgiant: _stitches_react_types_theme.Token<"xxgiant", string, "space", "duarte-design-system">;
    };
    colors: {
        brandPrimaryPure: _stitches_react_types_theme.Token<"brandPrimaryPure", string, "colors", "duarte-design-system">;
        brandPrimaryLight: _stitches_react_types_theme.Token<"brandPrimaryLight", string, "colors", "duarte-design-system">;
        brandPrimaryMedium: _stitches_react_types_theme.Token<"brandPrimaryMedium", string, "colors", "duarte-design-system">;
        brandPrimaryDark: _stitches_react_types_theme.Token<"brandPrimaryDark", string, "colors", "duarte-design-system">;
        brandSecondaryPure: _stitches_react_types_theme.Token<"brandSecondaryPure", string, "colors", "duarte-design-system">;
        brandSecondaryLight: _stitches_react_types_theme.Token<"brandSecondaryLight", string, "colors", "duarte-design-system">;
        brandSecondaryMedium: _stitches_react_types_theme.Token<"brandSecondaryMedium", string, "colors", "duarte-design-system">;
        brandSecondaryDark: _stitches_react_types_theme.Token<"brandSecondaryDark", string, "colors", "duarte-design-system">;
        accentPure: _stitches_react_types_theme.Token<"accentPure", string, "colors", "duarte-design-system">;
        accentLight: _stitches_react_types_theme.Token<"accentLight", string, "colors", "duarte-design-system">;
        accentMedium: _stitches_react_types_theme.Token<"accentMedium", string, "colors", "duarte-design-system">;
        accentDark: _stitches_react_types_theme.Token<"accentDark", string, "colors", "duarte-design-system">;
        neutralHighPure: _stitches_react_types_theme.Token<"neutralHighPure", string, "colors", "duarte-design-system">;
        neutralHighLight: _stitches_react_types_theme.Token<"neutralHighLight", string, "colors", "duarte-design-system">;
        neutralHighMedium: _stitches_react_types_theme.Token<"neutralHighMedium", string, "colors", "duarte-design-system">;
        neutralHighDark: _stitches_react_types_theme.Token<"neutralHighDark", string, "colors", "duarte-design-system">;
        neutralLowPure: _stitches_react_types_theme.Token<"neutralLowPure", string, "colors", "duarte-design-system">;
        neutralLowLight: _stitches_react_types_theme.Token<"neutralLowLight", string, "colors", "duarte-design-system">;
        neutralLowMedium: _stitches_react_types_theme.Token<"neutralLowMedium", string, "colors", "duarte-design-system">;
        neutralLowDark: _stitches_react_types_theme.Token<"neutralLowDark", string, "colors", "duarte-design-system">;
        statusFocusPure: _stitches_react_types_theme.Token<"statusFocusPure", string, "colors", "duarte-design-system">;
        statusFocusLight: _stitches_react_types_theme.Token<"statusFocusLight", string, "colors", "duarte-design-system">;
        statusFocusMedium: _stitches_react_types_theme.Token<"statusFocusMedium", string, "colors", "duarte-design-system">;
        statusFocusDark: _stitches_react_types_theme.Token<"statusFocusDark", string, "colors", "duarte-design-system">;
        statusNegativePure: _stitches_react_types_theme.Token<"statusNegativePure", string, "colors", "duarte-design-system">;
        statusNegativeLight: _stitches_react_types_theme.Token<"statusNegativeLight", string, "colors", "duarte-design-system">;
        statusNegativeMedium: _stitches_react_types_theme.Token<"statusNegativeMedium", string, "colors", "duarte-design-system">;
        statusNegativeDark: _stitches_react_types_theme.Token<"statusNegativeDark", string, "colors", "duarte-design-system">;
    };
};
declare const createTheme: <Argument0 extends string | ({
    fonts?: {
        base?: string | number | boolean | undefined;
        highLight?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        normal?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fontStyles?: {
        normal?: string | number | boolean | undefined;
        italic?: string | number | boolean | undefined;
    } | undefined;
    letterSpacings?: {
        xtight?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        xloose?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        xloose?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        xtight?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        xxnano?: string | number | boolean | undefined;
        xnano?: string | number | boolean | undefined;
        nano?: string | number | boolean | undefined;
        xxsmall?: string | number | boolean | undefined;
        xsmall?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        xlarge?: string | number | boolean | undefined;
        xxlarge?: string | number | boolean | undefined;
        huge?: string | number | boolean | undefined;
        xhuge?: string | number | boolean | undefined;
        xxhuge?: string | number | boolean | undefined;
        giant?: string | number | boolean | undefined;
        xgiant?: string | number | boolean | undefined;
        xxgiant?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        none?: string | number | boolean | undefined;
        hairline?: string | number | boolean | undefined;
        thin?: string | number | boolean | undefined;
        thick?: string | number | boolean | undefined;
        heavy?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        none?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        pill?: string | number | boolean | undefined;
        circle?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        level1X?: string | number | boolean | undefined;
        level1Y?: string | number | boolean | undefined;
        level1B?: string | number | boolean | undefined;
        level1Stack?: string | number | boolean | undefined;
        level2X?: string | number | boolean | undefined;
        level2Y?: string | number | boolean | undefined;
        level2B?: string | number | boolean | undefined;
        level2Stack?: string | number | boolean | undefined;
        level3X?: string | number | boolean | undefined;
        level3Y?: string | number | boolean | undefined;
        level3B?: string | number | boolean | undefined;
        level3Stack?: string | number | boolean | undefined;
        level4X?: string | number | boolean | undefined;
        level4Y?: string | number | boolean | undefined;
        level4B?: string | number | boolean | undefined;
        level4Stack?: string | number | boolean | undefined;
    } | undefined;
    aspectRatios?: {
        '16x9'?: string | number | boolean | undefined;
        '3x2'?: string | number | boolean | undefined;
        '4x3'?: string | number | boolean | undefined;
        square?: string | number | boolean | undefined;
        '3x4'?: string | number | boolean | undefined;
        '2x3'?: string | number | boolean | undefined;
        '9x16'?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        nano?: string | number | boolean | undefined;
        xxsmall?: string | number | boolean | undefined;
        xsmall?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        xlarge?: string | number | boolean | undefined;
        xxlarge?: string | number | boolean | undefined;
        huge?: string | number | boolean | undefined;
        xhuge?: string | number | boolean | undefined;
        xxhuge?: string | number | boolean | undefined;
        giant?: string | number | boolean | undefined;
        xgiant?: string | number | boolean | undefined;
        xxgiant?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        brandPrimaryPure?: string | number | boolean | undefined;
        brandPrimaryLight?: string | number | boolean | undefined;
        brandPrimaryMedium?: string | number | boolean | undefined;
        brandPrimaryDark?: string | number | boolean | undefined;
        brandSecondaryPure?: string | number | boolean | undefined;
        brandSecondaryLight?: string | number | boolean | undefined;
        brandSecondaryMedium?: string | number | boolean | undefined;
        brandSecondaryDark?: string | number | boolean | undefined;
        accentPure?: string | number | boolean | undefined;
        accentLight?: string | number | boolean | undefined;
        accentMedium?: string | number | boolean | undefined;
        accentDark?: string | number | boolean | undefined;
        neutralHighPure?: string | number | boolean | undefined;
        neutralHighLight?: string | number | boolean | undefined;
        neutralHighMedium?: string | number | boolean | undefined;
        neutralHighDark?: string | number | boolean | undefined;
        neutralLowPure?: string | number | boolean | undefined;
        neutralLowLight?: string | number | boolean | undefined;
        neutralLowMedium?: string | number | boolean | undefined;
        neutralLowDark?: string | number | boolean | undefined;
        statusFocusPure?: string | number | boolean | undefined;
        statusFocusLight?: string | number | boolean | undefined;
        statusFocusMedium?: string | number | boolean | undefined;
        statusFocusDark?: string | number | boolean | undefined;
        statusNegativePure?: string | number | boolean | undefined;
        statusNegativeLight?: string | number | boolean | undefined;
        statusNegativeMedium?: string | number | boolean | undefined;
        statusNegativeDark?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    fonts?: {
        base?: string | number | boolean | undefined;
        highLight?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        normal?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
    fontStyles?: {
        normal?: string | number | boolean | undefined;
        italic?: string | number | boolean | undefined;
    } | undefined;
    letterSpacings?: {
        xtight?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        xloose?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        xloose?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        xtight?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        xxnano?: string | number | boolean | undefined;
        xnano?: string | number | boolean | undefined;
        nano?: string | number | boolean | undefined;
        xxsmall?: string | number | boolean | undefined;
        xsmall?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        xlarge?: string | number | boolean | undefined;
        xxlarge?: string | number | boolean | undefined;
        huge?: string | number | boolean | undefined;
        xhuge?: string | number | boolean | undefined;
        xxhuge?: string | number | boolean | undefined;
        giant?: string | number | boolean | undefined;
        xgiant?: string | number | boolean | undefined;
        xxgiant?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        none?: string | number | boolean | undefined;
        hairline?: string | number | boolean | undefined;
        thin?: string | number | boolean | undefined;
        thick?: string | number | boolean | undefined;
        heavy?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        none?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        pill?: string | number | boolean | undefined;
        circle?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        level1X?: string | number | boolean | undefined;
        level1Y?: string | number | boolean | undefined;
        level1B?: string | number | boolean | undefined;
        level1Stack?: string | number | boolean | undefined;
        level2X?: string | number | boolean | undefined;
        level2Y?: string | number | boolean | undefined;
        level2B?: string | number | boolean | undefined;
        level2Stack?: string | number | boolean | undefined;
        level3X?: string | number | boolean | undefined;
        level3Y?: string | number | boolean | undefined;
        level3B?: string | number | boolean | undefined;
        level3Stack?: string | number | boolean | undefined;
        level4X?: string | number | boolean | undefined;
        level4Y?: string | number | boolean | undefined;
        level4B?: string | number | boolean | undefined;
        level4Stack?: string | number | boolean | undefined;
    } | undefined;
    aspectRatios?: {
        '16x9'?: string | number | boolean | undefined;
        '3x2'?: string | number | boolean | undefined;
        '4x3'?: string | number | boolean | undefined;
        square?: string | number | boolean | undefined;
        '3x4'?: string | number | boolean | undefined;
        '2x3'?: string | number | boolean | undefined;
        '9x16'?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        nano?: string | number | boolean | undefined;
        xxsmall?: string | number | boolean | undefined;
        xsmall?: string | number | boolean | undefined;
        small?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        large?: string | number | boolean | undefined;
        xlarge?: string | number | boolean | undefined;
        xxlarge?: string | number | boolean | undefined;
        huge?: string | number | boolean | undefined;
        xhuge?: string | number | boolean | undefined;
        xxhuge?: string | number | boolean | undefined;
        giant?: string | number | boolean | undefined;
        xgiant?: string | number | boolean | undefined;
        xxgiant?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        brandPrimaryPure?: string | number | boolean | undefined;
        brandPrimaryLight?: string | number | boolean | undefined;
        brandPrimaryMedium?: string | number | boolean | undefined;
        brandPrimaryDark?: string | number | boolean | undefined;
        brandSecondaryPure?: string | number | boolean | undefined;
        brandSecondaryLight?: string | number | boolean | undefined;
        brandSecondaryMedium?: string | number | boolean | undefined;
        brandSecondaryDark?: string | number | boolean | undefined;
        accentPure?: string | number | boolean | undefined;
        accentLight?: string | number | boolean | undefined;
        accentMedium?: string | number | boolean | undefined;
        accentDark?: string | number | boolean | undefined;
        neutralHighPure?: string | number | boolean | undefined;
        neutralHighLight?: string | number | boolean | undefined;
        neutralHighMedium?: string | number | boolean | undefined;
        neutralHighDark?: string | number | boolean | undefined;
        neutralLowPure?: string | number | boolean | undefined;
        neutralLowLight?: string | number | boolean | undefined;
        neutralLowMedium?: string | number | boolean | undefined;
        neutralLowDark?: string | number | boolean | undefined;
        statusFocusPure?: string | number | boolean | undefined;
        statusFocusLight?: string | number | boolean | undefined;
        statusFocusMedium?: string | number | boolean | undefined;
        statusFocusDark?: string | number | boolean | undefined;
        statusNegativePure?: string | number | boolean | undefined;
        statusNegativeLight?: string | number | boolean | undefined;
        statusNegativeMedium?: string | number | boolean | undefined;
        statusNegativeDark?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? _stitches_react_types_stitches.ThemeTokens<Argument1, "duarte-design-system"> : _stitches_react_types_stitches.ThemeTokens<Argument0, "duarte-design-system">);
declare const config: {
    prefix: "duarte-design-system";
    media: {
        lgUp: "(min-width: 992px)";
        lgDown: "(max-width: 991px)";
    };
    theme: {
        fonts: {
            base: string;
            highLight: string;
        };
        fontWeights: {
            normal: number;
            bold: number;
            black: number;
        };
        fontStyles: {
            normal: string;
            italic: string;
        };
        letterSpacings: {
            xtight: string;
            tight: string;
            normal: number;
            loose: string;
            xloose: string;
        };
        lineHeights: {
            xloose: number;
            loose: number;
            medium: number;
            tight: number;
            xtight: number;
        };
        fontSizes: {
            xxnano: string;
            xnano: string;
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        borderWidths: {
            none: number;
            hairline: string;
            thin: string;
            thick: string;
            heavy: string;
        };
        radii: {
            none: number;
            small: string;
            medium: string;
            large: string;
            pill: string;
            circle: string;
        };
        shadows: {
            level1X: string;
            level1Y: string;
            level1B: string;
            level1Stack: string;
            level2X: string;
            level2Y: string;
            level2B: string;
            level2Stack: string;
            level3X: string;
            level3Y: string;
            level3B: string;
            level3Stack: string;
            level4X: string;
            level4Y: string;
            level4B: string;
            level4Stack: string;
        };
        aspectRatios: {
            '16x9': string;
            '3x2': string;
            '4x3': string;
            square: string;
            '3x4': string;
            '2x3': string;
            '9x16': string;
        };
        space: {
            nano: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            giant: string;
            xgiant: string;
            xxgiant: string;
        };
        colors: {
            brandPrimaryPure: string;
            brandPrimaryLight: string;
            brandPrimaryMedium: string;
            brandPrimaryDark: string;
            brandSecondaryPure: string;
            brandSecondaryLight: string;
            brandSecondaryMedium: string;
            brandSecondaryDark: string;
            accentPure: string;
            accentLight: string;
            accentMedium: string;
            accentDark: string;
            neutralHighPure: string;
            neutralHighLight: string;
            neutralHighMedium: string;
            neutralHighDark: string;
            neutralLowPure: string;
            neutralLowLight: string;
            neutralLowMedium: string;
            neutralLowDark: string;
            statusFocusPure: string;
            statusFocusLight: string;
            statusFocusMedium: string;
            statusFocusDark: string;
            statusNegativePure: string;
            statusNegativeLight: string;
            statusNegativeMedium: string;
            statusNegativeDark: string;
        };
    };
    themeMap: _stitches_react_types_config.DefaultThemeMap;
    utils: {
        gridCol: (number: number) => {
            flex: string;
            maxWidth: string;
            position: string;
            width: string;
            paddingRight: number;
            paddingLeft: number;
        };
    };
};
declare const prefix: "duarte-design-system";
declare const reset: () => void;
declare const globalStyles: () => string;

type ButtonComponentProps$1 = {
    tag?: 'button' | 'a';
    disabled?: boolean;
    children: string;
    onContrast?: boolean;
    border?: boolean;
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    css?: Stitches.CSS<typeof config>;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    iconSize?: number;
    iconEnd?: boolean;
    link?: boolean;
    fullWidth?: boolean;
    borderRadius?: keyof typeof config.theme.radii;
};
declare function Button({ disabled, tag, onContrast, border, children, type, css, onClick, fullWidth, borderRadius, ...props }: ButtonComponentProps$1): JSX.Element;

type ButtonComponentProps = {
    children: string;
};
declare function ButtonTeste({ children }: ButtonComponentProps): JSX.Element;

type GridColProps = {
    col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    colLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children?: react__default.ReactNode;
    css?: Stitches.CSS;
};
declare const GridCol: ({ col, colLg, children, css, ...props }: GridColProps) => JSX.Element;

type GridRowComponentProps = {
    children: react__default.ReactNode;
    css?: Stitches.CSS;
};
declare function GridRow({ children, css, ...props }: GridRowComponentProps): JSX.Element;

declare const _default$2: {
    brandPrimaryPure: string;
    brandPrimaryLight: string;
    brandPrimaryMedium: string;
    brandPrimaryDark: string;
    brandSecondaryPure: string;
    brandSecondaryLight: string;
    brandSecondaryMedium: string;
    brandSecondaryDark: string;
    accentPure: string;
    accentLight: string;
    accentMedium: string;
    accentDark: string;
    neutralHighPure: string;
    neutralHighLight: string;
    neutralHighMedium: string;
    neutralHighDark: string;
    neutralLowPure: string;
    neutralLowLight: string;
    neutralLowMedium: string;
    neutralLowDark: string;
    statusFocusPure: string;
    statusFocusLight: string;
    statusFocusMedium: string;
    statusFocusDark: string;
    statusNegativePure: string;
    statusNegativeLight: string;
    statusNegativeMedium: string;
    bgDefault: string;
    bgSoft: string;
    bgBrand: string;
    bgBrandHover: string;
    bgInverse: string;
    bgInverseHover: string;
    bgContrast: string;
    bgContrastHover: string;
    bgDisabled: string;
    bgNegative: string;
    fgDefault: string;
    fgSoft: string;
    fgBrand: string;
    fgBrandHover: string;
    fgOnBrand: string;
    fgInverse: string;
    fgInverseHover: string;
    fgOnContrast: string;
    fgDisabled: string;
    fgNegative: string;
    fgFocus: string;
};

declare const _default$1: {
    brandPrimaryPure: string;
    brandPrimaryLight: string;
    brandPrimaryMedium: string;
    brandPrimaryDark: string;
    brandSecondaryPure: string;
    brandSecondaryLight: string;
    brandSecondaryMedium: string;
    brandSecondaryDark: string;
    accentPure: string;
    accentLight: string;
    accentMedium: string;
    accentDark: string;
    neutralHighPure: string;
    neutralHighLight: string;
    neutralHighMedium: string;
    neutralHighDark: string;
    neutralLowPure: string;
    neutralLowLight: string;
    neutralLowMedium: string;
    neutralLowDark: string;
    statusFocusPure: string;
    statusFocusLight: string;
    statusFocusMedium: string;
    statusFocusDark: string;
    statusNegativePure: string;
    statusNegativeLight: string;
    statusNegativeMedium: string;
    statusNegativeDark: string;
    bgDefault: string;
    bgSoft: string;
    bgBrand: string;
    bgBrandHover: string;
    bgInverse: string;
    bgInverseHover: string;
    bgContrast: string;
    bgContrastHover: string;
    bgDisabled: string;
    bgNegative: string;
    fgDefault: string;
    fgSoft: string;
    fgBrand: string;
    fgBrandHover: string;
    fgOnBrand: string;
    fgInverse: string;
    fgInverseHover: string;
    fgOnContrast: string;
    fgDisabled: string;
    fgNegative: string;
    fgFocus: string;
};

declare const _default: {
    brandPrimaryPure: string;
    brandPrimaryLight: string;
    brandPrimaryMedium: string;
    brandPrimaryDark: string;
    brandSecondaryPure: string;
    brandSecondaryLight: string;
    brandSecondaryMedium: string;
    brandSecondaryDark: string;
    accentPure: string;
    accentLight: string;
    accentMedium: string;
    accentDark: string;
    neutralHighPure: string;
    neutralHighLight: string;
    neutralHighMedium: string;
    neutralHighDark: string;
    neutralLowPure: string;
    neutralLowLight: string;
    neutralLowMedium: string;
    neutralLowDark: string;
    statusFocusPure: string;
    statusFocusLight: string;
    statusFocusMedium: string;
    statusFocusDark: string;
    statusNegativePure: string;
    statusNegativeLight: string;
    statusNegativeMedium: string;
    statusNegativeDark: string;
    bgDefault: string;
    bgSoft: string;
    bgBrand: string;
    bgBrandHover: string;
    bgInverse: string;
    bgInverseHover: string;
    bgContrast: string;
    bgContrastHover: string;
    bgDisabled: string;
    bgNegative: string;
    fgDefault: string;
    fgSoft: string;
    fgBrand: string;
    fgBrandHover: string;
    fgOnBrand: string;
    fgInverse: string;
    fgInverseHover: string;
    fgOnContrast: string;
    fgDisabled: string;
    fgNegative: string;
    fgFocus: string;
};

export { _default$2 as Amstel, Button, ButtonTeste, GridCol, GridRow, _default as Heineken, _default$1 as Tiger, config, createTheme, css, getCssText, globalCss, globalStyles, gridGutter, keyframes, prefix, reset, styled, theme };
