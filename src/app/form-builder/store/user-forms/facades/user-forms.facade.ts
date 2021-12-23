import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Form} from "../../../../helpers/models/model";
import {forms, loading} from "../selectors/user-forms.selector";
import {
  editForm,
  getForms,
  selectForm,
  showEditDialog,
  showPreviewDialog,
  showRemoveDialog
} from "../actions/user-forms.action";

@Injectable({
  providedIn: "root"
})
export class UserFormsFacade {

  forms$: Observable<Form[]> = this.store.pipe(select(forms));
  loading$: Observable<boolean> = this.store.pipe(select(loading));

  constructor(
    private store: Store
  ) {
  }

  getForms(userId: number) {
    this.store.dispatch(getForms({userId}));
  }

  selectForm(selectedForm: Form) {
    this.store.dispatch(selectForm({selectedForm}));
  }

  editForm(form: Form) {
    this.store.dispatch(editForm({form}));
  }

  showPreviewDialog(form: Form) {
    this.store.dispatch(showPreviewDialog({form}));
  }

  showEditDialog(form: Form) {
    this.store.dispatch(showEditDialog({form}));
  }

  showRemoveDialog(formId: number) {
    this.store.dispatch(showRemoveDialog({formId}));
  }
}
