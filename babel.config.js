module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Możesz dostosować docelowe środowisko, np. "browsers": "> 0.25%, not dead"
        },
      },
    ],
    "@babel/preset-react", // Dodaj tę linię, jeśli używasz React
  ],
  plugins: [
    // Tutaj możesz dodawać dodatkowe wtyczki Babel według potrzeb
    [
      "@babel/plugin-transform-async-to-generator",
      {
        // Ustaw tę opcję na `true`, aby uruchomić Babel asynchronicznie
        async: true,
      },
    ],
  ],
};