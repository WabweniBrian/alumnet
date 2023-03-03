import { View, Text, FlatList } from "react-native";
import Feed from "./Feed";
import { feeds } from "../../data/feeds";

const Feeds = () => {
  return (
    <View tw="mt-4 pb-20 px-3">
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
