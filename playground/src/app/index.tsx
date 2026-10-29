import { View } from "react-native";
import MyButton from "./mybutton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyButton label="My Start Button" />
    </View>
  );
}
