import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '@services/language.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'i18n-app';

  private cookie: SsrCookieService = inject(SsrCookieService);
  private languageService: LanguageService = inject(LanguageService);

  constructor() {
    console.log({ cookie: this.cookie.get('language') });
    const lang = this.cookie.check('lang')
      ? this.cookie.get('lang')
      : 'Spanish';
    this.languageService.changeLanguage(lang);
  }
}
