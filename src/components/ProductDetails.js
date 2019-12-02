import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'

export default class ProductDetailsItem extends React.Component{
    render(){
        return(
            <View style={styles.component}>
                {/* Will have like this `${detailTitle1} ${detail1}` */}
                <View style={styles.view}> 
                    <Entypo name='dot-single' style={styles.icon}/>
                    <Text style={styles.text}>Weight: {this.props.item.weight}</Text>
                </View>
                <View style={styles.view}>
                    <Entypo name='dot-single' style={styles.icon}/>
                    <Text style={styles.text}>Offset: {this.props.item.offset}</Text>
                </View>
                <View style={styles.view}>
                    <Entypo name='dot-single' style={styles.icon}/>
                    <Text style={styles.text}>Style: {this.props.item.style}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
    },
    text:{
        fontSize: 17,
        alignSelf: 'center',
        lineHeight: 34
    },
    icon:{
        fontSize: 30,
        paddingRight: 5,
        textAlignVertical: 'center'
    },
    view:{
        flex: 1,
        flexDirection: 'row'
    }
})