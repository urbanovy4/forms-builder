import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./states/app.state";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./effects/auth.effects";
import {FormsEffects} from "./effects/forms.effects";
import {ReactiveComponentModule} from "@ngrx/component";

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule {

}
