import { StyleSheet, View } from "react-native";
import PostItem from "./PostItem";

function Posts() {
  return (
    <View style={styles.container}>
      <PostItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default Posts;
