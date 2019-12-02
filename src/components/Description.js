import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Benefits from './Benefits'

export default class Description extends React.Component{
    state={
        showBenefits: 'no'
    }
    
    clickedShow = () => {
        if (this.state.showBenefits === 'no'){
            this.setState({showBenefits: 'yes'})
        } else if (this.state.showBenefits == 'yes'){
            this.setState({showBenefits: 'no'})
        }
    }
    render(){
        let component = null
        let component2 = <Text style={styles.readMore}>Show more</Text>
        if (this.state.showBenefits === 'yes'){
            component = <Benefits item={this.props.item}/>
            component2 = <Text style={styles.readMore}>Show less</Text>
        }

        return(
            <View style={styles.component}>
                <Text style={styles.text}>{this.props.item.description}</Text>
                     {component}
                <TouchableOpacity onPress={() => this.clickedShow()}>
                    {component2}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
        backgroundColor: 'white'
    },
    text:{
        fontSize: 17,
        marginHorizontal: '5%',
        lineHeight: 34,
        marginTop: '10%'
    },
    readMore:{
        textDecorationLine: 'underline',
        marginVertical: '5%',
        marginLeft: '5%',
        fontSize: 17
    }
})