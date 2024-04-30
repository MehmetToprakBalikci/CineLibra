import { Text, TouchableWithoutFeedback, View, Image } from "react-native"
import { TouchableOpacity } from "react-native"

export  const PosterComponent = ({explanation, title}) => {
    return (
        <View style={
            {
            flex: 3,
            flexDirection: 'row',
            backgroundColor: '#D0D0D0',
            marginHorizontal: '5%',
            borderRadius: 10,
            marginVertical: 20,
            shadowColor:'gray',
            shadowOffset:{height:3},
            shadowOpacity:1,
            shadowRadius:5,
        }}>
            <Image source={require('../assets/MVIMG.jpg')} style={{height: 210, width: 140, borderRadius: 10}}/>
            <View style={{flex: 1, marginVertical: '5%', marginHorizontal: '5%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
                <Text style={{marginTop: '5%'}}>{explanation}</Text>
            </View>
        </View>
    )
}
