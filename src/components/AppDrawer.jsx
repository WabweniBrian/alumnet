import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";

const AppDrawer = () => {
  const drawerRef = useRef(null);

  return (
    <DrawerLayout
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Link 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Link 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Link 3</Text>
          </TouchableOpacity>
          <TouchableOpacity stylem={styles.link}>
            <Text style={styles.linkText}>Link 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Link 5</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      {/* Your main content goes here */}
      <TouchableOpacity onPress={() => drawerRef.current.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </DrawerLayout>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  link: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  linkText: {
    fontSize: 18,
  },
});

export default AppDrawer;
