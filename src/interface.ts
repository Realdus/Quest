export interface QuestConfig {
  name: string;
  description: string;
  reward?: number;
}

export interface Quest {
  start(): void;
  complete(): void;
  isCompleted(): boolean;
}

export interface TaskResult {
  success: boolean;
  message: string;
  data?: any;
}
