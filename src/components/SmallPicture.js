import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default class SmallPicture extends React.Component{
    state={
        //image: this.props.main_picture
    }
    render(){
        //console.log(this.props.image.picture)
        return(
            // <Image
            //     style={styles.image}
            //     source={{uri: this.props.image.picture}}
            // />
            <View style={styles.imageArea}>
                <Image 
                    style={styles.image}
                    source={{uri: this.props.image.picture}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageArea:{
        height: 80
    },
    image:{
        height: 80, 
        width: 80,
    }
})