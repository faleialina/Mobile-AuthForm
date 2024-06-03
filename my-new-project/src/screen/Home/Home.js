import { Button, Image, Text, View, Pressable,TouchableOpacity } from 'react-native'
import styles from './style'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sign in')}>Get started</TouchableOpacity>
        </View>
    )
}
