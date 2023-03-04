import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Keyboard,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { messages } from "../../data/messages";
import Messages from "../../components/chats/Messages";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import AttachmentModal from "../../components/AttachmentModal";
// import EmojiKeyboard from "../../components/chats/EmojiKeyboard";

const MessageThreadScreen = () => {
  const [message, setMessage] = useState("");
  const [showEmojiBoard, setShowEmojiBoard] = useState(false);
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  // Handle Opening the Attachment Modal--------------------------------------------------------------------------
  const handleModalOpen = () => {
    Keyboard && Keyboard.dismiss();
    setModalVisible(true);
  };

  // Handle Closing the Attachment Modal-------------------------------------------------------------
  const handleModalClose = () => {
    setModalVisible(false);
    image && setImage(null);
    file && setFile(null);
  };

  // EmojiSelected + Message--------------------------------------------------------------------------
  function onEmojiSelected(emoji) {
    setMessage((prevMessage) => prevMessage + emoji);
  }
  // Toggle Emoji Keyboard--------------------------------------------------------------------------
  const toggleEmojiBoard = () => {
    setShowEmojiBoard(!showEmojiBoard);
  };

  // Scroll to bottom to show recent messages--------------------------------------------------------------
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: false });
  }, [messages]);

  const handleScrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  // Categorise message depending on the date they were sent----------------------------------------------
  const messagesByDate = messages
    .sort((a, b) => (b.createdAt < a.createdAt ? 1 : -1))
    .reduce((result, message) => {
      const date = moment(message.createdAt).calendar(null, {
        lastDay: "[Yesterday]",
        sameDay: "[Today]",
        lastWeek: "dddd",
        sameElse: "D MMM, YYYY",
      });
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(message);
      return result;
    }, {});

  // -------------------------------Document and Image Picking -------------------------------
  const pickDocument = async () => {
    image && setImage(null);
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      if (!result.cancelled) {
        const fileExtension = result.name.split(".").pop();
        let icon = null;
        if (fileExtension === "pdf") {
          icon = require("../../../assets/icons/pdf.png");
        } else if (fileExtension === "word" || fileExtension === "docx") {
          icon = require("../../../assets/icons/word.png");
        } else if (fileExtension === "zip" || fileExtension === "rar") {
          icon = require("../../../assets/icons/zip.png");
        } else if (fileExtension === "xls" || fileExtension === "xlsx") {
          icon = require("../../../assets/icons/excel.png");
        } else if (fileExtension === "ppt" || fileExtension === "pptx") {
          icon = require("../../../assets/icons/powerpoint.png");
        } else if (fileExtension === "mdb" || fileExtension === "accdb") {
          icon = require("../../../assets/icons/microsoft-access.png");
        } else if (
          fileExtension === "png" ||
          fileExtension === "jpg" ||
          fileExtension === "jpeg" ||
          fileExtension === "gif"
        ) {
          icon = require("../../../assets/icons/image.png");
        } else {
          icon = require("../../../assets/icons/file.png");
        }
        setFile({
          uri: result.uri,
          name: result.name,
          icon: icon,
        });
      }
    } catch (error) {
      console.log("Error picking document:", error);
      alert("An error occurred while picking a document.");
    }
  };

  // Ask for permision before picking an image from the user's media library
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  // Handle Image Picking--------------------------------------------------------------------------
  const pickImage = async (method) => {
    file && setFile(null);
    let result;
    try {
      if (method === "camera") {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      }
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const sendImage = () => {
    setImage(null);
    setModalVisible(false);
  };

  const sendDocument = () => {
    setFile(null);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      tw="flex-1"
      source={require("../../../assets/images/BG.png")}
      resizeMode="cover"
    >
      <View tw="mt-3 relative">
        <View tw="px-4 pb-16">
          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            data={Object.entries(messagesByDate)}
            renderItem={({ item }) => {
              const [date, messages] = item;
              return (
                <>
                  <View tw="bg-[#982529]/20 rounded-full px-3 max-w-[200px] mx-auto my-2">
                    <Text tw="text-center text-[#982529]/60">{date}</Text>
                  </View>

                  {messages.map((message) => (
                    <Messages key={message.id} {...message} />
                  ))}
                </>
              );
            }}
            keyExtractor={(item) => item[0]}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: false })
            }
            onLayout={() =>
              flatListRef.current?.scrollToEnd({ animated: false })
            }
          />
        </View>
        <TouchableWithoutFeedback onPress={handleScrollToBottom}>
          <Animated.View style={styles.button}>
            <Feather name="chevron-down" color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <View
          tw="absolute bottom-0 bg-white w-full py-3 flex-row items-center px-3 border-t border-t-slate-300"
          style={styles.shadow}
        >
          <View tw="bg-slate-300 rounded-full px-4 py-2 flex-row items-center flex-1">
            <TouchableOpacity
            // onPress={() => setShowEmojiBoard(!showEmojiBoard)}
            >
              <Feather name="smile" size={25} color="grey" />
            </TouchableOpacity>
            {/* <EmojiKeyboard onEmojiSelected={onEmojiSelected} /> */}
            <TextInput placeholder="Enter message" tw="ml-2 flex-1" multiline />
            <TouchableOpacity onPress={handleModalOpen}>
              <AntDesign name="link" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity tw="bg-[#982529] w-10 h-10 rounded-full items-center justify-center">
            <Feather name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <AttachmentModal
        visible={modalVisible}
        onClose={handleModalClose}
        pickDocument={pickDocument}
        pickImage={pickImage}
        image={image}
        sendImage={sendImage}
        file={file}
        sendDocument={sendDocument}
      />
    </ImageBackground>
  );
};

export default MessageThreadScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#982529",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 35,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
