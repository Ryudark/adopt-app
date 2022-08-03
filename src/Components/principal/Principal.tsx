import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Box } from "native-base";

export default function Principal(){

    return (
        <Box style={styles.container}>
            <Text>Principal!</Text>
            <StatusBar style="auto" />
        </Box>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});