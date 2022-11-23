import { StyleSheet, View } from "react-native";
import PostItem from "./PostItem";
import joshua_l from "../assets/img/joshua_l.png";
import slide_1 from "../assets/img/slide_1.jpg";
import slide_2 from "../assets/img/slide_2.jpg";
import slide_3 from "../assets/img/slide_3.jpg";

const posts = [
  {
    id: 1,
    userImg: joshua_l,
    userName: "joshua_l",
    location: "Tokyo, Japan",
    isOfficial: true,
    sliderData: [
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
    ],
  },
  {
    id: 2,
    userImg: joshua_l,
    userName: "_nikss_",
    location: "Tokyo, Japan",
    isOfficial: false,
    sliderData: [
      {
        id: 1,
        url: slide_2,
      },
      {
        id: 2,
        url: slide_1,
      },
      {
        id: 3,
        url: slide_3,
      },
    ],
  },
  {
    id: 3,
    userImg: joshua_l,
    userName: "john_12",
    location: "Tokyo, Japan",
    isOfficial: true,
    sliderData: [
      {
        id: 1,
        url: slide_3,
      },
      {
        id: 2,
        url: slide_2,
      },
      {
        id: 3,
        url: slide_1,
      },
    ],
  },
];

function Posts() {
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          userImg={post.userImg}
          userName={post.userName}
          location={post.location}
          isOfficial={post.isOfficial}
          sliderData={post.sliderData}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Posts;
