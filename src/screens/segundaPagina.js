import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Texto from '../components/texto';
import Imagem from '../components/imagem';

export default function SegundaPagina() {
  return (
    <View style={styles.container}>
      <Imagem style={styles.logo} source={require('../../assets/spotify-logo.png')}></Imagem>
      <View style={styles.title}> 
        <Texto text="Entre no Spotify" style={styles.TextoStyle}></Texto>
      </View>

      <View style={styles.button}>
        <Imagem style={styles.icon} source={require('../../assets/email-icon.png')}></Imagem>
        <Texto text="Continuar com o e-mail" style={styles.TextoStyle2}></Texto>
      </View>
      <View style={styles.button2}>
        <Imagem style={styles.icon} source={require('../../assets/celular-logo.png')}></Imagem>
        <Texto text="Continuar com o número de telefone" style={styles.TextoStyle5}></Texto>
      </View>
      <View style={styles.button2}>
        <Imagem style={styles.icon} source={require('../../assets/google-logo.png')}></Imagem>
        <Texto text="Continuar com o Google" style={styles.TextoStyle3}></Texto>
      </View>
      <View style={styles.button2}>
        <Imagem style={styles.icon} source={require('../../assets/facebook-logo.png')}></Imagem>
        <Texto text="Continuar com o Facebook" style={styles.TextoStyle3}></Texto>
      </View>
      <Texto text="Não tem uma conta?" style={styles.TextoStyle4}></Texto>
      <Texto text="Inscrever-se" style={styles.TextoStyle3}></Texto>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  TextoStyle: {
    color: "white",
    fontSize: 30, 
    margin: 2,   
    fontWeight: "bold" 
  },
  TextoStyle2: {
    color: "black",
    fontSize: 13, 
    margin: 10,
    fontWeight: "bold"
  },
TextoStyle3: {
  color: "white",
  fontSize: 13,
  fontWeight: "bold",
  textAlign: "center",
},
  TextoStyle4: {
    color: "white",
    fontSize: 13, 
    margin: 15,   
  },
  TextoStyle5: {
  color: "white",
  fontSize: 13,
  fontWeight: "bold",
  textAlign: "center",
  marginLeft: "30",
  marginRight: "30"
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
    position: "relative",
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "#1bc258",
    borderRadius: 40, 
    height: 40,      
    width: 260,       
    marginTop: 100    
  },
  button2: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#000000ff",
    borderRadius: 40, 
    borderWidth: 1, 
    borderColor: "white",
    height: 40,
    width: 260, 
    marginTop: 5, 
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
    width: '90%'
  },
  icon: {
    position: "absolute",
    top: '25%', 
    left: '6%', 
    width: 20, 
    height: 20, 
  }
});