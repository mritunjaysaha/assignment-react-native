import {createRxDatabase} from 'rxdb';
import {
  getRxStorageSQLiteTrial,
  getSQLiteBasicsQuickSQLite,
} from 'rxdb/plugins/storage-sqlite';
import {open} from 'react-native-nitro-sqlite';

import {businessSchema} from './models/businessModel';
import {articleSchema} from './models/articleModel';

export const createDatabase = async () => {
  try {
    const database = await createRxDatabase({
      name: 'assignment10-db',
      multiInstance: false,
      ignoreDuplicate: true,
      storage: getRxStorageSQLiteTrial({
        sqliteBasics: getSQLiteBasicsQuickSQLite(open),
      }),
    });

    console.log('Database created successfully:', database);

    console.log('Business Schema:', businessSchema);
    console.log('Article Schema:', articleSchema);

    try {
      const collections = await database.addCollections({
        businesses: {schema: businessSchema},
        articles: {schema: articleSchema},
      });
      console.log('Collections added successfully:', collections);
    } catch (collectionError) {
      console.error(
        'Error adding collections:',
        collectionError instanceof Error
          ? collectionError.stack
          : collectionError,
      );
      throw collectionError instanceof Error
        ? collectionError
        : new Error(String(collectionError));
    }

    return database;
  } catch (dbError) {
    console.error(
      'Error creating database:',
      dbError instanceof Error ? dbError.stack : dbError,
    );
    throw dbError instanceof Error ? dbError : new Error(String(dbError)); // Ensure the error is an instance of Error
  }
};
