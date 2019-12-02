import React from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button} from 'react-native'

export default class AddBenefitForm extends React.Component{
    state = {
        item_id: 1,
        benefit: 'GORE-TEX in the upper helps keep your feet dry even in wet conditions.'
    }

    handleSubmit = () => {
        fetch(`http://localhost:3000/create-benefit`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              item_id: this.state.item_id,
              benefit: this.state.benefit
            })
        })
    }
    render(){
        return(
            <View style={styles.screen}>
                <ScrollView>
                    <TextInput 
                            //placeholder='Name'
                            value={this.state.item_id.toString()}
                            onChangeText={newTerm => this.setState({item_id: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <TextInput 
                            //placeholder='Ex: Bryce'
                            value={this.state.benefit}
                            onChangeText={newTerm => this.setState({benefit: newTerm})}
                            style={styles.input}
                            multiline
                    />
                    <View>
                        <Button 
                            title='Submit'
                            onPress={() => this.handleSubmit()}
                        />
                    </View>
                    
                </ScrollView>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
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