export type RootStackParamList = {
  Home: undefined;
  Document: undefined;
  Documents: undefined;
  Import_Documents: undefined;
  HomeScreen: undefined | { screen: keyof HomeStackParamList };

  CameraScannerScreen: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  Document: undefined;
  CameraScannerScreen: undefined;
};

