/***
 * React Native is File-based Routing
 *   for this file we can visit(route) on the web like
 *          http://localhost:8080/about ->(about) is a folder
 */

import { Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "blue",
        }}
      >
        About Screen for routing test.
      </Text>
    </View>
  );
};

export default AboutScreen;
