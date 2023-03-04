import { View, Text, Image, TouchableOpacity } from "react-native";
import Feeds from "../components/feeds/Feeds";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import AddPostModal from "../components/feeds/AddPostModal";

const FeedsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // Handle Opening the AddPost Modal--------------------------------------------------------------------------
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  // Handle Closing the AddPost Modal-------------------------------------------------------------
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Home")}
        className="text-3xl font-bold text-slate-700"
      ></Text>
      <View tw="px-3">
        <View tw="p-2 rounded-xl bg-white">
          <View tw="flex-row items-center gap-x-2">
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
              }}
              tw="h-10 w-10 rounded-full"
            />
            <View>
              <Text tw="text-base" style={{ fontFamily: "Questrial" }}>
                Wabz Braize
              </Text>
              <Text tw="text-slate-500" style={{ fontFamily: "Questrial" }}>
                Add a post, success stories, feelings, motivations..etc
              </Text>
            </View>
          </View>
          <TouchableOpacity
            tw="px-3 py-2 bg-[#982529] my-4 rounded-full flex-row justify-center items-center gap-x-2"
            onPress={handleModalOpen}
          >
            <Feather name="plus" color="#fff" size={20} />
            <Text tw="text-white" style={{ fontFamily: "Questrial" }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Feeds />
      <AddPostModal visible={modalVisible} onClose={handleModalClose} />
    </View>
  );
};

export default FeedsScreen;
