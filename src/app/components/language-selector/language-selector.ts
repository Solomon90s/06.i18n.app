import { Component, signal } from '@angular/core';

@Component({
  selector: 'language-selector',
  imports: [],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  public languages = signal([
    { code: 'Inglés' },
    { code: 'Español' },
    { code: 'Francés' },
    { code: 'Italiano' },
  ]);
}
