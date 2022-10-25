import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticForm: FormGroup;
  showModal: boolean = false;
  ediMode: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ticForm = this.fb.group({
      _id: [''],
      fname: ['Sneha', Validators.required],
      lname: ['Singh', Validators.required],
      class: ['First Class', Validators.required],
      email: ['sneha@gmail.com', Validators.required]

    })
  }

  onTicSubmit(){
    if(this.ticForm.valid){
      console.log(this.ticForm.value);
      if(this.editMode){}else{}
    }
  }

}
