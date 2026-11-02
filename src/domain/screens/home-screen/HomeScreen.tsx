import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TabLayout } from '../../layouts/TabLayout';

export const HomeScreen = () => (
  <TabLayout style={styles.container}>
    <Text>Home</Text>
  </TabLayout>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
