import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'test-db', location: 'default'},
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database:', error),
);

export const createDatabase = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        // Create Businesses table
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS businesses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          address TEXT
        );`,
          [],
          () => console.log('Businesses table created successfully'),
          error => console.error('Error creating businesses table:', error),
        );

        // Create Articles table
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS articles (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          content TEXT
        );`,
          [],
          () => console.log('Articles table created successfully'),
          error => console.error('Error creating articles table:', error),
        );
      },
      error => {
        console.error('Transaction error:', error);
        reject(error);
      },
      () => {
        console.log('Database setup completed');
        resolve(db);
      },
    );
  });
};
