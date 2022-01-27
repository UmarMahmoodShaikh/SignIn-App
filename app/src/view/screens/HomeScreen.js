import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/color'
import STYLES from '../../styles/index.';
function HomeScreen ({navigation}) {
    return (
        <>
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.dark }}>Simple</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.secondary }}> APP</Text>
                </View>
            <View style={{ marginTop: 30 }}>
                    <Text  style={{ fontWeight: 'bold', fontSize: 25, color: COLORS.dark }}>
                        Welcome User
                    </Text>
                    <Text  style={{ fontWeight: 'bold', fontSize: 17, color: COLORS.light }}>
                        This is HomeScreen
                    </Text>
                </View>
            <TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
            <View style={ STYLES.btnPrimary }>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: COLORS.pink}}>Logout <Icon name='logout'  /> </Text>
                        </View>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}
export default HomeScreen;
