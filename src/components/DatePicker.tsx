import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { lightTheme, darkTheme } from '../styles/theme';

interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const getCenteredDates = (): Date[] => {
  const today = new Date();
  return Array.from({ length: 9 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + (i - 3));
    return date;
  });
};

const formatDay = (date: Date) =>
  date.toLocaleDateString('en-US', { weekday: 'short' });

const formatDate = (date: Date) => date.getDate();

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const dates = getCenteredDates();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContainer}
    >
      {dates.map((date, index) => {
        const isSelected = selectedDate.toDateString() === date.toDateString();

        return (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDate(date)}
            style={[
              styles.dateItem,
              {
                backgroundColor: isSelected ? '#2d339a' : theme.card,
              },
            ]}
          >
            <Text
              style={[
                styles.dayText,
                {
                  color: isSelected ? '#ffffff' : theme.muted,
                },
              ]}
            >
              {formatDay(date)}
            </Text>
            <View
              style={[
                styles.innerDateItem,
                {
                  backgroundColor: isSelected ? '#151b74' : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  {
                    color: isSelected ? '#ffffff' : theme.text,
                  },
                ]}
              >
                {formatDate(date)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: 'center',
  },
  dateItem: {
    borderRadius: 12,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  innerDateItem: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DatePicker;
