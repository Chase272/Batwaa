import { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/navigation';
import { useNavigation } from '@react-navigation/native';

export default function ImportDocsView() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedDocuments, setSelectedDocuments] = useState<DocumentPicker.DocumentPickerAsset[]>(
    []
  );

  const openDocuments = async () => {
    try {
      // const fileUri = await FileSystem.getContentUriAsync(selectedDocuments[0].uri);
      const fileUri = await FileSystem.getContentUriAsync(`${FileSystem.cacheDirectory}output.pdf`);
      // console.log(selectedDocuments[0].uri);

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: fileUri,
        flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        type: 'application/pdf',
      });
    } catch (e) {
      console.log(e);
    }
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

  return (
    <SafeAreaView>
      <View className="p-20">
        <Button title="Pick a document" onPress={pickDocuments} />
        <Text>{selectedDocuments[0]?.uri}</Text>
        <Button title="Open a document" onPress={openDocuments} />
        <View className="p-20"></View>
        <Button
          title="Open a Camera"
          onPress={() => {
            navigation.navigate('HomeScreen', {
              screen: 'CameraScannerScreen',
            });
          }}
        />

        {/* {file && (
        <View style={{ marginTop: 20 }}>
        <Text>Filename: {file.name}</Text>
        <Text>Size: {file.size} bytes</Text>
        <Text>URI: {file.uri}</Text>
        <Text>MIME Type: {file.mimeType}</Text>
        </View>
        )} */}
      </View>
    </SafeAreaView>
  );
}
