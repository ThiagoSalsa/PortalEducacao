import React, {Component, useEffect} from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import BoxFunction from '../layout-components/BoxFunction';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CriarAtividade from './CriarAtividade';
import { auth } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import ipv4 from 'PortalEducacaoBack/ipv4.json'; 

export default function ProfScreen(){

    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();
    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
                <Icon
                    containerStyle={{alignSelf:'flex-start'}}
                    name="arrow-back"
                    type="material"
                    size={40}
                    color='#B088F7'
                    onPress={()=>{
                        navigation.navigate('loginprof');
                    }}
                ></Icon>

                <Text style={{color:'#2A3A4E', fontWeight:'bold', fontSize:30, marginBottom:15, marginTop:20,}}>Portal Do Professor</Text>

                <Text style={styles.title}>Menu do Professor</Text>

                <View style={styles.containerFunctions}>
                    <BoxFunction onPress="Criar Atividade" nameIcon="book" functionBox="Criar Atividade"/>
                    <BoxFunction onPress="Postar Conteudo" nameIcon="folder" functionBox="Postar Material"/>
                    <BoxFunction onPress="Cronograma De Aula" nameIcon="alarm" functionBox="Horários"/>
                    <BoxFunction onPress="Acesso Duvidas" nameIcon="contacts" functionBox="Fórum de Duvidas"/>
                </View>          
       </ScrollView>
    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       flexDirection:'column',
       backgroundColor:'#FFFFFF',
       paddingLeft:30,
       paddingRight:30,
       paddingBottom:30, 
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:35,
        color:'#8A4AF5',
    },
    containerFunctions: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:15,
        marginRight:15,
    },
}
);