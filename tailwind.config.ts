import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                tyellow: {
                    "50": "#fefce8",
                    "100": "#fffac2",
                    "200": "#fff189",
                    "300": "#ffdd2d",
                    "400": "#ffdd2d",
                    "500": "#ffdd2d",
                    "600": "#ffdd2d",
                    "700": "#a36205",
                    "800": "#864d0d",
                    "900": "#723f11",
                    "950": "#432005",
                },
            },
        },
    },
};
