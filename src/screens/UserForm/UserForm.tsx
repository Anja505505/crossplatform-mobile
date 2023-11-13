import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Input, Button } from "@rneui/themed";
import { useCreateUserMutation } from "../../store/api/usersApi";
import { useState, useRef } from "react";
import { useToast } from "react-native-toast-notifications";

export const UserForm = (props) => {
  const { navigation } = props;
  const lastnameRef = useRef(null);

  const [createUser, { isLoading }] = useCreateUserMutation();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (firstName === "" || lastName === "") {
      toast.show("please fill form", {
        type: "warning",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    createUser({
      user: {
        firstName: firstName,
        lastName: lastName,
      },
    });
    navigation.navigate("UserList");
    toast.show("Din användare har skapats", {
      type: "success",
      placement: "top",
      duration: 4000,
      animationType: "slide-in",
    });
    setfirstName("");
    setlastName("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Text>Create your user</Text>
          <Input
            returnKeyType="next"
            onSubmitEditing={() => lastnameRef.current.focus()}
            blurOnSubmit={false}
            value={firstName}
            disabled={isLoading}
            onChangeText={(text) => setfirstName(text)}
            placeholder="First name"
          ></Input>
          <Input
            ref={lastnameRef}
            value={lastName}
            disabled={isLoading}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit()}
            onChangeText={(text) => setfirstName(text)}
            placeholder="Last name"
          ></Input>
          <Button
            title="Create user"
            disabled={isLoading}
            loading={isLoading}
            onPress={() => handleSubmit()}
          ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "CF9FFF",
    margin: 36,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 16,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
    alignItems: "center",
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 16,
  },
});
