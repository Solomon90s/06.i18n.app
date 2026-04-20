import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'language-selector',
  imports: [],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  private languageService: LanguageService = inject(LanguageService);

  public languages = signal([
    { code: 'English' },
    { code: 'Spanish' },
    { code: 'French' },
    { code: 'Italian' },
  ]);

  public changeLanguages(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.languageService.changeLanguage(lang);
  }
}
