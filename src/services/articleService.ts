export function addArticle(db, name, qty, price, businessId) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO articles (name, qty, selling_price, business_id) VALUES (?, ?, ?, ?);',
        [name, qty, price, businessId],
        (_, results) => resolve(results),
        (_, error) => reject(error),
      );
    });
  });
}

export function getArticlesForBusiness(db, businessId) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM articles WHERE business_id = ?;',
        [businessId],
        (_, results) => resolve(results.rows.raw()),
        (_, error) => reject(error),
      );
    });
  });
}

export function deleteArticle(db, id) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM articles WHERE id = ?;',
        [id],
        (_, results) => resolve(results),
        (_, error) => reject(error),
      );
    });
  });
}
