import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {TemplatePortal} from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private activePortal = new BehaviorSubject<TemplatePortal>(null);
  readonly portal$ = this.activePortal.asObservable();

  constructor() {
  }

  setPortal (templatePortal: TemplatePortal) {
    this.activePortal.next(templatePortal);
  }
}
