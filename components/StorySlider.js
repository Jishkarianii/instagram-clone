import { ScrollView, StyleSheet, View } from "react-native";
import StorySliderItem from "./StorySliderItem";
import yourStory from "../assets/img/your-story.png";
import karennne from "../assets/img/karennne.png";
import zackjohn from "../assets/img/zackjohn.png";
import kieron_d from "../assets/img/kieron_d.png";

const users = [
  {
    id: 1,
    img: yourStory,
    userName: "Your Story",
  },
  {
    id: 2,
    img: karennne,
    userName: "karennne",
  },
  {
    id: 3,
    img: zackjohn,
    userName: "zackjohn",
  },
  {
    id: 4,
    img: kieron_d,
    userName: "kieron_d",
  },
  {
    id: 5,
    img: karennne,
    userName: "karennne",
  },
  {
    id: 6,
    img: zackjohn,
    userName: "zackjohn",
  },
  {
    id: 7,
    img: kieron_d,
    userName: "kieron_d",
  },
];

function StorySlider() {
  return (
    <ScrollView 
        horizontal={true}
        style={styles.StorySliderCont}
    >
      {users.map((user) => (
        <StorySliderItem
          key={user.id}
          img={user.img}
          userName={user.userName}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  StorySliderCont: {
    marginTop: 15,
    flexDirection: "row",
  },
});

export default StorySlider;
