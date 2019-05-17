import React from 'react'
import Style from "../../../styles/Style";
import {TextInput, Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import validate from 'validate.js'
import {loginUser} from '../../../api/user_api'
import deviceStorage from '../../../services/DeviceStorage'

/**
 * Constraints for form validation
 * @type {{password: {length: {message: string, minimum: number}, presence: {message: string}}, email: {presence: {message: string}, email: {message: string}}}}
 */
const constraints = {
    email: {
        presence: {
            message: "Cannot be blank."
        },
        email: {
            message: 'Please enter a valid email address'
        }
    },
    password: {
        presence: {
            message: "Cannot be blank."
        },
        length: {
            minimum: 5,
            message: 'Your password must be at least 5 characters'
        }
    },
}

/**
 * Check form data
 * @param field
 * @param value
 * @returns {null|*}
 */
const validator = (field, value) => {
    let object = {}
    object[field] = value

    let constraint = constraints[field]

    const result = validate(object, { [field]: constraint })

    if (result) {
        return result[field][0]
    }

    return null
}


export default class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: null,
            email: 'alexis@gmail.com',
            passwordError: null,
            password: '55555',
            token: '',
        }
        this.connectUser.bind(this)
    }

    checkFormData = () => {
        const emailError = validator('email', this.state.email)
        const passwordError = validator('password', this.state.password)

        this.setState({
            emailError: emailError,
            passwordError: passwordError,
        })

        if (!emailError && !passwordError) {
           this.connectUser()
        }
    };

    /**
     * Fonction call the api to connect the user then will store the data received
     */
    connectUser = () => {
        loginUser(this.state.email, this.state.password).then((result) => {
           deviceStorage.saveItem("id_token", JSON.stringify(result.token));
            deviceStorage.saveItem('nomUser', JSON.stringify(result.nom));
            deviceStorage.saveItem("prenomUser", JSON.stringify(result.prenom));
            deviceStorage.saveItem("dateNaissance", JSON.stringify(result.dateNaissance));
            deviceStorage.saveItem("genre", JSON.stringify(result.genre));
            deviceStorage.saveItem("mail", JSON.stringify(result.mail));

            this.setState({token: result.token});
            this.props.navigation.navigate('TabBar');
        })
    };

    render() {
        const {emailError, passwordError} = this.state
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, backgroundColor: Style.darkpurple}}>
                <Text
                    style={{fontSize: 20, color: Style.white, marginTop: 10, textAlign: 'center', fontWeight: 'bold'}}>
                    Connection
                    {this.state.token}
                </Text>
                <Text style={styles.labelInput}>Email: </Text>
                <TextInput style={styles.inputStyle}  onChangeText={(email) => this.setState({email})} value={this.state.email} textContentType='emailAddress'/>
                <Text style={styles.errorMessage}> {emailError ? emailError : null }</Text>
                <Text style={styles.labelInput}>Mot de passe: </Text>
                <TextInput style={styles.inputStyle} onChangeText={(password) => this.setState({password})} value={this.state.password} secureTextEntry={true} />
                <Text style={styles.errorMessage}> {passwordError ? passwordError : null }</Text>
                <TouchableOpacity style={styles.buttonNext} onPress={this.checkFormData}>
                    <Text style={{color: Style.white, fontWeight: 'bold'}}>Valider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigate('Registration')}>
                    <Text style={{color: Style.white, fontWeight: 'bold'}}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    labelInput: {
        marginLeft: 20, color: Style.white, fontSize: 18, fontWeight: 'bold'
    },
    inputStyle: {
        backgroundColor: Style.lightpurple,
        marginHorizontal: 20,
        marginVertical: 7,
        height: 35,
        padding: 5,
        color: Style.white
    },
    buttonNext: {
        marginTop: 40,
        backgroundColor: Style.bluegreen,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        color: Style.white,
    },
    errorMessage: {
        color: '#DC143C',
        marginLeft: 20
    },
    buttonRegister: {
        marginTop: 15,
        backgroundColor: '#DC143C',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        color: Style.white,
    },
});