import { useState } from 'react';
import { Modal, TextInput, View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FileMeta } from 'types/file';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as FileSystem from 'expo-file-system';

function ImportDocumentForm() {
  const [showModal, setShowModal] = useState(true);
  const [selectedDocuments, setSelectedDocuments] = useState<DocumentPicker.DocumentPickerAsset[]>(
    []
  );
  const [form, setForm] = useState({ name: '', group: '', file: '' });

  const saveFileMetadata = async (fileUri: string, category: string, name: string) => {
    const destPath = `${FileSystem.documentDirectory}${name}.pdf`;
    AsyncStorage.clear();
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

    console.log(existing);

    metadataList.push(newFileMeta);
    await AsyncStorage.setItem('FILES_METADATA', JSON.stringify(metadataList));
  };
  const dismissModal = () => {
    setShowModal(false);
    setSelectedDocuments([]);
    setForm({ name: '', group: '', file: '' });
  };

  const pickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        const successResult: DocumentPicker.DocumentPickerSuccessResult = result;
        setSelectedDocuments(successResult.assets);
        // console.log(successResult.assets);

        // const uploaded_file = successResult.assets[0];
        // const newPath = FileSystem.documentDirectory + successResult.assets[0].name;

        // await FileSystem.copyAsync({
        //   from: successResult.assets[0].uri,
        //   to: newPath,
        // });

        // setSelectedDocuments([{ ...successResult.assets[0], uri: newPath }]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveDocuments = async () => {
    await saveFileMetadata(selectedDocuments[0].uri, form.group, form.name);
    dismissModal();
  };

  return (
    <>
      <Pressable
        className="m-5 self-center rounded-lg  bg-blue-500 p-8"
        onPress={() => setShowModal(true)}>
        <Text>Open Modal</Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => dismissModal()}>
        <TouchableWithoutFeedback onPress={() => dismissModal()}>
          <View className="flex-1 items-center justify-center bg-black/50 px-4">
            <View className="w-full  max-w-md rounded-xl bg-white p-6">
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

              <Text className="mb-2 text-sm font-medium">Pin File</Text>
              <View className="mb-4 rounded-md bg-gray-100 p-3">
                <Pressable onPress={pickDocuments}>
                  <Text className="text-gray-500">
                    {selectedDocuments[0]?.name || 'Select Document'}
                  </Text>
                </Pressable>
              </View>

              <Pressable className="rounded-md bg-green-600 py-2" onPress={() => saveDocuments()}>
                <Text className="text-center font-semibold text-white">Submit</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default ImportDocumentForm;
