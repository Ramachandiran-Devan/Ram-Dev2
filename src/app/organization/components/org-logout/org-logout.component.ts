import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-org-logout',
  templateUrl: './org-logout.component.html',
  styleUrls: ['./org-logout.component.css']
})
export class OrgLogoutComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.toastr.success('logged out successfully')
    this.router.navigate(['orglogin'])


  }

}
