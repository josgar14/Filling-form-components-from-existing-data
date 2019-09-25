import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'forms-update';
	myFormModel: FormGroup;

	constructor() {
		this.myFormModel = new FormGroup({
			id: new FormControl(''),
			description: new FormControl(''),
			seller: new FormControl('')
		});
	}

	updateEntireForm() {
		this.myFormModel.setValue({
			id: 123,
			description: 'A great product',
			seller: 'XYZ Corp'
		});
	}
	updatePartOfTheForm() {
		this.myFormModel.patchValue({
			description: 'The best product'
		});
	}
}
