import React from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button} from 'react-native'

export default class AddPictureForm extends React.Component{
    state = {
        item_id: 2,
        picture: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jhkfwpq4teu19skphi0u/air-zoom-pegasus-36-trail-gore-tex-trail-running-shoe-fBlFg6.jpg'

    }

    handleSubmit = () => {
        fetch(`http://localhost:3000/create-picture`, {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              item_id: this.state.item_id,
              picture: this.state.picture
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
                            value={this.state.picture}
                            onChangeText={newTerm => this.setState({picture: newTerm})}
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