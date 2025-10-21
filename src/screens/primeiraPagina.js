import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Texto from '../components/texto';
import Imagem from '../components/imagem';

export default function PaginaInicial() {
  return (
    <View style={styles.container}>
      <Imagem style={styles.logo} source={require('../../assets/spotify-logo.png')}></Imagem>
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
    fontSize: 16,       
    margin: 2,          
    fontWeight: "bold"   
  },
  TextoStyle2: {
    color: "black",
    fontSize: 14,       
    margin: 10,         
    fontWeight: "bold"
  },
  TextoStyle3: {
    color: "white",
    fontSize: 14,       
    margin: 10,         
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: "grey",
    fontSize: 20,   
    padding: 5, 
    margin: 30        
  },
  button: {
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "#1bc258",
    borderRadius: 40,       
    height: 40,             
    width: 260,             
    marginTop: 150          
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 40,      
    borderWidth: 1, 
    borderColor: "white",
    height: 40, 
    width: 260, 
    marginTop: 10            
  },
  logo: {
    width: 70,              
    height: 70,             
    marginBottom: 20,       
    marginTop: 100          
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%"
  }
});
