import { Text, View } from "react-native";

import { ReactNode } from "react";

type MyHeaderProps = {
  style: string;
  description: string;
};

const MyHeader = ({ style, description }: MyHeaderProps) => {
  // style = style ="Default Style"; not use

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {style}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "blue",
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default MyHeader;

type MyFooterProps = {
  children?: ReactNode;
};

export const MyFooter = ({ children }: MyFooterProps) => {
  return <View>{children}</View>;
};

// arrow fun -> normal func -> norma fun -> arrow

function add(a: number, b: number) {
  return a + b;
}

function ad(a: number, b: number) {
  return a + b;
}

function Arrow() {
  return (
    <View>
      <Text>akfjadkfjds;</Text>
    </View>
  );
}
