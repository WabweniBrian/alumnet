import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

const Messages = ({ text, createdAt, user }) => {
  const formattedDate = moment(createdAt).calendar(null, {
    sameDay: () => `[${moment(createdAt).format("h:mm A")}]`,
    lastDay: "[Yesterday]",
    lastWeek: "dddd",
    sameElse: "MMM DD, YYYY",
  });

  return (
    <View tw="my-2">
      {user.id === "u1" ? (
        <View tw="self-start max-w-[80%] flex-row gap-x-2">
          <Image
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
            }}
            tw="w-8 h-8 rounded-full"
          />
          <View tw=" bg-[#982529] p-2 rounded-xl rounded-tl-none">
            <Text tw="text-white">{text}</Text>
            <View tw="items-end mt-1">
              <Text tw="text-xs text-slate-300">
                {moment(createdAt).format("h:mm A")}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View tw="self-end max-w-[80%]">
          <View tw=" bg-slate-300 p-2 rounded-xl rounded-tr-none">
            <Text>{text}</Text>
            <View tw="items-end mt-1">
              <Text tw="text-xs text-slate-500">
                {moment(createdAt).format("h:mm A")}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Messages;
