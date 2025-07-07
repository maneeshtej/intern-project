import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { lightTheme, darkTheme } from '../styles/theme';

const Header = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={styles.container}>
      {/* Left: App Name */}
      <Text style={[styles.title, { color: theme.text }]}>WingsFly</Text>

      {/* Right: Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon
            name="magnifying-glass"
            size={20}
            color={theme.text}
            iconStyle="solid"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon
            name="calendar-days"
            size={20}
            color={theme.text}
            iconStyle="regular"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="bell" size={20} color={theme.text} iconStyle="regular" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  iconWrapper: {
    padding: 8,
  },
});
