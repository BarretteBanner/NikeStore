import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import ReviewItem from './ReviewItem'
import { withNavigation } from 'react-navigation'


class Reviews extends React.Component{
    state ={
        expanded: 'false',
        reviews: []
    }

    componentDidMount() {
        this.getReviews()
    }
    getReviews = () => {
        fetch(`http://localhost:3000/get-reviews-${this.props.item.id}`)
        .then(resp => resp.json())
        .then(reviews => this.setState({reviews: reviews}))
    }

    handlePress = () => {
        if(this.state.expanded === 'false'){
            this.setState({expanded: 'true'})
        } else{
            this.setState({expanded: 'false'})
        }
    }
    render(){
        console.log(this.state.reviews)
        let component = null
        let component2 = null
        if(this.state.expanded === 'true'){
            component = <FlatList 
                            data={this.state.reviews}
                            keyExtractor={(review) => review.id.toString()}
                            renderItem={(review) => {
                                return <ReviewItem review={review.item} />
                            }}
                        />
            component2 = <TouchableOpacity onPress={() => this.props.navigation.navigate('NewReview', {item: this.props.item})}>
                        <Text style={styles.write}>Write a Review</Text>
                    </TouchableOpacity>
        }
        return(
            <View>
                <View style={styles.component}>
                    <Text style={styles.text}>Reviews({this.state.reviews.length})</Text>
                    <TouchableOpacity style={styles.icon} onPress={() => this.handlePress()}>
                        <AntDesign name='down' size={30} />
                    </TouchableOpacity>
                </View>
                {component2}
                {component}
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    component:{
        height: 60,
        backgroundColor: 'white',
        paddingLeft: '5%'
    },
    text:{
        fontSize: 25,
        marginTop: '2.5%'
    },
    icon:{
        position: 'absolute',
        marginLeft: '90%',
        marginTop: '5%'
    },
    write:{
        textDecorationLine: 'underline',
        fontSize: 20,
        marginTop: '5%',
        marginBottom: '10%',
        marginLeft: '5%'
    }
})

export default withNavigation(Reviews)