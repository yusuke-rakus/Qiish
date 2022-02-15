module.exports = {
  presets: [["next/babel"]],
  env: {
    test: {
      presets: [["next/babel", { targets: { node: "current" } }]],
    },
  },
};
