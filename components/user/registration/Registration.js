import React from 'react'
import Style from "../../../styles/Style";
import {TextInput, Text, Picker, StyleSheet, TouchableOpacity, View} from 'react-native'
import DatePicker from 'react-native-datepicker'
import { addUser } from "../../../api/user_api";
import moment from 'moment'
import validate from 'validate.js'

/**
 * Form's constraints
 * @type {{password: {length: {message: string, minimum: number}, presence: {message: string}}, prenom: {presence: {message: string}}, nom: {presence: {message: string}}, email: {presence: {message: string}, email: {message: string}}}}
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
    prenom: {
        presence: {
            message: "Cannot be blank."
        }
    },
    nom: {
        presence: {
            message: "Cannot be blank."
        }
    }
}

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


export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: null,
            email: null,
            passwordError: null,
            password: null,
            nomError: null,
            nom: null,
            prenomError: null,
            prenom: null,
            dateNaissance: moment(new Date()).format("DD-MM-YYYY"),
            genre: 'H',
            resultMessage: ''
        }
        this.saveUser.bind(this)
    }

    /**
     * Check form's data
     */
    checkFormData = () => {
        const emailError = validator('email', this.state.email)
        const passwordError = validator('password', this.state.password)
        const nomError = validator('nom', this.state.nom)
        const prenomError = validator('prenom', this.state.prenom)

        this.setState({
            emailError: emailError,
            passwordError: passwordError,
            nomError: nomError,
            prenomError: prenomError
        })

        if (!emailError && !passwordError && !nomError && !prenomError) {
            this.saveUser()
        }
    };

    /**
     * Call to the API to save the user in the db
     */
    saveUser = () => {
        addUser(this.state.prenom, this.state.nom, this.state.email, this.state.password, this.state.genre, moment(this.state.dateNaissance, 'DD-MM-YYYY').format('YYYY-MM-DD')).then((result) => {
            if (!result.success) {
                this.setState({resultMessage: result.message})
            } else {
                this.props.navigation.navigate('Login')
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }

    render() {
        const {emailError, passwordError, nomError, prenomError} = this.state
        return (
            <View style={{flex: 1, backgroundColor: Style.darkpurple}}>
                <Text
                    style={{fontSize: 20, color: Style.white, marginTop: 10, textAlign: 'center', fontWeight: 'bold'}}>
                    Inscription
                </Text>
                <Text style={styles.labelInput}>Nom: </Text>
                <TextInput style={styles.inputStyle} onChangeText={(nom) => this.setState({nom})} value={this.state.nom} />
                <Text style={styles.errorMessage}> {nomError ? nomError : null }</Text>
                <Text style={styles.labelInput}>Prénom: </Text>
                <TextInput style={styles.inputStyle} onChangeText={(prenom) => this.setState({prenom})} value={this.state.prenom} />
                <Text style={styles.errorMessage}> {prenomError ? prenomError : null }</Text>
                <Text style={styles.labelInput}>Email: </Text>
                <TextInput style={styles.inputStyle}  onChangeText={(email) => this.setState({email})} value={this.state.email} textContentType='emailAddress'/>
                <Text style={styles.errorMessage}> {emailError ? emailError : null }</Text>
                <Text style={styles.labelInput}>Mot de passe: </Text>
                <TextInput style={styles.inputStyle} onChangeText={(password) => this.setState({password})} value={this.state.password} secureTextEntry={true} />
                <Text style={styles.errorMessage}> {passwordError ? passwordError : null }</Text>
                <Text style={styles.labelInput}>Genre: </Text>
                <Picker style={{ marginLeft: 20, color: Style.white}} itemStyle={{color: Style.white}} selectedValue={this.state.genre}
                        onValueChange={(genre) => {
                            this.setState({genre: genre})
                        }}
                >
                    <Picker.Item label="Homme" value="H"/>
                    <Picker.Item label="Femme" value="F"/>
                </Picker>
                <Text style={styles.labelInput}>Date de naissance: </Text>
                <DatePicker
                    style={{ marginLeft: 20 }}
                    mode="date"
                    placeholder="select date"
                    date={this.state.dateNaissance}
                    format="DD-MM-YYYY"
                    confirmBtnText="Valider"
                    cancelBtnText="Annuler"
                    showIcon={false}
                    customStyles={{
                        placeholderText: {
                            color: Style.white
                        },
                        dateText: {
                            color: Style.white
                        }
                    }}
                    onDateChange={(dateNaissance) => {
                        this.setState({dateNaissance: dateNaissance})
                    }}
                />
                <Text>{this.state.resultMessage}</Text>
                <TouchableOpacity style={styles.buttonNext} onPress={this.checkFormData}>
                    <Text style={{color: Style.white, fontWeight: 'bold'}}>Valider</Text>
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
    }
});