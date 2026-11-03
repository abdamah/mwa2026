import { View } from "react-native";

import { ReactNode } from "react";

type FooterProps = {
  children?: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return <View>{children}</View>;
};

export default Footer;
