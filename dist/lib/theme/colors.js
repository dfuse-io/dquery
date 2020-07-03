export const hues = {
    primary: 209,
    secondary: 267
};
export const colors = {
    primary: `hsl(${hues.primary}, 32%, 31%)`,
    secondary: `hsl(${hues.secondary}, 66%, 30%)`,
    secondaryHighlight: `hsl(${hues.secondary}, 66%, 45%)`,
    textColor: "hsl(370, 10%, 20%)",
    // @TODO Organize/name this better (peut être deleter si pas utilisé)
    lightGreen: "hsl(150, 40%, 90%)",
    green: "#34cfbd",
    green2: "hsl(150, 40%, 40%)",
    green3: "hsl(150, 40%, 30%)",
    green4: "hsl(150, 40%, 20%)",
    // @TODO Organize/name this better (peut être deleter si pas utilisé)
    lightGray: "hsl(370, 5%, 97%)",
    gray: "hsl(370, 5%, 95%)",
    gray1: "hsl(370, 5%, 85%)",
    gray2: "hsl(370, 5%, 75%)",
    gray3: "hsl(370, 5%, 65%)",
    gray4: "hsl(370, 0%, 55%)",
    gray5: "hsl(370, 0%, 45%)",
    gray6: "hsl(370, 0%, 35%)",
    gray7: "hsl(370, 0%, 25%)",
    white: "#ffffff",
    gray100: "#f8f8fa",
    gray200: "#e1e1e4",
    gray300: "#c9cacf",
    gray400: "#b2b2b9",
    gray500: "#9a9ba3",
    gray600: "#7a7c84",
    gray700: "#5a5d65",
    gray800: "#3a3e47",
    gray900: "#1a1f28",
    black: "#000",
    // Primary
    primary100: "rgba(60, 207, 180, 0.1)",
    primary800: "#61d8c8",
    primary1000: "#34cfbd",
    // Secondary
    secondary1000: "#ff4660",
    secondary1200: "#860b1c",
    // Ternary
    ternary50: "#fafbfc",
    ternary100: "#f7f8f8",
    ternary200: "#ebeeef",
    ternary300: "#d8e1e9",
    ternary400: "#bbc7d3",
    ternary500: "#9fadbc",
    ternary600: "#8294a6",
    ternary700: "#657a90",
    ternary800: "#49617a",
    ternary900: "#2c4863",
    ternary950: "#203d5a",
    ternary1000: "#0f2e4d",
    ternary1100: "#0c243b",
    ternary1200: "#081929",
    link: "hsl(234, 71%, 65%)",
    linkVisited: "hsl(234, 71%, 65%)",
    linkDark: "#3a3e47",
    linkHover: "hsl(234, 60%, 65%)"
};
export const colorStyleValue = (color) => {
    const themeColor = colors[color];
    if (themeColor !== undefined)
        return themeColor;
    return color;
};
