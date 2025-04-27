import { Text, View, StyleSheet } from 'react-native';
import { sweTimeEqu } from 'react-native-swisseph';

const result = sweTimeEqu(
  2451545.0 // Julian Day
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
