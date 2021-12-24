import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthFacade} from "../../store/auth/facades/auth.facade";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let facade: AuthFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade', ['signOut'])
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(AuthFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signOut', () => {
    component.signOut();
    expect(facade.signOut).toHaveBeenCalled();
  });
});
