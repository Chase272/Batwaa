import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import DocumentScanner, { ScanDocumentResponse } from 'react-native-document-scanner-plugin';

export const CameraScannerView = () => {
  const [scannedImage, setScannedImage] = useState<string | null>(null);

  const scanDocument = async (): Promise<void> => {
    // start the document scanner

    try {
      //   const result:ScanDocumentResponse = await DocumentScanner.scanDocument();
      const { scannedImages }: ScanDocumentResponse | undefined =
        await DocumentScanner.scanDocument();

      if (scannedImages && scannedImages?.length > 0) {
        setScannedImage(scannedImages[0]);
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
    <Image
      resizeMode="contain"
      style={{ width: '100%', height: '100%' }}
      source={scannedImage ? { uri: scannedImage } : undefined}
    />
  );
};
