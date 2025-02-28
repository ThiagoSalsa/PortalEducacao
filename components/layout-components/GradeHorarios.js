import { StyleSheet, View, Text } from "react-native";

const HorarioColumn = ()=>{
    return(
        <View style={styles.column}>
                {/* Índice 'Horários' + Horários */}
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

const DayColumns = (props)=>{
    let horarios = props.horarios;
    let columns = [];
    
    for (const dia in horarios) {
       columns.push(
           <View style={styles.column} key={dia.toString() + '_'}>
               <View style={styles.block} key={dia.toString()}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{dia[0].toUpperCase() + dia[1] + dia[2]}</Text>
                </View>
               {
                   horarios[dia].map((element,index)=>{
                       return(
                            <View style={styles.whiteBlock} key={index}>
                                <Text style={{fontSize:16, fontWeight:'bold'}}>{element}</Text>
                            </View>
                        );
                   })
               }
           </View>
       )
    }
    return columns;
}

const GradeHorarios = (props) =>{
    let horarios = props.horarios;
    return(
        <View style={styles.container}>
           <HorarioColumn/>
           <DayColumns horarios={horarios}/>
        </View>
    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:15,
    },
    column:{
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
    },
    block:{
        width:60,
        height:60,
        backgroundColor:'#C3BBF6',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#7C55E7',
        borderWidth:2,
    },
    whiteBlock:{
        width:60,
        height:60,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#A0A0A0',
        borderWidth:2,
    }

});

export default GradeHorarios;