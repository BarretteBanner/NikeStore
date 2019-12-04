import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class SizeSelector extends React.Component{
    render(){
        let component
        if (this.props.size !== null){
            component = this.props.size
        } else {
            component = 'No Size Selected'
        }
        return(
            <View style={styles.component}>
                {/* In future create thing in backend for shoe sizes 
                and map through those creating these in 2 columns do it 
                by having one item have two things. A first size and second
                so basically one item is one row which has two sizes*/}
                <Text style={styles.header}>Select Size</Text>
                <Text style={styles.header}>{component}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 6 / W 7.5')}>
                        <View>
                            <Text style={styles.text}>M 6 / W 7.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 6.5 / W 8')}>
                        <View>
                            <Text style={styles.text}>M 6.5 / W 8</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 7 / W 8.5')}>
                        <View>
                            <Text style={styles.text}>M 7 / W 8.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 7.5 / W 9')}>
                        <View>
                            <Text style={styles.text}>M 7.5 / W 9</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 8 / W 9.5')}>
                        <View>
                            <Text style={styles.text}>M 8 / W 9.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 8.5 / W 10')}>
                        <View>
                            <Text style={styles.text}>M 8.5 / W 10</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 9 / W 10.5')}>
                        <View>
                            <Text style={styles.text}>M 9 / W 10.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 9.5 / W 11')}>
                        <View>
                            <Text style={styles.text}>M 9.5 / W 11</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 10 / W 11.5')}>
                        <View>
                            <Text style={styles.text}>M 10 / W 11.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 10.5 / W 12')}>
                        <View>
                            <Text style={styles.text}>M 10.5 / W 12</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 11 / W 12.5')}>
                        <View>
                            <Text style={styles.text}>M 11 / W 12.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 11.5 / W 13')}>
                        <View>
                            <Text style={styles.text}>M 11.5 / W 13</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 12 / W 13.5')}>
                        <View>
                            <Text style={styles.text}>M 12 / W 13.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 12.5 / W 14')}>
                        <View>
                            <Text style={styles.text}>M 12.5 / W 14</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 13 / W 14.5')}>
                        <View>
                            <Text style={styles.text}>M 13 / W 14.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 14 / W 15.5')}>
                        <View>
                            <Text style={styles.text}>M 14 / W 15.5</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.border} onPress={() => this.props.shoeSize('M 15 / W 16.5')}>
                        <View>
                            <Text style={styles.text}>M 15 / W 16.5</Text>
                        </View>
                    </TouchableOpacity>
                   
                        <View style={styles.lastItem}>
                           
                        </View>
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
        //backgroundColor: 'purple',
        marginHorizontal: '5%',
        marginBottom: '5%',
        marginTop: '10%'
    },
    row:{
        flexDirection: 'row',
        width: '100%',
        //backgroundColor: 'pink',
        justifyContent: 'space-evenly',
        height: 50
    },
    border:{
       borderColor: 'grey',
       borderWidth: 1,
       width: '45%',
    },
    text:{
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: '9%'
    },
    lastItem:{
        width: '45%'
    },
    header:{
        fontSize: 17,
        marginLeft: '5%',
        marginBottom: '5%'
    }
})