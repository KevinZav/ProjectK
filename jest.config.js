module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native-vector-icons|@react-native|@react-navigation|react-native-screens|react-native-safe-area-context|standard-navigation|use-latest-callback|nanoid)/)',
  ],
};
