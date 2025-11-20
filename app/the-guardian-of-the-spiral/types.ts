
export enum Task {
    Caption = "Poetic Caption",
    ImagePrompt = "Visual Prompt",
    VideoScript = "Video Script Outline",
    Reflection = "Weekly Reflection",
    Promo = "Gentle Promotion"
}

export type TaskType = Task;

export interface TaskDefinition {
    id: TaskType;
    label: string;
    icon: 'Feather' | 'Camera' | 'Film' | 'BookOpen' | 'Sparkles';
    promptHelper: string;
}
