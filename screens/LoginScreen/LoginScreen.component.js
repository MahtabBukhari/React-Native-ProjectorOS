
import { View, Text,SafeAreaView,TouchableOpacity,StyleSheet,Image,TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
   
    <View  style={tw.style('flex-1 bg-white',{backgroundColor: COLORS.bg})} >
      <SafeAreaView  style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image source={require('../../assets/images/login.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={tw.style('flex-1 bg-white px-8 pt-8',{borderTopLeftRadius: 50, borderTopRightRadius: 50})} 
        >
          <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4`}>Email Address</Text>
            <TextInput 
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`}
              placeholder="email"
              value="john@gmail.com" 
            />
            <Text style={tw`text-gray-700 ml-4`}>Password</Text>
            <TextInput 
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`}
              secureTextEntry
              placeholder="password"
              value="test12345" 
            />
            <TouchableOpacity className="flex items-end">
              <Text style={tw`text-gray-700 mb-5`}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={tw`py-3 bg-yellow-400 rounded-xl`}>
                <Text 
                style={tw`text-xl font-bold text-center text-gray-700`}
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          
        { /*
        <Text style={tw`text-xl text-gray-700 font-bold text-center py-5`}>Or</Text>
        <View style={tw`flex-row justify-center space-x-12`}>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require('../../assets/icons/google.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require('../../assets/icons/apple.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require('../../assets/icons/facebook.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
  </View>*/}
          <View style={tw`flex-row justify-center mt-7`}>
              <Text style={tw`text-gray-500 font-semibold`}>
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignupScreen')}>
                  <Text style={tw`font-semibold text-yellow-500`}> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
  
    
  )
}


