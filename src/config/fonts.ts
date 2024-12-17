import localFont from "next/font/local";

export const rubik = localFont({
  src: [
    {
      path: "../app/fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
