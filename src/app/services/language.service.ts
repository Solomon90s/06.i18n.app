import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public cookie: SsrCookieService = inject(SsrCookieService);

  public changeLanguage(lang: string) {
    this.cookie.set('language', lang);

    //! Cambio de idioma
  }
}
