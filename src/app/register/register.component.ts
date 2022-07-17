import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output('onBackToLogIn') backToLogInEvent: EventEmitter<any> = new EventEmitter<any>();


  email: string = '';
  name: string = '';
  imageUrl: string = '';
  password: string = '';

  constructor(private authService : AuthService) {
  }

  ngOnInit(): void {
  }

  onBackToLogInClicked(): void {
    this.backToLogInEvent.emit();
  }
  onRegisterClicked():void {
    console.log(this.email);
    console.log(this.name);
    console.log(this.imageUrl);
    console.log(this.password);
    this.authService.register(this.email,this.name,this.imageUrl,this.password).subscribe((response:any) => {
      console.log(response);
    })
  }
}
