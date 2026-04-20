import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '@components/language-selector/language-selector';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  imports: [LanguageSelector, RouterLink, TranslateModule],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
