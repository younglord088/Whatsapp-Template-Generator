// message-sending.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-sending',
  templateUrl: './message-sending.component.html',
  styleUrls: ['./message-sending.component.css']
})
export class MessageSendingComponent {
  selectedTemplate: string = ''; // Providing a default value
  templates: string[] = ['Template 1', 'Template 2', 'Template 3'];
}
