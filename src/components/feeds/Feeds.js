import { View, FlatList, Text } from "react-native";
import Feed from "./Feed";
import { feeds } from "../../data/feeds";

const Feeds = () => {
  return (
    <View tw="mt-4 pb-24 px-3">
      <Text tw="text-base text-slate-600" style={{ fontFamily: "Questrial" }}>
        All Posts
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feeds}
        renderItem={({ item }) => <Feed {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feeds;
