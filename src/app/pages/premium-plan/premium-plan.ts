import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from "@components/language-selector/language-selector";

@Component({
  selector: 'app-premium-plan',
  imports: [RouterLink, LanguageSelector],
  templateUrl: './premium-plan.html',
})
export default class PremiumPlan {}
