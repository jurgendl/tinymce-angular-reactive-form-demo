import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AsyncSubject, Subject } from 'rxjs';
import { maxLength } from './maxlength.validator';

@Component({
  selector: "form-root",
  styleUrls: ["./form.component.css"],
  templateUrl: "./form.component.html"
})
class FormComponent {
  private editorSubject: Subject<any> = new AsyncSubject();
  public myForm = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required, maxLength(this.editorSubject, 10))
  });

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  public onSubmit() {
    console.log("Submitted!");
  }
}

export { FormComponent }