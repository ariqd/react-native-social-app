import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Onboarding = (props) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Click here"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
