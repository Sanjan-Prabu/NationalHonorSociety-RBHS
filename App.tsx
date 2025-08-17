import React, { useEffect } from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const App = () => {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      // ---- Photo Library ----
      const photoPermission = Platform.select({
        ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      });

      if (photoPermission) {
        const photoStatus = await check(photoPermission);

        if (photoStatus === RESULTS.GRANTED) {
          Alert.alert('Photo Library Permission', 'Already granted ✅');
        } else if (photoStatus === RESULTS.DENIED) {
          Alert.alert('Photo Library', 'Permission denied. Please allow access in settings.');
        } else if (photoStatus === RESULTS.UNAVAILABLE) {
          Alert.alert('Photo Library', 'No photo library available on this device.');
        }
      }

      // ---- Bluetooth Scan ----
      const bluetoothPermission = Platform.select({
        ios: PERMISSIONS.IOS.BLUETOOTH,
        android: PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
      });

      if (bluetoothPermission) {
        const btStatus = await check(bluetoothPermission);

        if (btStatus === RESULTS.GRANTED) {
          Alert.alert('Bluetooth Permission', 'Already granted ✅');
        } else {
          const btResult = await request(bluetoothPermission);
          Alert.alert('Bluetooth Permission', `Status: ${btResult}`);
        }
      }
    } catch (error) {
      console.log('Permission error:', error);
      Alert.alert('Permission error', String(error));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="Request Permissions" onPress={requestPermissions} />
    </View>
  );
};

export default App;
