import { DyncamicCOmponentComponent } from './../dyncamic-component/dyncamic-component.component';
import { CommonService } from './../common.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { of, throwError } from 'rxjs';
import { EmbeddedViewRef, Injector, TemplateRef, ViewContainerRef } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let commonService: CommonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, DyncamicCOmponentComponent ],
      imports: [],
      providers: [CommonService, ViewContainerRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    commonService = TestBed.inject(CommonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers function when ngOnInint function called.',()=>{
    const getUserSpy = spyOn(component, 'getPosts');
    component.ngOnInit();
    expect(getUserSpy).toHaveBeenCalled();
  });

  it('called getUser',()=>{
   const users =  spyOn(commonService, 'getUser').and.returnValue(of(Users));
    component.getPosts();
    expect(users).toHaveBeenCalled();
    expect(component.apiError).toBeFalsy();
    expect(component.users.length).toEqual(Users.length);
  });

  it('called getUser if api fails',()=>{
    const users =  spyOn(commonService, 'getUser').and.returnValue(throwError('404'));
     component.getPosts();
     expect(users).toHaveBeenCalled();
     expect(component.apiError).toBeTruthy();
     expect(component.users.length).toEqual([]);
   });

   it('should test when add hobby btn click',()=>{
      const addHobbyCalled = spyOn(component,'addHobby');
      component.hobbyContainer = new TestViewContainerRef();
      const addHobbieBtn:any = document.querySelector('.hobbyBtn-for-test');
      addHobbieBtn.click();
      expect(addHobbyCalled).toHaveBeenCalled();
   });

   it('should test when add hobby btn click',()=>{
    component.hobbyContainer = new TestViewContainerRef();
    const addHobbieBtn:any = document.querySelector('.hobbyBtn-for-test');
    addHobbieBtn.click();
    expect(component.hobbies.length).toBeGreaterThan(0);
 });
});

const Users = [
  {
    name: 'test1'
  },
  {
    name: 'test2'
  }
]


class TestViewContainerRef extends ViewContainerRef {
  get element(): import("@angular/core").ElementRef<any> {
    throw new Error("Method not implemented.");
  }
  get injector(): import("@angular/core").Injector {
    throw new Error("Method not implemented.");
  }
  get parentInjector(): import("@angular/core").Injector {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  get length(): number {
    throw new Error("Method not implemented.");
  }
  createEmbeddedView<C>(templateRef: import("@angular/core").TemplateRef<C>, context?: C, index?: number): import("@angular/core").EmbeddedViewRef<C> {
    throw new Error("Method not implemented.");
  }
  createComponent<C>(componentFactory: import("@angular/core").ComponentFactory<C>, index?: number, injector?: import("@angular/core").Injector, projectableNodes?: any[][], ngModule?: import("@angular/core").NgModuleRef<any>): import("@angular/core").ComponentRef<C> {
    throw new Error("Method not implemented.");
  }
  insert(viewRef: import("@angular/core").ViewRef, index?: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  move(viewRef: import("@angular/core").ViewRef, currentIndex: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }
  indexOf(viewRef: import("@angular/core").ViewRef): number {
    throw new Error("Method not implemented.");
  }
  remove(index?: number): void {
    throw new Error("Method not implemented.");
  }
  detach(index?: number): import("@angular/core").ViewRef {
    throw new Error("Method not implemented.");
  }

}