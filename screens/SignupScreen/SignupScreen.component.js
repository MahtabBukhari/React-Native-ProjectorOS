import { View, Text, SafeAreaView, TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View style={tw.style('flex-1 bg-white',{backgroundColor: COLORS.bg})}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`}
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center mb-3`}>
            <Image source={require('../../assets/images/signup.png')} 
                style={{width: 200, height: 130}} />
        </View>
      </SafeAreaView>
      <View 
        style={tw.style('flex-1 bg-white px-8 pt-8',{borderTopLeftRadius: 50, borderTopRightRadius: 50})}
      >
        <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4`}>Full Name</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
                value="john snow"
                placeholder='Enter Name'
            />
            <Text style={tw`text-gray-700 ml-4`}>Email Address</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
                value="john@gmail.com"
                placeholder='Enter Email'
            />
            <Text style={tw`text-gray-700 ml-4`}>Password</Text>
            <TextInput
                style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7`}
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity
                style={tw`py-3 bg-yellow-400 rounded-xl`}
            >
                <Text style={tw`font-xl font-bold text-center text-gray-700`}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
       {/* <Text style={tw`text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View style={tw`flex-row justify-center space-x-12">
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    style={tw`w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    style={tw`w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    style={tw`w-10 h-10" />
            </TouchableOpacity>
  </View>*/}
        <View style={tw`flex-row justify-center mt-7`}>
            <Text style={tw`text-gray-500 font-semibold`}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                <Text style={tw`font-semibold text-yellow-500`}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}