import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default class BigPicture extends React.Component{
    render(){
        //console.log(this.props.main_picture)
        return(
            <View style={styles.component}>
                <Image
                style={styles.image}
                source={{uri: this.props.main_picture}}
        />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 300,
        backgroundColor: 'orange',
        //marginHorizontal: '5%'
    },
    image:{
        flex: 1
    }
})