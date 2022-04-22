import { StyleSheet, View, Text } from "react-native";

const HorarioColumn = ()=>{
    return(
        <View style={styles.column}>
                {/* Índice 'Horários' + Dias da Semana */}
                <View style={styles.block}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Horário</Text>
                </View>
                <View style={styles.block}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>1°</Text>
                </View>
                <View style={styles.block}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>2°</Text>
                </View>
                <View style={styles.block}>
                     <Text style={{fontSize:16, fontWeight:'bold'}}>3°</Text>
                </View>
                <View style={styles.block}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>4°</Text>
                </View>
                <View style={[styles.block,styles.lastBlock]}>
                     <Text style={{fontSize:16, fontWeight:'bold'}}>5°</Text>
                </View>
        </View>
    )
}



const GradeHorarios = (props) =>{
    let horarios = props.horarios;
    return(
        <View style={styles.container}>
           <HorarioColumn/>
         
            


        </View>
    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        
    },
    column:{
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
    },
    block:{
        width:60,
        height:60,
        marginBottom:1,
        backgroundColor:'#C3BBF6',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#7C55E7',
        borderWidth:2,
    },
    lastBlock:{
        borderRightWidth:2,
    }
    

});

export default GradeHorarios;