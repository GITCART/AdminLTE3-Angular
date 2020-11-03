import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { 
    this.iniciarTable();
  }

  ngOnInit(): void {
  }

  iniciarTable(){
    $(() => {
      $('#example1').DataTable({
        "responsive": true,
        "autoWidth": false,
      });
      $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
      });
    });
  }

}
