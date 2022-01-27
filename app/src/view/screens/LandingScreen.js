import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/color'
import STYLES from '../../styles/index.';
function LandingScreen (navigation) {
    return (
        <>
        
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS }}>
            <Text>WELCOME TO SIMPLE LOGIN APP</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={{ fontWeight : 'bold', color: COLORS.pink}} > SignIn</Text> 
            </TouchableOpacity>
        </SafeAreaView>
        </>
        
    )
}
export default LandingScreen;
