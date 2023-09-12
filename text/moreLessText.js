import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const text = useState ( 
    " Text "
    );

  const [showFull, setShowFull] = useState(false);

  return (
    <View>
      {showFull ? (
        <>
          <Text>{text}</Text>
          <Text
            style={styles.toggleText}
            onPress={() => setShowFull(false)}
          >
            Less
          </Text>
        </>
      ) : (
        <>
          <Text>{text.split('.')[0] + '.'}</Text>
          <Text
            style={styles.toggleText}
            onPress={() => setShowFull(true)}
          >
            More
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toggleText: {
    color: '#3742fa',
    fontWeight: '500',
  },
});
