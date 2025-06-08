import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/navigation';
import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import DocumentScanner, { ScanDocumentResponse } from 'react-native-document-scanner-plugin';
import { createPdf } from 'react-native-images-to-pdf';
import * as FileSystem from 'expo-file-system';

export const CameraScannerView = () => {
  const [scannedImage, setScannedImage] = useState<string[] | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const scanDocument = async (): Promise<void> => {
    // start the document scanner

    try {
      //   const result:ScanDocumentResponse = await DocumentScanner.scanDocument();
      const { scannedImages, status }: ScanDocumentResponse | undefined =
        await DocumentScanner.scanDocument();

      if (scannedImages && scannedImages?.length > 0) {
        setScannedImage(scannedImages);
      }

      if (status === 'success') {
        // console.log(scannedImages);
        const result = await createPdf({
          pages: scannedImages?.map((imagePath) => ({ imagePath })) || [],
          outputPath: `${FileSystem.cacheDirectory}output.pdf`,
        });

        // console.log(result);
        navigation.navigate('Import_Documents');
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
    <View>
      <Text>Scanning document...</Text>
    </View>
  );
};
