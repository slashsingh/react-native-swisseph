import { Text, View, StyleSheet } from 'react-native';
import { sweRiseTrans } from 'react-native-swisseph';

const result = sweRiseTrans(
  2451545.0, // Julian date
  0, // Longitude
  '', // Latitude
  0, // Elevation
  0, // Time zone
  0, // Observer's height above sea level
  0 // Delta T
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
