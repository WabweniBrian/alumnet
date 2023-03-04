import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const AddPostModal = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <TouchableOpacity
            tw="items-center justify-center -mt-3"
            onPress={onClose}
          >
            <Feather name="chevron-up" size={20} color="grey" />
          </TouchableOpacity>
          <View tw="mt-4">
            <Text>Create your first post</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    zIndex: 99, // set a higher value for the backdrop
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height: "80%",
    zIndex: 999, // set an even higher value for the modal
  },
  modalText: {
    fontSize: 16,
  },
});

export default AddPostModal;
