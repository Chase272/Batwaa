import { FileMeta } from "types/file";

export type RootStackParamList = {
  Home: undefined;
  Document: { document: FileMeta };
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

