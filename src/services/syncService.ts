import {RxDatabase} from 'rxdb';
import PouchDB from '../database/pouchDB'; // Import your configured PouchDB instance

export const syncDatabase = async (db: RxDatabase) => {
  try {
    const remoteDB = new PouchDB(
      'https://your-remote-couchdb.com/database-name',
    );

    const syncOptions = {
      live: true,
      retry: true,
    };

    // Sync Businesses Collection
    db.businesses.sync({remote: remoteDB, options: syncOptions});

    // Sync Articles Collection
    db.articles.sync({remote: remoteDB, options: syncOptions});

    console.log('✅ Sync started successfully!');
  } catch (error) {
    console.error('❌ Sync failed:', error);
  }
};
