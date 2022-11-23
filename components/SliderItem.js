import { Image, StyleSheet, View } from "react-native";

function SliderItem({url}) {
  return (
    <View>
      <Image style={styles.img} source={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 380
  },
});

export default SliderItem;
