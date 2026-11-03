import { Button, Text, TextInput, View } from "react-native";

const Form = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Username
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 5,
          width: 400,
          borderRadius: 16,
        }}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Password
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 5,
          width: 400,
          borderRadius: 16,
        }}
      />

      <View
        style={{
          marginTop: 10,
          width: 400,
          borderRadius: 16,
          backgroundColor: "blue",
        }}
      >
        <Button title="Sign In" color="white" />
      </View>
    </View>
  );
};

export default Form;
