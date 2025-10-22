
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

import {  Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  black: '#000000',
  darkGray: '#121212', 
  mediumGray: '#282828',
  lightGray: '#B3B3B3', 
  white: '#FFFFFF',
  purple: '#B0AAEF', 
};


const USER_DATA = {
  name: 'Yaslisboa',
  subtitle: 'Ver perfil',
};

const MenuItem = ({ icon, label, action, hasPremiumButton = false, isLast = false, color = COLORS.white }) => (
  <TouchableOpacity 
    style={[styles.menuItem, isLast && { marginBottom: 30 }]} 
    onPress={action}
    activeOpacity={0.7}
  >
    {/* Ícone */}
    <View style={styles.menuIcon}>
      <MaterialCommunityIcons name={icon} size={24} color={color} />
    </View>
    
    {/* Label */}
    <Text style={styles.menuLabel}>{label}</Text>
    
    {/* Botão Premium (opcional) */}
    {hasPremiumButton && (
      <View style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Universitário</Text>
      </View>
    )}
  </TouchableOpacity>
);


export default function SettingsMenuScreen() {
    
    const handleAction = (item) => {
        alert(`Ação de: ${item}`);
    };
    
    const ProfileIcon = () => (
        <Ionicons name="person-circle-sharp" size={60} color={COLORS.lightGray} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.darkGray} />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                
                {/* 1. SEÇÃO DO PERFIL */}
                <View style={styles.profileSection}>
                    <ProfileIcon />
                    <View style={styles.profileTextContainer}>
                        <Text style={styles.profileName}>{USER_DATA.name}</Text>
                        <Text style={styles.profileSubtitle}>{USER_DATA.subtitle}</Text>
                    </View>
                </View>

                <View style={styles.menuList}>
                    <MenuItem 
                        icon="plus-circle-outline" 
                        label="Adicionar conta" 
                        action={() => handleAction('Adicionar conta')}
                        color={COLORS.lightGray} 
                    />
                    <MenuItem 
                        icon="spotify" 
                        label="Seu Premium" 
                        action={() => handleAction('Seu Premium')}
                        hasPremiumButton={true}
                    />
                    <MenuItem 
                        icon="flash-outline" 
                        label="Novidades" 
                        action={() => handleAction('Novidades')}
                    />
                    <MenuItem 
                        icon="chart-timeline-variant" 
                        label="Sua Máquina do Tempo" 
                        action={() => handleAction('Sua Máquina do Tempo')}
                    />
                    <MenuItem 
                        icon="history" 
                        label="Recentes" 
                        action={() => handleAction('Recentes')}
                    />
                    <MenuItem 
                        icon="cog-outline" 
                        label="Configurações e privacidade" 
                        action={() => handleAction('Configurações e privacidade')}
                        isLast={true} 
                    />
                </View>
                
                {/* 3. SEÇÃO DE MENSAGENS */}
                <View style={styles.messageSection}>
                    <Text style={styles.sectionTitle}>Mensagens</Text>
                    <Text style={styles.sectionSubtitle}>
                        Compartilhe com a sua galera o que você adora, direto no Spotify.
                    </Text>
                    
                    <TouchableOpacity 
                        style={styles.newMessageButton}
                        onPress={() => handleAction('Nova mensagem')}
                    >
                        <MaterialCommunityIcons name="pencil-box-outline" size={24} color={COLORS.white} />
                        <Text style={styles.newMessageText}>Nova mensagem</Text>
                    </TouchableOpacity>
                </View>

                {/* Espaçamento final para rolagem */}
                <View style={{ height: 50 }} />
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.darkGray,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  
  // 1. SEÇÃO DO PERFIL
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray, 
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileSubtitle: {
    color: COLORS.lightGray,
    fontSize: 14,
    marginTop: 2,
  },

  // 2. ITENS DE MENU
  menuList: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    width: 30, 
    alignItems: 'center',
  },
  menuLabel: {
    color: COLORS.white,
    fontSize: 16,
    flex: 1, 
    marginLeft: 15,
  },
  premiumButton: {
    backgroundColor: COLORS.purple,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  premiumButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  // 3. SEÇÃO DE MENSAGENS
  messageSection: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: COLORS.lightGray,
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  newMessageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  newMessageText: {
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 15,
  },
});