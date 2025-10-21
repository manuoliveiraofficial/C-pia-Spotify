import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import Texto from '../components/texto';
import Imagem from '../components/imagem';

export default function PaginaInicial() {
    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Imagem style={styles.fotoDePerfil} source={require('../../assets/foto-de-perfil.png')}></Imagem>
                <Texto text="Sua Biblioteca" style={styles.textoCabecalho}></Texto>
                <Imagem style={styles.iconGrande} source={require('../../assets/lupa.png')}></Imagem>
                <Imagem style={styles.iconGrande} source={require('../../assets/mais.png')}></Imagem>
            </View>

            <View style={styles.topicos}>
                <Pressable style={styles.topicosFundo}> <Texto text="Playlist" style={styles.textoTopicos}></Texto> </Pressable>
                <Pressable style={styles.topicosFundo}> <Texto text="Álbuns" style={styles.textoTopicos}></Texto> </Pressable>
                <Pressable style={styles.topicosFundo}><Texto text="Artistas" style={styles.textoTopicos}></Texto> </Pressable>
            </View>

            <View style={styles.recentes}>
                <Imagem style={styles.iconPequeno} source={require('../../assets/setas.png')}></Imagem>
                <Texto text="Recentes" style={styles.recenteTexto}></Texto>
                <Imagem style={styles.iconPequeno} source={require('../../assets/quadrados.png')}></Imagem>
            </View>

            <View style={styles.musica}>
                <Imagem style={styles.capaMusica} source={require('../../assets/musica-trem-bala.png')}></Imagem>
                <View>
                    <Texto text="Trem Bala" style={styles.tituloMusica}></Texto>
                    <Texto text="Música • Ana Vilela" style={styles.descricaoMusica} ></Texto>
                </View>
            </View>
             <View style={styles.musica}>
                <Imagem style={styles.capaMusica} source={require('../../assets/SAD.png')}></Imagem>
                <View>
                    <Texto text="?" style={styles.tituloMusica}></Texto>
                    <Texto text="2018 • Álbum" style={styles.descricaoMusica} ></Texto>
                </View>
            </View>

            <View style={styles.Rodape}>
                <View style={styles.itemRodape}>
                    <Imagem style={styles.iconGrande}  source={require('../../assets/casa.png')}></Imagem>
                    <Texto text="Inicio" style={styles.rotuloRodape}></Texto>
                </View>
                <View style={styles.itemRodape}>
                    <Imagem style={styles.iconGrande} source={require('../../assets/lupa.png')}></Imagem>
                    <Texto text="Buscar" style={styles.rotuloRodape}></Texto>
                </View>
                <View style={styles.itemRodape}>
                    <Imagem style={styles.iconGrande} source={require('../../assets/biblioteca.png')}></Imagem>
                    <Texto text="Sua biblioteca" style={styles.rotuloRodape}></Texto>
                </View>
                <View style={styles.itemRodape}>
                    <Imagem style={styles.iconGrande} source={require('../../assets/spotify-logo.png')}></Imagem>
                    <Texto text="Premium" style={styles.rotuloRodape}></Texto>
                </View>
                <View style={styles.itemRodape}>
                    <Imagem style={styles.iconGrande} source={require('../../assets/mais.png')}></Imagem>
                    <Texto text="Criar" style={styles.rotuloRodape}></Texto>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        position: "absolute",
        top: '5%'
    },
    textoCabecalho: {
        color: "white",
        fontSize: 23,
        marginLeft: 20,
        marginRight: 40,
        fontWeight: "bold"
    },
    topicos: {
        flexDirection: "row",
        position: "absolute",
        top: '12%',
        marginRight: "30%"
    },
    textoTopicos: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    topicosFundo: {
        backgroundColor: "#1b1b1b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        margin: 5
    },
    fotoDePerfil: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    iconGrande: {
        width: 25,
        height: 25,
        marginTop: 5,
        margin: 10
    },
    iconPequeno: {
        width: 15,
        height: 15,
        marginTop: 12,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: "center",
    },
    recentes: {
        display: "flex",
        flexDirection: "row",
        top: "20%",
        marginLeft: 0,
    },
    recenteTexto: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 250,
    },
    musica: {
        height: 80,
        width: 340,
        flexDirection: "row",
        top: "21%"
    },
    capaMusica: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    tituloMusica: {
        color: "white",
        fontSize: 16,
    },
    descricaoMusica: {
        color: "grey",
        fontSize: 12
    },
    Rodape: {
        flexDirection: 'row',
        bottom: "6%",
        position: "absolute",
        height: 50
    },
    itemRodape: {
        width: 70,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    }, 
    rotuloRodape:{
        color: "grey",
        fontSize: 11
    }
});

