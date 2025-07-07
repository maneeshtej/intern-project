import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../styles/theme';

interface ProgressProps {
  progress: number;
}

const ProgressQuote = ({ progress = 65 }: ProgressProps) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: theme.card }]}>
        <Text style={[styles.header, { color: theme.text }]}>
          Today's Quote
        </Text>

        <Text style={[styles.quote, { color: theme.text }]}>
          “You must do the things, you think you cannot do.”
        </Text>

        <Text style={[styles.progressLabel, { color: theme.text }]}>
          Progress {progress}%
        </Text>

        <View
          style={[
            styles.progressBarContainer,
            { backgroundColor: theme.border },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress}%`,
                backgroundColor: theme.text,
              },
            ]}
          >
            <View
              style={[styles.progressBlob, { backgroundColor: theme.text }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressQuote;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    padding: 16,
    gap: 8,

    // ✅ Keep shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
  },
  progressLabel: {
    fontSize: 12,
    color: '#2d339a',
    marginTop: 8,
    marginBottom: 2,
  },
  progressBarContainer: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    // overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    backgroundColor: '#2d339a',
    borderRadius: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  progressBlob: {
    height: 12,
    width: 12,
    backgroundColor: '#2d339a',
    borderRadius: 100,
  },
});
