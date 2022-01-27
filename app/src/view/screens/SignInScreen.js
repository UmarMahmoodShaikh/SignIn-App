import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/color'
import STYLES from '../../styles/index.';
function SignInScreen({navigation}) {
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
                        Welcome Back!
                    </Text>
                    <Text  style={{ fontWeight: 'bold', fontSize: 17, color: COLORS.light }}>
                        SignIn to Continue
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={ STYLES.inputContainer }>
                        <Icon name="mail-outline" size={20} color={ COLORS.light } style={ STYLES.inputIcon } />
                        <TextInput placeholder='Enter Email' style={ STYLES.input } />
                    </View>
                    <View style={ STYLES.inputContainer }>
                        <Icon name="smartphone" size={20} color={ COLORS.light } style={ STYLES.inputIcon } />
                        <TextInput placeholder='Enter Phone Number'  style={ STYLES.input } />
                    </View>
                    <View style={ STYLES.btnPrimary }>
                        <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }}>
                            Signin
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={ STYLES.line }></View>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}> OR </Text>
                        <View style={ STYLES.line }></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={ STYLES.btnSecondary }>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> With </Text>
                            <Icon name='facebook'  />
                        </View>
                        <View style={{ width : 10}} />
                        <View style={ STYLES.btnSecondary }>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> With </Text>
                            <MaterialIcon name='google'  />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 40, marginBottom: 20}}>
                    <Text style={{ fontWeight : 'bold', color: COLORS.light}} >New user!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ fontWeight : 'bold', color: COLORS.pink}} > SignUp</Text> 
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 40, marginBottom: 20}}>
                    <Text style={{ fontWeight : 'bold', color: COLORS.light}} >Back to</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
                        <Text style={{ fontWeight : 'bold', color: COLORS.pink}} > LandingScreen </Text> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
    );
}
export default SignInScreen;