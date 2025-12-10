export interface DesignSpecs {
  analysis: string;
  backPrompt: string;
  leftSleevePrompt: string;
  rightSleevePrompt: string;
}

export enum AppState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR',
}

export type ImageStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

export interface PromptCardProps {
  title: string;
  promptText: string;
  delay?: number;
  imageStatus: ImageStatus;
  imageUrl?: string | null;
  onSelect?: () => void;
  isSelected?: boolean;
}

export type ProcessingMode = 'UPSCALE' | 'REMOVE_BG';

export interface ProcessingState {
  status: ImageStatus;
  mode: ProcessingMode | null;
  resultUrl: string | null;
}
