import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export default class WhiteHeart extends React.Component{
    state={
        favorited: 'yes'
    }
    render(){
        return(
            <View style={styles.component}>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => this.props.clicked()}
            >
                <Text style={styles.text}>Favorite</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
component:{
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center'
},
button:{
    height: 60,
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 60,
    marginHorizontal: '5%',
    justifyContent: 'center'
},
text:{
    textAlign: 'center',
    fontSize: 17
}
})