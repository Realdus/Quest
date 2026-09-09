import { Quest, QuestConfig } from './interface';

export class QuestManager implements Quest {
  private config: QuestConfig;
  private completed: boolean = false;

  constructor(config: QuestConfig) {
    this.config = config;
  }

  start(): void {
    console.log(`Starting quest: ${this.config.name}`);
  }

  complete(): void {
    this.completed = true;
    console.log(`Quest completed: ${this.config.name}`);
  }

  isCompleted(): boolean {
    return this.completed;
  }
}
