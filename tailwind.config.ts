import { PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";
import { sub } from "framer-motion/client";

function addVariableForColors({addBase,theme}:PluginAPI) {
  const allColors = theme('colors',{}) ||{}
  const newWars: Record<string, string> = {};
  Object.entries(allColors).forEach(([key,value]) => {
   if(typeof value === 'string'){
    newWars['--${key}']= value;
   }
    else if(typeof value ==='object' && value !== null){
      Object.entries(value).forEach(([subKey, subValue]) =>{
        if(typeof subValue === "string"){
          newWars[`--${key}-${subKey}`]= subValue;
        }
      });
    }
  });
}





const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      
      },
      animation: {
        spotlight : "spotlight 2s ease .75 1 forwards",
      },
      keyframes : {
        spotlight : {
          "0%" : {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)"
          },
          "100" : {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)"
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
