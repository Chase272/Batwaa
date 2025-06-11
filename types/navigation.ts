import { NavigatorScreenParams } from '@react-navigation/native';
import { FileMeta } from 'types/file';

export type RootStackParamList = {
  Home: undefined;
  Document: { document: FileMeta };
  Documents: undefined;
  Import_Documents: undefined;
  HomeScreen: NavigatorScreenParams<HomeStackParamList>;
  Settings: undefined;

  CameraScannerScreen: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  Document: undefined;
  CameraScannerScreen: undefined;
  ImportDocument: { document_uri: string; file_name?: string };
};
