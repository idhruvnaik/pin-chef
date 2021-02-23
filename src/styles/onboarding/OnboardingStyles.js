import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    footerContent: {
        flexDirection: "row",
    },
    footeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    leftButton: {
        paddingLeft: 36,
    },
    rightButton: {
        paddingRight: 36,
    },
    activeButtonText: {
        fontSize: 25,
        color: GlobalStyles.color.white,
        fontFamily: GlobalStyles.font.fontFamilyBold,
    },
    inactiveButtonText: {
        fontSize: 25,
        fontFamily: GlobalStyles.font.fontFamilyBold,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        color: GlobalStyles.color.white,
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: 30,
    },
    containerMedia: {
        flex: 15,
        // alignItems: "center",
        // justifyContent: "center",
        // paddingRight: "3%",
        // paddingLeft: "3%",
    },
    containerLogo: {
        // flex: 0.5,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "12%",
    },
    descriptionContainer: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: GlobalStyles.color.boneWhite,
        fontFamily: GlobalStyles.font.fontFamilyBold,
        fontSize: 20,
        textAlign: "center",
        width: "75%",
    },
});
