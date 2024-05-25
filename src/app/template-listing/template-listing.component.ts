import { Component } from '@angular/core';

@Component({
  selector: 'app-template-listing',
  templateUrl: './template-listing.component.html',
  styleUrls: ['./template-listing.component.css']
})
export class TemplateListingComponent {
  templates = [
    { name: 'Sales Promo', content: 'Hi {name}, check out our new deals valid until {date}!' }
  ];
  displayedColumns: string[] = ['name', 'preview', 'actions'];

  editTemplate(template: any) {
    console.log('Edit Template:', template);
  }

  deleteTemplate(template: any) {
    console.log('Delete Template:', template);
  }
}
