import { Component, OnInit } from '@angular/core';
import { DetailsserviceService } from '../../services/details-services/detailsservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {

  showtable = true;
  // ELEMENT_DATA = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
  // ];
  displayedColumns: string[] = ['name', 'number', 'Dueamount', 'monthlyduestatus', 'monthspaid'];
  dataSource: Array<any> = [];
  titleToHeader: string;
  constructor(private route: ActivatedRoute) {
    console.log(this.route.data);
  }

  ngOnInit(): void {
    // this.dataSource = this.ELEMENT_DATA;
    this.titleToHeader = 'Dashboard';
    this.route.data.subscribe((data: any) => {
      this.dataSource = data.data;
    });
  }

  showTable(): any {
    if (this.showtable){
      this.showtable = false;
    } else {
      this.showtable = true;
    }
  }

}
