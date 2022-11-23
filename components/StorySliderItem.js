import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function StorySliderItem({ img, userName }) {
  return (
    <View style={styles.StorySliderItem}>
      <LinearGradient
        colors={[
          "rgba(251, 170, 71, 1)",
          "rgba(217, 26, 70, 1)",
          "rgba(166, 15, 147, 1)",
        ]}
        style={styles.gradientBorder}
      >
        <Image
          style={styles.img}
          source={img}
        />
      </LinearGradient>
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  StorySliderItem: {
    width: 62,
    marginHorizontal: 10,
  },
  gradientBorder: {
    width: 60,
    height: 60,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-130deg" }],
  },
  img: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#000000",
    transform: [{ rotate: "130deg" }],
  },
  userName: {
    marginTop: 5,
    color: "#F9F9F9",
    textAlign: "center",
    fontSize: 12,
  },
});

export default StorySliderItem;
