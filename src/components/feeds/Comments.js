import { View, Text, Image } from "react-native";
import React from "react";

const Comments = ({ text, author }) => {
  return (
    <View tw="flex-row items-center gap-x-2 my-2">
      <View>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
          }}
          tw="w-8 h-8 rounded-full"
        />
      </View>
      <View>
        <Text tw="text-base">{author}</Text>
        <Text tw="text-slate-500">{text}</Text>
      </View>
    </View>
  );
};

export default Comments;
