import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public cookie: SsrCookieService = inject(SsrCookieService);
  public translate: TranslateService = inject(TranslateService);
  public currentLang: WritableSignal<string> = signal<string>('');

  public changeLanguage(lang: string) {
    this.cookie.set('language', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.currentLang.set(lang);
  }
}
