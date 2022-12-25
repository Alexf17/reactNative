import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const PostsScreen = ({ navigation }) => {
  const isAvatarAdd = false;
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <Image
            style={styles.avatarPhoto}
            source={require("../../../assets/images/Rectangle22.png")}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>example</Text>
          <Text style={styles.email}>example@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  profile: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 32,
  },
  avatarPhoto: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  profileInfo: {
    marginTop: 16,
    marginLeft: 8,
  },
  name: {
    color: "#212121",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
