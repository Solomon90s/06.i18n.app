import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '@components/language-selector/language-selector';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelector, TranslateModule],
  templateUrl: './products.html',
})
export default class Products {
  public fullName: WritableSignal<string> = signal<string>('Jose Manuel');
}
