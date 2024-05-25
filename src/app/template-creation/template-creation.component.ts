import { Component } from '@angular/core';

@Component({
  selector: 'app-template-creation',
  templateUrl: './template-creation.component.html',
  styleUrls: ['./template-creation.component.css']
})
export class TemplateCreationComponent {
  templateName: string = '';
  templateContent: string = '';
  placeholders: string[] = ['{name}', '{date}', '{location}'];

  insertPlaceholder(placeholder: string): void {
    // Logic to insert placeholder at the current cursor position
    const textarea = document.querySelector('textarea');
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      this.templateContent = this.templateContent.substring(0, start) + placeholder + this.templateContent.substring(end);
      textarea.focus();
      // Move the cursor to the end of the inserted placeholder
      setTimeout(() => {
        textarea.setSelectionRange(start + placeholder.length, start + placeholder.length);
      }, 0);
    } else {
      this.templateContent += placeholder;
    }
  }

  saveTemplate(): void {
    
    console.log('Template saved:', this.templateName, this.templateContent);
    
    this.templateName = '';
    this.templateContent = '';
  }
  
}