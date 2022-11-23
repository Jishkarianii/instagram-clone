import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import SliderItem from "./SliderItem";
import slide_1 from "../assets/img/slide_1.jpg";
import slide_2 from "../assets/img/slide_2.jpg";
import slide_3 from "../assets/img/slide_3.jpg";
import { useState } from "react";

const photos = [
  {
    id: 1,
    url: slide_1,
  },
  {
    id: 2,
    url: slide_2,
  },
  {
    id: 3,
    url: slide_3,
  },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const renderPagination = (index) => {
    setSlideIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        activeDotColor="#3897F0"
        dotColor="rgba(255, 255, 255, 0.33)"
        onIndexChanged={renderPagination}
        style={styles.swiper}
      >
        {photos.map((photo) => (
          <SliderItem key={photo.id} url={photo.url} />
        ))}
      </Swiper>
      <Text style={styles.counter}>
        {slideIndex}/{photos.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  counter: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: 12,
    color: "#F9F9F9",
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "rgba(18, 18, 18, 0.9)",
  },
});

export default Slider;
