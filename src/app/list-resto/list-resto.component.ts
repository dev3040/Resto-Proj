import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
import {FormGroup,FormControl} from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {
  lat=23.022774819964077
  lng= 72.5073655025373 

  updateResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  
 
  constructor(private resto:RestoService, private modalService: NgbModal) { }
  result:any=[];
  public errorMsg
  
  ngOnInit(): void {
    this.resto.getlist().subscribe((data)=>{
      this.result=data;
      console.warn(data);
      
    },error => this.errorMsg = error
    )
  }
  // Delete Data=======================================
  deleteResto(id){
    // alert("Deleted :"+id)
    this.result.splice(id-1,1)
    this.resto.deleteResto(id).subscribe((response)=>{
      console.warn(response);
    })
  }
  // UPDATE DATA========================================
  data_id
  collactRecords(){
    console.warn(this.data_id)
    console.warn(this.updateResto.value)
    this.resto.updateRestorunt(this.data_id,this.updateResto.value).subscribe((response)=>{
      console.warn(response);
      alert("Successfully updated");
      window.location.reload();
    })
  }
 
  sendId(id){
    console.warn (this.data_id=id)
  }
  dataId:any=[]
  toggleD(id){
    this.resto.getById(id).subscribe((data)=>{
      this.dataId=data
     console.log(data)
    })

  }
  displayedColumns: string[] = [ 'name', 'address', 'contact','operations'];
   open(content) {
    this.modalService.open(content);
  }
}
