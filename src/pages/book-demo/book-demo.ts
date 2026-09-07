import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';

interface BusinessTypeOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-book-demo-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RevealDirective, ButtonComponent],
  templateUrl: './book-demo.html',
  styleUrl: './book-demo.css',
})
export class BookDemoPage {
  // Drop the walkthrough file at public/video/tracksetu-overview.mp4 and flip this to true.
  protected readonly videoAvailable = false;
  protected readonly videoSrc = 'video/tracksetu-overview.mp4';

  protected readonly businessTypes: BusinessTypeOption[] = [
    { value: 'tiles', label: 'Tiles' },
    { value: 'sanitary', label: 'Sanitary' },
    { value: 'hardware', label: 'Hardware' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'other', label: 'Other' },
  ];

  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);

  protected readonly form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{7,15}$/)]],
      whatsapp: ['yes', Validators.required],
      shopCount: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      businessType: ['', Validators.required],
      message: [''],
    });
  }

  protected isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  protected onSubmit(): void {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    /*
     * No backend/admin integration exists in this project yet - this only
     * simulates a submission so the form's validation and success states
     * can be reviewed. Wire this to the real "demo request" API once
     * MicroPillar's admin panel endpoint is available.
     */
    window.setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 700);
  }
}
