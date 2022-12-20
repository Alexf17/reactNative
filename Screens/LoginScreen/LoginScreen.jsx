import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const trackingFocus = () => {
    setIsShowKeyboard(true);
    setInFocus(true);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/PhotoBG.jpg")}
        />
        <View style={styles.wrap}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 43 }}
            >
              <Text style={styles.title}>Войти</Text>

              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={trackingFocus}
              />
              <View style={styles.passwordInput}>
                <TextInput
                  // style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={trackingFocus}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btnShowPass}
                >
                  <Text>Показать</Text>
                </TouchableOpacity>
              </View>
            </View>
            {!isShowKeyboard && (
              <>
                <View style={styles.btnSignUp}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.btnSignUpText}>Войти</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnHasAccount}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.btnHasAccountText}>
                      Нет аккаунта? Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",
    marginBottom: 32,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
  },
  wrap: {
    // height: 549,
    position: "relative",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
    // paddingBottom: 50,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  form: {
    // marginBottom: 43,
  },
  input: {
    padding: 16,
    marginBottom: 16,
    borderColor: "#E8E8E8",
    placeholderTextColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
  },
  image: {
    position: "absolute",
    flex: 1,
    width: "100%",
    top: 0,
    // resizeMode: "cover",
    // justifyContent: "flex-end",
  },
  passwordInput: {
    position: "relative",
    padding: 16,
    borderColor: "#E8E8E8",
    placeholderTextColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
  },
  btnShowPass: {
    fontFamily: "Roboto-Regular",
    position: "absolute",
    right: 16,
    top: 16,
    fontSize: 16,
    color: "#1B4371",
  },
  btnSignUp: {
    padding: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  btnSignUpText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  btnHasAccount: {
    marginTop: 16,
    marginBottom: 144,
    alignItems: "center",
    justifyContent: "center",
  },
  btnHasAccountText: {
    color: "#1B4371",
    fontSize: 16,
  },
});
