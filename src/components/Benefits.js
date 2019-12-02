import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import BenefitItem from './BenefitItem'
import ProductDetails from './ProductDetails'

export default class Benefits extends React.Component{
    state = {
        benefits: null
    }
    componentDidMount() {
        this.getBenefits()
    }
    getBenefits = () => {
        fetch(`http://localhost:3000/get-benefits-${this.props.item.id}`)
        .then(resp => resp.json())
        .then(benefits => this.setState({benefits: benefits}))
    }
    render(){
        return(
            <View style={styles.component}>
                <Text style={styles.header}>Benefits</Text>
                <FlatList 
                    data={this.state.benefits}
                    keyExtractor={(benefit) => benefit.id.toString()}
                    renderItem={(benefit) => {
                        return <BenefitItem benefit={benefit.item} />
                    }}
                />
                <Text style={styles.header}>Product Details</Text>
                <ProductDetails item={this.props.item}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
        flex: 1,
        //backgroundColor: 'lightblue',
        marginHorizontal: '5%',
    },
    text:{
        fontSize: 17
    },
    header:{
        fontSize: 25,
        marginTop: '5%',
        paddingBottom: '2%'
    }
})