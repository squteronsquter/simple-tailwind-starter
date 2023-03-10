# Simple Tailwind CSS Starter

Initialize npm project & install Tailwind CSS
```
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```
Configure Tailwind CSS to suit your needs

In tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
    },
    extend: {
      colors: {
        dmsBlue: "hsl(1, 20%, 30%)",
        dmsRed: "hsl(12, 88%, 64%)",
        dmsPaleGray: "hsl(3, 10%, 90%)",
        dmsGray: "hsl(6, 20%, 70%)",
      },
    },
  },
  plugins: [],
};

```

Then just create an index.html file, add Tailwind CSS classes in the markup & run

```
npm run build

```

During development run 

```
npm run watch

```

___Thats it folks___
