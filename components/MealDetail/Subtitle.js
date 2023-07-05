import { View, Text, StyleSheet } from "react-native";

function Subtitle ({children}) {
 return(
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle} >{children}</Text>
    </View>
 )
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',  
    },
    subtitleContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 6,
       marginHorizontal: 12,
       marginVertical: 4,
    }
});