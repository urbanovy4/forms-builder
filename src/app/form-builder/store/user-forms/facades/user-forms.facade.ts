import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Form} from "../../../../helpers/models/model";
import {forms} from "../selectors/user-forms.selector";
import {getForms} from "../actions/user-forms.action";

@Injectable({
  providedIn: "root"
})
export class UserFormsFacade {
  forms$: Observable<Form[]> = this.store.pipe(select(forms));

  constructor(
    private store: Store
  ) {
  }

  getForms(userId: number) {
      this.store.dispatch(getForms({userId}));
  }
}
