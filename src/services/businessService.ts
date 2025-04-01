export function addBusiness(db, name) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO businesses (name) VALUES (?);',
        [name],
        (_, results) => resolve(results),
        (_, error) => reject(error),
      );
    });
  });
}

export function getBusinesses(db) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM businesses;',
        [],
        (_, results) => resolve(results.rows.raw()),
        (_, error) => reject(error),
      );
    });
  });
}

export function deleteBusiness(db, id) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM businesses WHERE id = ?;',
        [id],
        (_, results) => resolve(results),
        (_, error) => reject(error),
      );
    });
  });
}
