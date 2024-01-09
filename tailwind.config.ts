import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "pylons-red": {
          default: "#6f263d",
          "50": "#fbf4f7",
          "100": "#f9eaf2",
          "200": "#f5d5e4",
          "300": "#edb4ce",
          "400": "#e185ad",
          "500": "#d4608f",
          "600": "#c1416f",
          "700": "#a63057",
          "800": "#8a2a49",
          "900": "#6f263d",
          "950": "#451222",
        },
        "pylons-blue": {
          default: "#041e42",
          "50": "#ebf9ff",
          "100": "#d1f2ff",
          "200": "#aee8ff",
          "300": "#76ddff",
          "400": "#35c7ff",
          "500": "#07a5ff",
          "600": "#007fff",
          "700": "#0065ff",
          "800": "#0054d7",
          "900": "#004ca8",
          "950": "#041e42",
        },
      },
    },
  },
};
