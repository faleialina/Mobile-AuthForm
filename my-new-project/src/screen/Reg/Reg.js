import { Button, Image, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import { useState } from 'react'

export default function Reg({ navigation }) {
	const [valueInp, setValueInp] = useState({
		first: '',
		last: '',
		email: '',
		password: ''
	})

	const addVall = (vall, name) => {
		setValueInp({ ...valueInp, [name]: vall })
	}

	const checkInps = () => {
		try {
			if (!valueInp.email.trim()) throw new Error('Empty Email')
			if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(valueInp.email)) throw new Error('Email is invalid')
			if (!valueInp.password.trim()) throw new Error('Empty Passwor')
			if (valueInp.password.length < 8) throw new Error('The password is too short')
			if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(valueInp.password)) throw new Error('Password is invalid');
			if (!valueInp.first.trim()) throw new Error('Empty first')
			if (!valueInp.last.trim()) throw new Error('Empty last')

			console.log(`Success ${valueInp}`);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'first')} placeholder='First name' />
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'last')} placeholder='Last name' />
			<Text>Make sure it matches the name on your government ID.</Text>
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'email')} placeholder='Email' />
			<Text>We will email you trip confirmations and receipts.</Text>
			<TextInput style={styles.inp} onChangeText={(vall) => addVall(vall, 'password')} placeholder='Password' secureTextEntry={true} />
			<View style={styles.blocFooter}>
				<Text style={styles.textFooter}>Don’t have an account ?<Text onPress={() => navigation.navigate('Sign in')}> Sign In</Text> </Text>
				<TouchableOpacity style={styles.btn} onPress={checkInps}>Agree and continue</TouchableOpacity>
			</View>
		</View>
	)
}
