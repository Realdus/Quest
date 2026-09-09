export interface CaptchaProvider {
  solve(captchaKey: string): Promise<string>;
  verify(token: string): Promise<boolean>;
}

export abstract class BaseCaptcha implements CaptchaProvider {
  abstract solve(captchaKey: string): Promise<string>;
  abstract verify(token: string): Promise<boolean>;
}
