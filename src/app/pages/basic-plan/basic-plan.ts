import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from "@components/language-selector/language-selector";

@Component({
  selector: 'app-basic-plan',
  imports: [LanguageSelector, RouterLink],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
