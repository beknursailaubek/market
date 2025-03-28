import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        cabinet: "#F5F6FA",
      },
      colors: {
        darkText: "#202224",
        mediumText: "#565656",
        brand: "#3B82F6",
        success: "#34D399",
        paid: "#8B5CF6",
        canceled: "#EF4444",
        accepted: "#F97316",
        delivery: "#C084FC",
      },
    },
  },
  plugins: [],
} satisfies Config;
