import { Text, Pressable } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/navigation';

function ImportDocumentForm() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const pickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {

        // console.log(result);
        const successResult: DocumentPicker.DocumentPickerSuccessResult = result;
        // setSelectedDocuments(successResult.assets);

        // console.log(successResult.assets[0].uri);
        navigation.navigate('HomeScreen', {
          screen: 'ImportDocument',
          params: { document_uri: successResult.assets[0].uri , file_name: successResult.assets[0].name },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleScanByCamera = () => {
    navigation.navigate('HomeScreen', { screen: 'CameraScannerScreen' });
  };

  return (
    <>
      <Pressable className="m-5 self-center rounded-lg  bg-blue-500 p-8" onPress={pickDocuments}>
        <Text>Import from Storage</Text>
      </Pressable>

      <Pressable
        className="m-5 self-center rounded-lg  bg-blue-500 p-8"
        onPress={handleScanByCamera}>
        <Text>Scan By Camera</Text>
      </Pressable>
    </>
  );
}

export default ImportDocumentForm;
