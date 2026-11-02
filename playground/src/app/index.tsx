import { Text, View } from "react-native";

import { MyFooter } from "./header2";

// boxing | packaging-> unboxing | unpackaging

const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

const name2 = user.name;

const { name } = user;

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyFooter>
        <Text>This is the footer content.</Text>
      </MyFooter>

      <MyFooter />
    </View>
  );
}
