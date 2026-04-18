import { Component, computed, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonComponent } from '../../sharde/button/button.component';

interface FormField {
  name: string;
  label: string;
  required?: boolean;
  type?: 'text' | 'icon' | 'group' | 'tooltip' | 'disabled';
  isLeft?: boolean;
  hasIcon?: boolean;
  hasGroup?: boolean;
  hasHelp?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    TooltipModule,
    IconFieldModule,
    InputIconModule,
    ButtonComponent,
  ],
  templateUrl: './service-form.component.html',
  styleUrl: './service-form.component.scss',
})
export class ServiceFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  // private translate = inject(TranslateService);

  // isRTL = computed(() => this.translate.getCurrentLang() === 'ar');

  /*___ fields ________*/
  fields: FormField[] = [
    { name: 'mandatoryField1', label: 'MANDATORY', required: true },
    { name: 'optionalField1', label: 'OPTIONAL' },

    { name: 'mandatoryField2', label: 'MANDATORY', required: true, hasIcon: true },
    { name: 'optionalField2', label: 'OPTIONAL', hasIcon: true },

    { name: 'mandatoryField3', label: 'MANDATORY', required: true, hasGroup: true },
    { name: 'optionalField3', label: 'OPTIONAL', hasGroup: true },

    { name: 'mandatoryField4', label: 'MANDATORY', required: true, hasGroup: true, isLeft: true },
    { name: 'optionalField4', label: 'OPTIONAL', hasGroup: true, isLeft: true },

    { name: 'mandatoryField5', label: 'MANDATORY', required: true, hasHelp: true },
    { name: 'optionalField5', label: 'OPTIONAL', hasHelp: true },

    { name: 'mandatoryField6', label: 'MANDATORY', required: true },
    { name: 'optionalField6', label: 'OPTIONAL' },

    { name: 'mandatoryField7', label: 'MANDATORY', required: true, disabled: true },
    { name: 'optionalField7', label: 'OPTIONAL', disabled: true },
  ];

  /*___ form ________*/
  serviceForm = this.fb.group(
    this.fields.reduce((acc: any, field) => {
      acc[field.name] = [
        { value: '', disabled: field.disabled },
        field.required ? [Validators.required] : [],
      ];
      return acc;
    }, {}),
  );

  /*___ validation ________*/
  isFieldInvalid(fieldName: string): boolean {
    const field = this.serviceForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  /*___ navigation ________*/
  goBack(): void {
    this.router.navigate(['../']);
  }

  /*___ Actions ________*/
  onSubmit(): void {
    if (this.serviceForm.invalid) {
      this.serviceForm.markAllAsTouched();
      return;
    }

    console.log('Form Submitted', this.serviceForm.value);
  }
}
