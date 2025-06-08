import { FileMeta } from "./file";

export type DocumentGroupComponentProps = {
group_name : string,
documents: FileMeta[],
};

export type DocumentComponentProps = {
document: FileMeta,
};