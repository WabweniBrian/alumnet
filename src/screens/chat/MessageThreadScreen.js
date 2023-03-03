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
import { AntDesign, Feather } from "@expo/vector-icons";
import moment from "moment";
import { messages } from "../../data/messages";
import Messages from "../../components/chats/Messages";

const MessageThreadScreen = () => {
  const [message, setMessage] = useState("");
  const [showEmojiBoard, setShowEmojiBoard] = useState(false);
  const flatListRef = useRef(null);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const opacity = useRef(new Animated.Value(1)).current;

  function onEmojiSelected(emoji) {
    setMessage((prevMessage) => prevMessage + emoji);
  }

  const toggleEmojiBoard = () => {
    setShowEmojiBoard(!showEmojiBoard);
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: false });
  }, [messages]);

  // useEffect(() => {
  //   const listener = scrollY.addListener(({ value }) => {
  //     const contentHeight = messages.length * MESSAGE_HEIGHT;
  //     const isScrolledToBottom = value >= contentHeight - DEVICE_HEIGHT;
  //     Animated.timing(opacity, {
  //       toValue: isScrolledToBottom ? 0 : 1,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start();
  //   });
  //   return () => {
  //     scrollY.removeListener(listener);
  //   };
  // }, [messages, opacity, scrollY]);

  const handleScrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  // const messagesByDate = messages
  //   .sort((a, b) => (b.createdAt < a.createdAt ? 1 : -1))
  //   .reduce((result, message) => {
  //     const date = new Date(message.createdAt).toDateString();
  //     if (!result[date]) {
  //       result[date] = [];
  //     }
  //     result[date].push(message);
  //     return result;
  //   }, {});

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

  return (
    <ImageBackground
      tw="flex-1"
      source={require("../../../assets/images/BG.png")}
      resizeMode="cover"
    >
      <View tw="mt-3 relative">
        <View tw="px-4 pb-16">
          {/* <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            data={messages}
            renderItem={({ item }) => <Messages {...item} />}
            keyExtractor={(item) => item.id}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: false })
            }
            onLayout={() =>
              flatListRef.current?.scrollToEnd({ animated: false })
            }
            // onScroll={Animated.event(
            //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            //   {
            //     useNativeDriver: true,
            //   }
            // )}
            // scrollEventThrottle={16}
          /> */}

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
          <Animated.View style={[styles.button, { opacity }]}>
            <Feather name="chevron-down" color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <View
          tw="absolute bottom-0 bg-white w-full py-3 flex-row items-center px-3 border-t border-t-slate-300"
          style={styles.shadow}
        >
          <View tw="bg-slate-300 rounded-full px-4 py-2 flex-row items-center flex-1">
            <TouchableOpacity onPress={toggleEmojiBoard}>
              <Feather name="smile" size={25} color="grey" />
            </TouchableOpacity>
            {/* <EmojiKeyboard
              onEmojiSelected={onEmojiSelected}
              showEmojiBoard={showEmojiBoard}
            /> */}
            <TextInput placeholder="Enter message" tw="ml-2 flex-1" multiline />
            <TouchableOpacity>
              <AntDesign name="link" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity tw="bg-[#982529] w-10 h-10 rounded-full items-center justify-center">
            <Feather name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
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
