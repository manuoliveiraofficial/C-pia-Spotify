import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import button from './src/components/button';
import Texto from './src/components/texto';
import input from './src/components/input';
import Imagem from './src/components/imagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem style={styles.logo} source={require('./assets/spotify-logo.png')}></Imagem>
      <View style={styles.title}> 
        <Texto text="Milhões de músicas à sua escolha." style={styles.TextoStyle}></Texto>
        <Texto text="Grátis no Spotify." style={styles.TextoStyle}></Texto>
      </View>

      <View style={styles.button}>
        <Texto text="Inscreva-se grátis" style={styles.TextoStyle2}></Texto>
      </View>
      <View style={styles.button2}>
        <Texto text="Entrar" style={styles.TextoStyle3}></Texto>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  TextoStyle: {
    color: "white",
    fontSize: "16px",
    margin: "2px",
    fontWeight: "bolder"
  },
  TextoStyle2: {
    color: "black",
    fontSize: "14px",
    margin: "10px",
    fontWeight: "bolder"
  },
  TextoStyle3: {
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

