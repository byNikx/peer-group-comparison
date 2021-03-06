import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';
import {
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule,
	MdDialogModule, MdCheckboxModule, MdRadioModule,
	MdTabsModule, MdSelectModule, MdSliderModule,
	MdTableModule, MatExpansionModule, MatSidenavModule,
	MatGridListModule, MatFormFieldModule, MatSliderModule,
	MatMenuModule
} from '@angular/material';

const MD_MODULES = [
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule,
	MdDialogModule, MdCheckboxModule, MdRadioModule,
	MdTabsModule, MdSelectModule, MdSliderModule,
	MdTableModule, MatTableModule, MatExpansionModule,
	MatSidenavModule, MatGridListModule, MatFormFieldModule,
	MatSliderModule,MatMenuModule
]

@NgModule({
  imports: [].concat(MD_MODULES),
  exports:[].concat(MD_MODULES),
  declarations: []
})
export class MaterialModule { }
