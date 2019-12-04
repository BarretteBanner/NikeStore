import React from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

export default class AddReview extends React.Component{
    state={
        id: this.props.navigation.state.params.item.id,
        header: null,
        rating: null,
        review: null
    }

    handleSubmit = () => {
        fetch(`http://localhost:3000/create-review`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              item_id: this.state.id,
              header: this.state.header,
              rating: this.state.rating,
              review: this.state.review,
            })
        })
    }
    render(){
        return(
            <View style={styles.screen}>
                <Text>Add Review</Text>
                <Text>{this.props.navigation.state.params.item.name}</Text>
                <TextInput 
                    placeholder='Rating 1-5'
                    value={this.state.rating}
                    onChangeText={newTerm => this.setState({rating: newTerm})}
                    style={styles.input1}
                    multiline
                />
                <TextInput 
                    placeholder='Header'
                    value={this.state.header}
                    onChangeText={newTerm => this.setState({header: newTerm})}
                    style={styles.input1}
                    multiline
                />
                 <TextInput 
                    placeholder='Review'
                    value={this.state.review}
                    onChangeText={newTerm => this.setState({review: newTerm})}
                    style={styles.input}
                    multiline
                />
                <View>
                    <Button 
                        title='Submit'
                        onPress={() => this.handleSubmit()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input1:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: '5%',
        marginVertical: '2.5%'
    },
    input:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: '5%',
        marginVertical: '2.5%'
    },
    screen:{
        height: '100%'
    }
})