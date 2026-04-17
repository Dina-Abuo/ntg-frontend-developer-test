import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private translate = inject(TranslateService);

  currentLang = this.translate.getCurrentLang() || 'ar';

  //  Signal للتحكم في animation
  isChangingLang = signal(false);

  toggleLanguage() {
    this.isChangingLang.set(true);

    setTimeout(() => {
      this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';

      this.translate.use(this.currentLang);

      document.body.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      document.body.style.fontFamily =
        this.currentLang === 'ar'
          ? 'var(--font-family-ar)'
          : 'var(--font-family-en)';

      // fade in
      this.isChangingLang.set(false);
    }, 200); // مدة الـ fade out
  }
}
