import { TaskResult } from './interface';

export class Client {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async request(endpoint: string): Promise<TaskResult> {
    try {
      const response = await fetch(`https://api.example.com${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return { success: true, message: 'OK', data: await response.json() };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
