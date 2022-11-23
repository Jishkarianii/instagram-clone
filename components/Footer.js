import { Image, StyleSheet, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import loggedInUser from "../assets/img/loggedInUser.png";

function Footer() {
  return (
    <View style={styles.container}>
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
          d="M11.7.904l10 9.802a1 1 0 01.3.714V23.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V18a3 3 0 00-2.824-2.995L11 15a3 3 0 00-2.995 2.824L8 18v5.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.492-.41L0 23.5V11.42a1 1 0 01.3-.714l10-9.802a1 1 0 011.4 0z"
          fill="#F9F9F9"
        />
      </Svg>
      <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.75 10c0-5.385-4.365-9.75-9.75-9.75S.25 4.615.25 10s4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l5.99 5.99.084.073a.75.75 0 00.976-1.133l-5.99-5.99A9.712 9.712 0 0019.75 10zm-18 0a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"
          fill="#F9F9F9"
        />
      </Svg>
      <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 .25A6.75 6.75 0 0123.75 7v10A6.75 6.75 0 0117 23.75H7A6.75 6.75 0 01.25 17V7A6.75 6.75 0 017 .25h10zm0 1.5H7A5.25 5.25 0 001.75 7v10c0 2.9 2.35 5.25 5.25 5.25h10c2.9 0 5.25-2.35 5.25-5.25V7c0-2.9-2.35-5.25-5.25-5.25zm-4.257 4.148A.75.75 0 0012 5.25l-.102.007-.097.02A.75.75 0 0011.25 6v5.249L6 11.25l-.102.007A.75.75 0 005.25 12l.007.102A.75.75 0 006 12.75l5.25-.001V18l.007.102a.75.75 0 00.743.648l.102-.007A.75.75 0 0012.75 18v-5.25H18l.102-.007A.75.75 0 0018.75 12l-.007-.102A.75.75 0 0018 11.25h-5.25V6l-.007-.102z"
          fill="#F9F9F9"
        />
      </Svg>
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
      <Image source={loggedInUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Footer;
