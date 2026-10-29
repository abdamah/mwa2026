/**
 * props: component parameters
 *
 */

import { Text, View } from "react-native";

interface MyButtonProps {
  label: string;
}

const MyButton = ({ label }: MyButtonProps) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          color: "red",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default MyButton;
