import  React from 'react';
import { useState } from 'react';
import { Appbar} from 'react-native-paper';

const MyAppbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Appbar.Header style={{ backgroundColor: '#CC0000' }}>
      <Appbar.Action icon='food' iconColor='white' onPress={() => window.alert('logo gelecek')} />
      <Appbar.Content title="ACIKTIM" color="#FFFFFF" />
      {isLoggedIn ? (
        <Appbar.Action
          icon="login"
          iconColor="white"
          onPress={() => window.alert('giriş yap ')}
        />
      ) : (
        <Appbar.Action
          icon="logout"
          iconColor="white"
          onPress={() => window.alert('çıkış yap iconu gelecek')}
        />
      )}
    </Appbar.Header>
  );
};

export default MyAppbar;