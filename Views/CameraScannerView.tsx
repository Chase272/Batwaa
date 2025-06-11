import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList, RootStackParamList } from 'types/navigation';
import { useCallback, useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import DocumentScanner, { ScanDocumentResponse } from 'react-native-document-scanner-plugin';
import { createPdf } from 'react-native-images-to-pdf';
import * as FileSystem from 'expo-file-system';

export const CameraScannerView = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Home');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress).remove();
      };
    }, [navigation])
  );
  const scanDocument = async (): Promise<void> => {
    // start the document scanner

    try {
      //   const result:ScanDocumentResponse = await DocumentScanner.scanDocument();
      const { scannedImages, status }: ScanDocumentResponse | undefined =
        await DocumentScanner.scanDocument();

      if (status === 'success') {
        // console.log(scannedImages);
        const result = await createPdf({
          pages: scannedImages?.map((imagePath) => ({ imagePath })) || [],
          outputPath: `${FileSystem.cacheDirectory}ScannedOutput.pdf`,
        });

        // console.log(result);

        navigation.navigate('HomeScreen', {
          screen: 'ImportDocument',
          params: {
            document_uri: `${FileSystem.cacheDirectory}ScannedOutput.pdf`,
          },
        });
      } else {
        navigation.navigate('Import_Documents');
      }
    } catch (error) {
      console.error('Scan error:', error);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-black/50 px-4">
      <Text className="text-2xl font-bold text-white">Scanning...</Text>
    </View>
  );
};
