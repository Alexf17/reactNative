import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.wrap}>
          <View style={styles.photo}>
            <TouchableOpacity style={styles.camera}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{ marginTop: 8, marginBottom: 48 }}
          activeOpacity={0.7}
        >
          <Text style={styles.text}>"Загрузить фото"</Text>
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <TextInput placeholder="Название" style={styles.input} />
        </View>
        <View
          style={{
            ...styles.inputWrap,
            position: "relative",
            marginBottom: 50,
          }}
        >
          <TextInput
            placeholder="Местность"
            style={{
              ...styles.input,
              paddingLeft: 28,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ ...styles.iconWrap, marginRight: 8 }}
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.buttonSubmit,
            backgroundColor: "#F6F6F6",
          }}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: "#BDBDBD",
            }}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonDelete}>
        <Feather name="trash-2" size={24} color="#DADADA" />
      </TouchableOpacity>
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
  photo: {
    flex: 1,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  wrap: {
    height: 240,
  },
  camera: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapp: {
    marginBottom: 32,
  },

  input: {
    paddingBottom: 15,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  iconWrap: {
    position: "absolute",
    bottom: 16,
  },
  buttonDelete: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 85,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    // padding: 10,
  },
  buttonSubmit: {
    borderRadius: 100,
    paddingVertical: 16,
    // marginBottom: 32,
  },
});
