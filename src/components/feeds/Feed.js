import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const Feed = ({ description, image, createdAt, likes, comments }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View tw="my-2 bg-white p-3 rounded-xl">
      <View tw="flex-row justify-between">
        <View tw="flex-row items-center gap-x-2">
          <View>
            <Image
              source={require("../../../assets/images/avatar.png")}
              tw="w-10 h-10 rounded-full"
            />
          </View>
          <View>
            <Text
              tw="text-lg font-semibold"
              style={{ fontFamily: "Questrial" }}
            >
              Wabz Braize
            </Text>
            <Text
              tw="text-slate-500 text-xs"
              style={{ fontFamily: "Questrial" }}
            >
              Posted on: 4th Feb, 2023
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="more-vertical" size={20} />
        </TouchableOpacity>
      </View>
      <View tw="mt-2">
        {description.length < 200 ? (
          <Text style={{ fontFamily: "Questrial" }}>{description}</Text>
        ) : (
          <Text
            tw="text-sm text-slate-500 my-2"
            style={{ fontFamily: "Questrial" }}
          >
            {readMore ? description : `${description.substring(0, 200)}...`}

            <Text
              tw="text-[#982529] ml-2"
              onPress={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </Text>
          </Text>
        )}
      </View>
      <View tw="mt-3">
        {image && (
          <Image source={image} tw="w-full h-52 object-cover rounded-xl" />
        )}
      </View>
      <View tw="flex-row mt-4 items-center justify-between">
        <View>
          <FontAwesome name="heart-o" size={20} />
        </View>
        <View>
          <FontAwesome name="comment-o" size={20} />
        </View>
        <View>
          <Feather name="share-2" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Feed;
