import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './myButton';
import MyText from './myText';
import MyInput from './myInput';
import MyImage from './myImage';

export default function App2() {
  return (
    <View style={styles.container}>
      <MyImage style={styles.logo}></MyImage>
      <View style={styles.title}> 
        <MyText text="Entre no Spotify" style={styles.textStyle}></MyText>
      </View>

      <View style={styles.button}>
        <MyText text="Continuar com o e-mail" style={styles.textStyle2}></MyText>
      </View>
      <View style={styles.button2}>
        <MyText text="Continuar com o número de telefone" style={styles.textStyle3}></MyText>
      </View>
      <View style={styles.button2}>
        <MyText text="Continuar com o Google" style={styles.textStyle3}></MyText>
      </View>
      <View style={styles.button2}>
        <MyText text="Continuar com o Facebook" style={styles.textStyle3}></MyText>
      </View>
      <MyText text="Não tem uma conta?" style={styles.textStyle4}></MyText>
      <MyText text="Inscrever-se" style={styles.textStyle3}></MyText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: "30px",
    margin: "2px",
    fontWeight: "bolder"
  },
  textStyle2: {
    color: "black",
    fontSize: "13px",
    margin: "10px",
    fontWeight: "bolder"
  },
  textStyle3: {
    color: "white",
    fontSize: "13px",
    margin: "10px",
    fontWeight: "bolder",
    textAlign: "center"
  },
  textStyle4: {
    color: "white",
    fontSize: "13px",
    margin: "15px",
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
    marginTop:"100px"
  },

  button2: {
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#000000ff",
    borderRadius: "40px",
    border: "1px solid white",
    height: "40px",
    width: "260px",
    marginTop: "5px"
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
  },
  icon: {
    width: "20px",
    height: "20px",
  }
});

