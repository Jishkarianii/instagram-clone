import { Image, StyleSheet, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import joshua_l from "../assets/img/joshua_l.png";

function PostItem() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.userCont}>
          <Image source={joshua_l} />
          <View>
            <Text style={styles.userName}>
              joshua_l
              <View>
                <Svg
                  width={10}
                  height={10}
                  style={styles.official}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.95 0L6.18.803l1.471-.01.603 1.343 1.242.787-.219 1.455.62 1.334-.97 1.105-.2 1.457-1.414.405-.956 1.118-1.409-.423-1.409.423-.956-1.118-1.414-.405-.2-1.457L0 5.712l.62-1.334L.4 2.923l1.244-.787.602-1.342 1.47.01L4.95 0zm1.308 3.519l-1.969 2.09-.649-.69a.4.4 0 00-.582.55l.94.998a.4.4 0 00.582 0l2.26-2.4a.4.4 0 00-.582-.548z"
                    fill="#3897F0"
                  />
                </Svg>
              </View>
            </Text>
            <Text style={styles.location}>Tokyo, Japan</Text>
          </View>
        </View>
        <Svg
          width={14}
          height={4}
          viewBox="0 0 14 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 .5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
            fill="#F9F9F9"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  head: {
    marginLeft: 10,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginLeft: 10,
    color: "#F9F9F9",
    fontSize: 13,
    fontWeight: "600",
  },
  official: {
    marginLeft: 4,
  },
  location: {
    marginLeft: 10,
    color: "#F9F9F9",
    fontSize: 11,
  },
});

export default PostItem;
