import { StyleSheet } from "react-native";
import COLORS from "../consts/color";
const STYLES = StyleSheet.create({
    inputContainer:{ flexDirection: 'row', marginTop: 20 },
    inputIcon : {
        marginTop: 30,
        position: 'absolute',
    },
    input: {
        color: COLORS.light,
        padding: 30,
        borderBottomWidth: 0.7,
        flex: 1,
        fontSize: 18,
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnSecondary: {
        backgroundColor: COLORS.white,
        height: 50,
        borderWidth: 1, 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    line: {
        height: 1,
        width: 30,
        backgroundColor: COLORS.light,
    },
});
export default STYLES;