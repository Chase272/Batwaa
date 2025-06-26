import { NavigatorScreenParams } from '@react-navigation/native';
import { FileMeta } from 'types/file';

export type RootStackParamList = {
  Document: { document: FileMeta };
  documents: undefined;
  ImportDocumentTab: undefined;
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SettingsTab: undefined;
};
export type HomeStackParamList = {
  HomeScreen: undefined;
  DocumentScreen: undefined;
  CameraScannerScreen: undefined;
  ImportDocumentFormScreen: { document_uri: string; file_name?: string };
};
