import {
    View,
    Text,
    Button,
    StyleSheet,
    Pressable,
    Image,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../Styles/Style";

export default function Home(props) {
    const navigation = props.navigation;
    // const [data, setData] = useState({
    //   name: "Nguyễn Đình Khánh",
    //   phone: "0395742903",
    //   email: "khanhndph20404@fpt.edu.vn",
    //   birthday: "02/09/2003",
    //   birthday: "15/04/2003",
    // });

    const data = {
        name: "Nguyễn Đình Khánh",
        phone: "0395742903",
        email: "khanhndph20404@fpt.edu.vn",
        majors: "Lập trình mobile",
        birthday: "02/09/2003",
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/icComputer.png")}
                style={styles.icEditInfo}
            />
            <Pressable
                android_ripple={{ color: "#a6e6facc" }}
                style={styles.buttonNext}
                onPress={() => navigation.navigate("Profile", { data })}
            >
                <Text style={styles.textButton}>Thông tin cá nhân</Text>
            </Pressable>
        </View>
    );
}