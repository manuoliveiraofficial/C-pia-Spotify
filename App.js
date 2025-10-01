import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './myButton';
import MyText from './myText';
import MyInput from './myInput';

export default function App() {
  return (
    <View style={styles.container}>
      <MyText text="Spotify" style={styles.textStyle}></MyText>
      <MyInput style={styles.input} placeholder="Username"></MyInput>
      <MyInput style={styles.input} placeholder="Password"></MyInput>
      <MyButton style={styles.button}></MyButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: "50px",
    margin: "15px",
    fontWeight: "bolder"
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: "grey",
    fontSize: "20",
    padding: "5",
    margin: "30px"
  },
  button: {
    backgroundColor: "green",
    width: "500px"
  }
});
