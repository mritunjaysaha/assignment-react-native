import {createContext} from 'react';
import {RxCollection, RxDatabase} from 'rxdb';

type DatabaseContextType = {
  db: RxDatabase<{[key: string]: RxCollection}, any, any, unknown> | null;
};

export const DatabaseContext = createContext<DatabaseContextType>({
  db: null,
});
export const DatabaseProvider = DatabaseContext.Provider;
