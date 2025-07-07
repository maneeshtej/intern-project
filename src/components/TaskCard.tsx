import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { Task } from '../constants/interface';
import Icon from '@react-native-vector-icons/fontawesome6';
import { lightTheme, darkTheme } from '../styles/theme';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const { title, type, time, status, priority = 'none' } = task;

  return (
    <View style={styles.wrapper}>
      {/* Left Circle */}
      <View style={[styles.iconWrapper, { backgroundColor: theme.card }]} />

      {/* Right Content */}
      <View
        style={[styles.contentWrapper, { borderBottomColor: theme.border }]}
      >
        <View style={styles.details}>
          <Text
            style={[
              styles.title,
              { color: scheme === 'dark' ? 'white' : 'black' },
            ]}
          >
            {title}
          </Text>

          <View style={styles.typeRow}>
            {/* Time Badge */}
            <View
              style={[
                styles.timeBadge,
                {
                  backgroundColor:
                    type === 'Habit'
                      ? '#e0e7ff'
                      : type === 'Goal'
                      ? '#dcfce7'
                      : type === 'Task'
                      ? '#fef9c3'
                      : theme.card,
                },
              ]}
            >
              <Icon
                name="clock"
                color={
                  type === 'Habit'
                    ? '#3b82f6'
                    : type === 'Goal'
                    ? '#22c55e'
                    : type === 'Task'
                    ? '#eab308'
                    : theme.text
                }
              />
              <Text
                style={[
                  styles.timeText,
                  {
                    color:
                      type === 'Habit'
                        ? '#3b82f6'
                        : type === 'Goal'
                        ? '#22c55e'
                        : type === 'Task'
                        ? '#eab308'
                        : theme.text,
                  },
                ]}
              >
                {time}
              </Text>
            </View>

            {/* Type + Priority */}
            {(type || priority !== 'none') && (
              <View
                style={[
                  styles.typePriorityWrapper,
                  { backgroundColor: theme.card },
                ]}
              >
                <Text style={[styles.typePriorityText, { color: theme.text }]}>
                  {type}
                </Text>
                {priority !== 'none' && (
                  <>
                    <View
                      style={[styles.divider, { backgroundColor: theme.muted }]}
                    />
                    <Text
                      style={[styles.typePriorityText, { color: theme.text }]}
                    >
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </Text>
                  </>
                )}
                <Icon name="flag" size={7} color={theme.text} />
              </View>
            )}
          </View>
        </View>

        {/* Status Circle */}
        <View
          style={[
            styles.statusCircle,
            {
              backgroundColor:
                status === 'completed' ? theme.statusDone : theme.statusPending,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default TaskCard;

const { width } = Dimensions.get('window');
const cardWidth = width - 32 - 72;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  contentWrapper: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: cardWidth,
    borderBottomWidth: 1,
  },
  details: {
    maxWidth: '85%',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  timeText: {
    fontSize: 9,
    fontWeight: '500',
  },
  typePriorityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 6,
    minHeight: 24,
  },
  typePriorityText: {
    fontSize: 9,
    fontWeight: '500',
  },
  divider: {
    width: 1,
    height: 10,
  },
  statusCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});
