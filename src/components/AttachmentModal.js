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

const AttachmentModal = ({
  visible,
  onClose,
  pickDocument,
  pickImage,
  image,
  sendImage,
  file,
  sendDocument,
}) => {
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
          <View>
            <Text tw="text-lg font-semibold text-center">
              Select Image or take using camera
            </Text>
          </View>
          <View tw="mt-4 flex-row justify-center items-center gap-x-10">
            <View>
              <TouchableOpacity
                tw="bg-teal-600 w-14 h-14 rounded-full items-center justify-center"
                onPress={() => pickImage("library")}
              >
                <Feather name="image" size={20} color="#fff" />
              </TouchableOpacity>
              <Text tw="text-sm text-slate-600">Image</Text>
            </View>
            <View>
              <TouchableOpacity
                tw="bg-[#982529] w-14 h-14 rounded-full items-center justify-center"
                onPress={() => pickImage("camera")}
              >
                <Feather name="camera" size={20} color="#fff" />
              </TouchableOpacity>
              <Text tw="text-sm text-slate-600">Camera</Text>
            </View>
            <View>
              <TouchableOpacity
                tw="bg-slate-600 w-14 h-14 rounded-full items-center justify-center"
                onPress={pickDocument}
              >
                <Ionicons name="documents-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <Text tw="text-sm text-slate-600">Document</Text>
            </View>
          </View>
          <View tw="mt-6">
            {image && (
              <View>
                <Image
                  source={{ uri: image }}
                  tw="w-full h-36 object-fill rounded-xl"
                />
                <View tw="mt-2">
                  <TextInput
                    placeholder="Image Caption.. (Optional)"
                    tw="w-full bg-slate-200 rounded-full px-3 py-2"
                    style={{ fontFamily: "Questrial" }}
                  />
                </View>
                <TouchableOpacity
                  tw="px-3 py-2 bg-[#982529] my-4 rounded-full flex-row justify-center items-center gap-x-2"
                  onPress={sendImage}
                >
                  <Text tw="text-white" style={{ fontFamily: "Questrial" }}>
                    Send
                  </Text>
                  <Feather name="send" color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            )}

            {file && (
              <View tw="mt-3">
                <View tw="flex-row gap-x-2 border border-slate-300 p-2 rounded-xl">
                  <Image source={file.icon} tw="w-5 h-5 object-contain" />
                  <Text>
                    {file.name.length > 20
                      ? file.name.split(".")[0].slice(0, 20) +
                        "..." +
                        file.name.split(".")[1]
                      : file.name}
                  </Text>
                </View>
                <View tw="mt-2">
                  <TextInput
                    placeholder="Caption.. (Optional)"
                    tw="w-full bg-slate-200 rounded-full px-3 py-2"
                    style={{ fontFamily: "Questrial" }}
                  />
                </View>
                <TouchableOpacity
                  tw="px-3 py-2 bg-[#982529] my-4 rounded-full flex-row justify-center items-center gap-x-2"
                  onPress={sendDocument}
                >
                  <Text tw="text-white" style={{ fontFamily: "Questrial" }}>
                    Send
                  </Text>
                  <Feather name="send" color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            )}
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
    zIndex: 999, // set an even higher value for the modal
  },
  modalText: {
    fontSize: 16,
  },
});

export default AttachmentModal;
