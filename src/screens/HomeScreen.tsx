/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import DatePicker from '../components/DatePicker';
import ProgressQuote from '../components/ProgressQuote';
import Icon from '@react-native-vector-icons/fontawesome6';
import AddTaskModal from '../modals/AddTaskModal';
import { Task } from '../constants/interface';
import TaskList from '../Lists/TaskList';
import { darkTheme, lightTheme } from '../styles/theme';

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  const taskList: Task[] = [
    {
      id: '1',
      title: 'Schedule a meeting with Harshit Sir',
      time: '08:00 AM',
      type: 'Habit',
      status: 'completed',
      tag: 'Work',
      icon: 'calendar-check',
      color: '#4f46e5',
      priority: 'important',
    },
    {
      id: '2',
      title: '2.5 Hours Simran and Meditation',
      time: '09:00 AM',
      type: 'Habit',
      status: 'pending',
      tag: 'Spiritual',
      icon: 'om',
      color: '#10b981',
      priority: 'must',
    },
    {
      id: '3',
      title: 'Save 200 Rupees Daily',
      time: '12:00 PM',
      type: 'Habit',
      status: 'pending',
      tag: 'Finance',
      icon: 'wallet',
      color: '#f59e0b',
      priority: 'important',
    },
    {
      id: '4',
      title: 'Walk 10k Step Daily',
      time: '07:00 AM',
      type: 'Goal',
      status: 'pending',
      tag: 'Health',
      icon: 'shoe-prints',
      color: '#3b82f6',
      priority: 'must',
    },
    {
      id: '5',
      title: 'Buy Sunflower for Mumma',
      time: '11:00 AM',
      type: 'Task',
      status: 'pending',
      tag: 'Family',
      icon: 'seedling',
      color: '#ec4899',
      priority: 'none',
    },
    {
      id: '6',
      title: 'Make Mandala and Colour Daily',
      time: '07:30 PM',
      type: 'Habit',
      status: 'pending',
      tag: 'Creativity',
      icon: 'palette',
      color: '#8b5cf6',
      priority: 'important',
    },
  ];

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Header />
        <View style={{ height: 10 }} />
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <View style={{ height: 10 }} />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <ProgressQuote progress={60} />
          <View style={{ height: 30 }} />
          <TaskList taskList={taskList} />
        </ScrollView>

        {/* Floating Add Button */}
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: theme.text }]}
          activeOpacity={0.8}
          onPress={() => setShowModal(true)}
        >
          <Icon
            name="plus"
            size={26}
            color={theme.background}
            iconStyle="solid"
          />
        </TouchableOpacity>

        <AddTaskModal visible={showModal} onClose={() => setShowModal(false)}>
          {[
            {
              icon: 'brain',
              title: 'Habit',
              subtitle: 'Activity that repeats over time.',
            },
            {
              icon: 'rotate',
              title: 'Recurring Task',
              subtitle: 'Task with detailed tracking.',
            },
            {
              icon: 'list-check',
              title: 'Task',
              subtitle: 'One-time activity without tracking.',
            },
            {
              icon: 'bullseye',
              title: 'Goal of the Day',
              subtitle: 'Target set for one specific day.',
            },
          ].map((item, i) => (
            <View
              key={i}
              style={[styles.optionCard, { borderBottomColor: theme.border }]}
            >
              <Icon
                name={item.icon}
                size={26}
                color={theme.text}
                iconStyle="solid"
              />
              <View style={styles.optionContent}>
                <Text style={[styles.optionTitle, { color: theme.text }]}>
                  {item.title}
                </Text>
                <Text style={[styles.optionSubtitle, { color: theme.muted }]}>
                  {item.subtitle}
                </Text>
              </View>
              <Icon
                name="arrow-right"
                size={26}
                color={theme.text}
                iconStyle="solid"
              />
            </View>
          ))}
        </AddTaskModal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    padding: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#2d339a',
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    marginBottom: 12,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    gap: 14,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d339a',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default HomeScreen;
