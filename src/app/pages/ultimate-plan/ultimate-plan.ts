import { Component } from '@angular/core';
import { LanguageSelector } from "@components/language-selector/language-selector";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-ultimate-plan',
  imports: [LanguageSelector, RouterLink],
  templateUrl: './ultimate-plan.html',
})
export default class UltimatePlan {}
