import { Component, Input, Output, EventEmitter, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class CustomAlertComponent implements OnInit, OnDestroy {
  sharedService = inject(SharedService);
  isVisible = false;
  @Input() message: string = '';
  @Input() style: 'primary' | 'secondary' = 'primary';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  sub$!: Subscription;
  
  ngOnInit() {
    this.sub$ = this.sharedService.handleAlert.subscribe( item => {
      this.isVisible = item.isVisible!;
      this.message = item.message!;
      this.style = item.style!;
    })
  }

  closeAlert() {
    this.close.emit();
    this.sharedService.handleAlert.next({
      isVisible: false,
    })
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
