import { View, FlatList } from "react-native";
import { users } from "../../data/users";
import UserChat from "./UserChat";

const Chats = () => {
  return (
    <View tw="px-3 py-4">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => <UserChat {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Chats;
