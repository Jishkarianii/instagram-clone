import { Image, StyleSheet, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import liked from "../assets/img/liked.png";
import Slider from "./Slider";

function PostItem({ userImg, userName, location, isOfficial, sliderData }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.userCont}>
          <Image source={userImg} />
          <View>
            <Text style={styles.userName}>
              {userName}
              <View>
                {isOfficial && (
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
                )}
              </View>
            </Text>
            <Text style={styles.location}>{location}</Text>
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
      <Slider data={sliderData} />
      <View style={styles.actionsCont}>
        <View style={styles.actionsLeftCont}>
          <Svg
            width={24}
            height={22}
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.873 3.159l-.655-.766c-2.637-2.636-6.84-2.456-9.476.18-2.636 2.636-2.13 7.732.507 10.368 1.07 1.07 2.672 2.551 4.806 4.444l1.796 1.58 2.017 1.75a1.5 1.5 0 001.94.018l1.634-1.37c2.86-2.418 4.984-4.323 6.37-5.714l.359-.366.323-.342c2.455-2.647 3.086-7.793.511-10.368l-.186-.18c-2.648-2.455-6.64-2.574-9.215 0l-.731.766zm-9.07.475c2.084-2.085 5.308-2.183 7.315-.218l1.693 1.978L13.69 3.43c1.925-1.926 4.995-1.898 7.11.063l.166.16c1.819 1.82 1.51 6.025-.571 8.268l-.313.33-.346.354c-1.149 1.152-2.85 2.697-5.095 4.62l-1.167.992-1.625 1.363-2.014-1.748-1.44-1.266c-2.032-1.795-3.598-3.23-4.695-4.3l-.39-.385C1.139 9.709.867 5.569 2.803 3.634z"
              fill="#F9F9F9"
            />
          </Svg>
          <Svg
            width={22}
            height={24}
            viewBox="0 0 22 24"
            fill="none"
            style={styles.commnetIcon}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 11.5c0-6.075-4.925-11-11-11S0 5.425 0 11.5s4.925 11 11 11c1.326 0 3.148-.484 5.465-1.451l3.746 1.461.111.037a1 1 0 001.224-1.204l-1.044-4.297.17-.41C21.559 14.482 22 12.77 22 11.5zm-2.729 4.6l-.345.817.936 3.847-3.417-1.333-.933.387C13.544 20.612 12.024 21 11 21a9.5 9.5 0 119.5-9.5c0 1.046-.403 2.595-1.229 4.6z"
              fill="#F9F9F9"
            />
          </Svg>
          <Svg
            width={24}
            height={21}
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.934 1.788L12.25 20.04a.75.75 0 01-1.371-.184L8.128 9.6l-.023-.032a.755.755 0 01-.052-.109L.533 1.94a.75.75 0 01.53-1.281h21.224c.58 0 .94.629.647 1.129zm-2.7 1.643L9.663 9.535l2.198 8.2L20.234 3.43zM2.874 2.159l16.565-.001L8.937 8.222 2.874 2.159z"
              fill="#F9F9F9"
            />
          </Svg>
        </View>
        <Svg
          width={22}
          height={25}
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.86 1.179V22.83a1 1 0 001.703.712l8.548-8.43 8.549 8.43a1 1 0 001.702-.712V1.179a.5.5 0 00-.5-.5H1.361a.5.5 0 00-.5.5zm1.5 20.457V2.179h17.502v19.457L11.813 13.7a1 1 0 00-1.404 0l-8.048 7.936z"
            fill="#F9F9F9"
          />
        </Svg>
      </View>
      <View style={styles.likesCont}>
        <Image style={styles.likedImg} source={liked} />
        <Text style={styles.likeText}>Liked by </Text>
        <Text style={[styles.likeText, styles.likeBold]}>craig_love</Text>
        <Text style={styles.likeText}> and </Text>
        <Text style={[styles.likeText, styles.likeBold]}>44,686 others</Text>
      </View>
      <View style={styles.commentCont}>
        <Text style={styles.commentColor}>
          <Text style={[styles.commentColor, styles.commentBold]}>
            joshua_l
          </Text>{" "}
          The game in Japan was amazing and I want to share some photos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 530,
    marginBottom: 20,
  },
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
  actionsCont: {
    marginTop: -45,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsLeftCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  commnetIcon: {
    marginHorizontal: 17,
  },
  likesCont: {
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  likedImg: {
    marginRight: 7,
  },
  likeText: {
    color: "#F9F9F9",
    fontSize: 13,
  },
  likeBold: {
    fontWeight: "600",
  },
  commentCont: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  commentColor: {
    color: "#F9F9F9",
    fontSize: 13,
  },
  commentBold: {
    fontWeight: "600",
  },
});

export default PostItem;
