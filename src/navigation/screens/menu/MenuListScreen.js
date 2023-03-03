import { View, FlatList } from "react-native";
import React from "react";
import { menuLinks } from "../../../data/menuLinks";
import MenuItem from "../../../components/menu/MenuItem";

const MenuListScreen = () => {
  return (
    <View tw="px-3 mt-12">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuLinks}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MenuListScreen;
