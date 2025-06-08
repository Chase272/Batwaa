import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import * as IntentLauncher from 'expo-intent-launcher';
import * as FileSystem from 'expo-file-system';
import { RootStackParamList } from 'types/navigation';

export const DocumentView = () => {
  const [DocNumber, setDocNumber] = useState<string>('');
  const [Name, setName] = useState<string>('');
  const [DOB, setDOB] = useState<Date>();
  const [Address, setAddress] = useState<string>('');
  const [MobileNumber, setMobileNumber] = useState<string>('');
  const [DOE, setDOE] = useState<Date>();
  const route = useRoute<RouteProp<RootStackParamList, 'Document'>>();
  const { document } = route.params;

  const openDocuments = async () => {
    try {
      // const fileUri = await FileSystem.getContentUriAsync(selectedDocuments[0].uri);
      const fileUri = await FileSystem.getContentUriAsync(document.uri);
      console.log(document.uri);

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: fileUri,
        flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        type: 'application/pdf',
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="flex-1 bg-green-300">
      <View className="h-1/6 w-full bg-green-300" />
      <Pressable
        className="absolute left-[10%] top-[8%] z-10 h-60 w-4/5 rounded-2xl bg-green-200 p-2"
        onPress={() => {
          openDocuments()
        }}>
        <Text className="mb-2">Doc Number</Text>
        <View style={{ flex: 1, width: '100%' }}></View>
      </Pressable>
      <View className="h-[17%] rounded-t-3xl bg-white" />
      <View className="h-5/6 w-full bg-white p-4">
        <Text>Name: {Name}</Text>
        <Text>Created At: {document.createdAt}</Text>
        <Text>Uri Address: {document.uri}</Text>
      </View>
    </View>
  );
};
