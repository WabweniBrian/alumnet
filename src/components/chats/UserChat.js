import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import LastMessage from "./LastMessage";

const UserChat = ({ id, user, lastMessage }) => {
  return (
    <View tw="flex-row gap-x-3 my-2">
      <View tw="flex-5">
        <Image source={{ uri: user.image }} tw="w-12 h-12 rounded-full" />
      </View>
      <View tw="flex-1">
        <View tw="flex-row justify-between">
          <Text tw="font-bold text-base">{user.name}</Text>
          <LastMessage date={lastMessage.createdAt} />
        </View>
        <Text tw="text-slate-500">
          {lastMessage.text.length > 35
            ? `${lastMessage.text.slice(0, 35)}...`
            : lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default UserChat;
