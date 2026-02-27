import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
    return (
        <View>
            <Text>Index</Text>
            <Link href="/cookieclicker/cookies">Cookie Clicker</Link>
            <Link href="/cookieclicker/cookies2">Cookie Clicker 2</Link>
            <Link href="/styling/grid">Grid 4x4</Link>
            <Link href="/styling/bolinhas">Bolinhas</Link>            
        </View>
    );
}
