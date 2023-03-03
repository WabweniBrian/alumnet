import { StyleSheet, Text, View } from "react-native";

const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw=" text-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis pariatur
        eius asperiores consectetur praesentium quia veritatis illum
        perspiciatis qui, facere consequatur soluta, enim aut temporibus id
        sapiente excepturi iste et. Atque iusto blanditiis, sint, reprehenderit,
        magni quae pariatur mollitia repudiandae tempora sunt officia nobis
        porro iure reiciendis hic. Id, minima? Dolor, reiciendis temporibus id
        vero amet iste, rem debitis fugit ad cupiditate tempore voluptatibus
        magnam exercitationem commodi distinctio totam autem doloremque dolorum?
        Quas eaque soluta nemo. Sunt ullam quo suscipit sapiente, debitis,
        quidem numquam dolores praesentium at vitae exercitationem excepturi
        alias soluta ducimus eligendi corrupti obcaecati modi voluptas? Ipsam,
        aspernatur.
      </Text>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
