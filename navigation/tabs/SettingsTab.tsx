import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Pressable } from 'react-native';

export const SettingsTab = () => {
  const clearDocs = async () => {
    await AsyncStorage.clear();

    console.log('Files Cleared');
  };
  return (
    <View>
      <Text>SettingsTabView</Text>

      <Pressable onPress={clearDocs} className="w-1/3  bg-red-500 p-5 ">
        <Text>CLEAR DOCS BUTTON</Text>
      </Pressable>
    </View>
  );
};
