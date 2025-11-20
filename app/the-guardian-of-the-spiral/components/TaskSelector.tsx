
import React from 'react';
import { Task, TaskType, TaskDefinition } from '../types';
import Icon from './Icon';

interface TaskSelectorProps {
  selectedTask: TaskType;
  onSelectTask: (task: TaskType) => void;
}

const tasks: TaskDefinition[] = [
  { id: Task.Caption, label: 'Caption', icon: 'Feather', promptHelper: 'A poetic caption for a social media post.' },
  { id: Task.ImagePrompt, label: 'Visual', icon: 'Camera', promptHelper: 'A detailed prompt for an image AI.' },
  { id: Task.VideoScript, label: 'Video', icon: 'Film', promptHelper: 'An outline for a short, evocative video.' },
  { id: Task.Reflection, label: 'Ritual', icon: 'BookOpen', promptHelper: 'A theme for weekly reflection or meditation.' },
  { id: Task.Promo, label: 'Invitation', icon: 'Sparkles', promptHelper: 'A gentle message connecting to the book.' },
];

const TaskSelector: React.FC<TaskSelectorProps> = ({ selectedTask, onSelectTask }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {tasks.map((task) => (
        <button
          key={task.id}
          onClick={() => onSelectTask(task.id)}
          className={`flex items-center space-x-2 px-4 py-2 text-sm md:text-base rounded-full border transition-all duration-300 transform hover:-translate-y-1
            ${selectedTask === task.id
              ? 'bg-teal-500/30 border-teal-400 text-white shadow-lg shadow-teal-900/50'
              : 'bg-gray-800/50 border-teal-500/20 text-teal-200 hover:bg-teal-500/10 hover:border-teal-500/50'
            }`}
          title={task.promptHelper}
        >
          <Icon name={task.icon} className="w-5 h-5" />
          <span>{task.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TaskSelector;
