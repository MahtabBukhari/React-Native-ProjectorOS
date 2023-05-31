import React from 'react'
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/theme";


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Welcome Home Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}