export interface Task {
  id: string;
  title: string;
  description?: string;
  time: string;
  type: 'Habit' | 'Recurring Task' | 'Task' | 'Goal';
  status: 'completed' | 'pending';
  tag?: string;
  icon?: string;
  color?: string;
  priority?: 'must' | 'important' | 'none';
}
