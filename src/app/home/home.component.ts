import { CommonService } from './../common.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DyncamicCOmponentComponent } from '../dyncamic-component/dyncamic-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  @ViewChild('hobbyContainer', {read: ViewContainerRef, static: true}) hobbyContainer:any;
  users:any = [];
  apiError: boolean = false;
  hobbies:any = [];
  allHobbies: any = [];

  constructor(
    private commonService: CommonService,
    public viewContainerRef: ViewContainerRef,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.commonService.getUser().subscribe({
      next: (res:any) =>{
        this.users = res;
        this.changeDetection.detectChanges();
      },
      error: (error:any) => {
        this.apiError = true;
      }
    })
  }

  addHobby(){
    const compRef = this.viewContainerRef.createComponent(DyncamicCOmponentComponent); 
    compRef.instance.emitHobby.subscribe((res:any)=>{
      this.allHobbies.push(res);
      this.changeDetection.detectChanges();
    })
    this.hobbies.push(compRef.instance);
   }
}
