import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigator} from './src/navigation/AppNavigator';
import {DatabaseProvider} from './src/context/DatabaseContext/DatabaseContext';
import {createDatabase} from './src/database/db';
import {RxDatabase, RxCollection} from 'rxdb';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [db, setDB] = useState<RxDatabase<
    {[key: string]: RxCollection},
    any,
    any,
    unknown
  > | null>(null);

  useEffect(() => {
    async function initDB() {
      console.log('init');
      const database = await createDatabase();
      console.log({database});
      setDB(database);
    }
    initDB();
  }, []);

  useEffect(() => {
    console.log({db});
  }, [db]);

  //   if (!db) {
  //     return (
  //       <View>
  //         <Text>Connecting DB</Text>
  //       </View>
  //     );
  //   }

  return (
    <DatabaseProvider value={{db}}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </DatabaseProvider>
  );
}

export default App;
