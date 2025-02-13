process.env.TAMAGUI_TARGET = "native"; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      '@fast-styles/babel-plugin',
      ["@gluestack-style/babel-plugin-styled-resolver"],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.js",
          logTimings: true,
        },
      ],
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
        },
      ],
      "nativewind/babel",
    ],
  };
};
