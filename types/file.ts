export type FileMeta = {
  id?: string;               // Unique ID (UUID)
  name: string;             // File display name
  uri: string;              // File path in the system (e.g., FileSystem.documentDirectory)
  category: string;         // Logical grouping (e.g., "Finance", "Medical")
  createdAt: string;        // ISO date string
  encrypted?: boolean;      // Optional flag if the file is encrypted
};

export type GroupedDocuments = {
  [category: string]: FileMeta[];
};
