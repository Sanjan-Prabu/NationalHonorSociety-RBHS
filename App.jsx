import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';

const App = () => {
  useEffect(() => {
    BleManager.start({ showAlert: false });

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]).then((result) => {
        console.log('Permission result:', result);
      });
    }

    console.log('BLE Manager started');
  }, []);

  return null;
};

export default App;
