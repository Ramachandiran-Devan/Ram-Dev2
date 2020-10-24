import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.toastr.success('loggedout successfully')
    this.router.navigate([''])
  }

}
