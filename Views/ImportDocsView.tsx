import { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as WebBrowser from 'expo-web-browser';

export default function ImportDocsView() {
  const [selectedDocuments, setSelectedDocuments] = useState<DocumentPicker.DocumentPickerAsset[]>(
    []
  );
  const openPdf = async () => {
    if (selectedDocuments.length > 0) {
      await WebBrowser.openBrowserAsync(selectedDocuments[0].uri);
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

        console.log(selectedDocuments[0].uri);
        // await WebBrowser.openBrowserAsync(selectedDocuments[0].uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View className="p-20">
        <Button title="Pick a document"  onPress={pickDocuments} />
        <Text>{selectedDocuments[0]?.uri}</Text>
        <Button title="Open PDF in Browser" onPress={openPdf} />
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
