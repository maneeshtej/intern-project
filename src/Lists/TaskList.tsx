import { View } from 'react-native';
import React from 'react';
import TaskCard from '../components/TaskCard';
import { Task } from '../constants/interface';

const TaskList: React.FC<{ taskList: Task[] }> = ({ taskList }) => {
  return (
    <View>
      {taskList.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </View>
  );
};

export default TaskList;
