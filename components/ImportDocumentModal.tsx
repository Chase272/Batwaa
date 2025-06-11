import { useState } from 'react';
import {
  Modal,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FileMeta } from 'types/file';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as FileSystem from 'expo-file-system';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList, RootStackParamList } from 'types/navigation';

function ImportDocumentModal() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const route = useRoute<RouteProp<HomeStackParamList, 'ImportDocument'>>();

  const { document_uri, file_name } = route.params;
  const [form, setForm] = useState({ name: '', group: '', file: document_uri });

  const saveFileMetadata = async (fileUri: string, category: string, name: string) => {
    const destPath = `${FileSystem.documentDirectory}${name}.pdf`;
    // AsyncStorage.clear();
    await FileSystem.copyAsync({
      from: fileUri,
      to: destPath,
    });
    const newFileMeta: FileMeta = {
      id: '1',
      uri: destPath,
      name,
      category,
      createdAt: new Date().toISOString(),
    };

    const existing = await AsyncStorage.getItem('FILES_METADATA');
    const metadataList = existing ? JSON.parse(existing) : [];

    metadataList.push(newFileMeta);
    await AsyncStorage.setItem('FILES_METADATA', JSON.stringify(metadataList));
  };

  const saveDocuments = async () => {
    await saveFileMetadata(document_uri, form.group, form.name);
    navigation.navigate('Home');
    setForm({ name: '', group: '', file: '' });
  };

  return (
    <>
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        // onRequestClose={() => dismissModal()}
      > */}
      <TouchableWithoutFeedback>
        <View className="flex-1 items-center justify-center bg-black/50 px-4">
          <TouchableWithoutFeedback>
            <View className="w-full  max-w-md rounded-xl bg-white  p-6">
              <Text className="mb-6 text-center text-3xl font-bold">Add Document From Files</Text>
              <Text>Document Name</Text>
              <TextInput
                placeholder="Document Name"
                className="mb-3 rounded-md border border-gray-300 px-3 py-2"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
              />
              <Text>Document Group</Text>
              <TextInput
                placeholder="Document Group"
                className="mb-3 rounded-md border border-gray-300 px-3 py-2"
                value={form.group}
                onChangeText={(text) => setForm((prev) => ({ ...prev, group: text }))}
              />

              <Text className="mb-2 text-sm font-medium">Uploaded Document File</Text>
              <View className="mb-4 rounded-md bg-gray-100 p-3">
                <Text className="text-gray-500">{file_name || document_uri.split('/').pop()}</Text>
              </View>

              <Pressable className="rounded-md bg-green-600 py-2" onPress={() => saveDocuments()}>
                <Text className="text-center font-semibold text-white">Submit</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {/* </Modal> */}
    </>
  );
}

export default ImportDocumentModal;
