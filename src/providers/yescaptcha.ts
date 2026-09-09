import { BaseCaptcha } from '../captcha';

export class YesCaptchaProvider extends BaseCaptcha {
  private apiKey: string;

  constructor(apiKey: string) {
    super();
    this.apiKey = apiKey;
  }

  async solve(captchaKey: string): Promise<string> {
    // Implementation for solving captcha
    return 'solved_token';
  }

  async verify(token: string): Promise<boolean> {
    // Implementation for verifying token
    return true;
  }
}
