import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './myButton';
import MyText from './myText';
import MyInput from './myInput';
import MyImage from './myImage';

export default function App() {
  return (
    <View style={styles.container}>
      <MyImage style={styles.logo}></MyImage>
      <View style={styles.title}> 
        <MyText text="Milhões de músicas à sua escolha." style={styles.textStyle}></MyText>
        <MyText text="Grátis no Spotify." style={styles.textStyle}></MyText>
      </View>

      <View style={styles.button}>
        <MyText text="Inscreva-se grátis" style={styles.textStyle2}></MyText>
      </View>
      <View style={styles.button2}>
        <MyText text="Entrar" style={styles.textStyle3}></MyText>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: "16px",
    margin: "2px",
    fontWeight: "bolder"
  },
  textStyle2: {
    color: "black",
    fontSize: "14px",
    margin: "10px",
    fontWeight: "bolder"
  },
  textStyle3: {
    color: "white",
    fontSize: "14px",
    margin: "10px",
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
    alignItems: "center",
    backgroundColor: "#1bc258",
    borderRadius: "40px",
    height: "40px",
    width: "260px",
    marginTop:"150px"
  },

  button2: {
    alignItems: "center",
    backgroundColor: "#000000ff",
    borderRadius: "40px",
    border: "1px solid white",
    height: "40px",
    width: "260px",
    marginTop: "10px"
  },
  logo: {
    width: "70px",
    height: "70px",
    marginBottom:"20px",
    marginTop: "100px"
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    width:"90%"
  }
});

