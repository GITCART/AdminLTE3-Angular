import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  ngAfterViewInit(){
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('menu-open')){
      this.hideDropdownMenu();
    }else{
      this.showDropdownMenu();
    }
  }

  showDropdownMenu(){
    // this.renderer.addClass(this.dropdownMenu.nativeElement, 'menu-open');
  }

  hideDropdownMenu(){
    // this.renderer.removeClass(this.dropdownMenu.nativeElement, 'menu-open');
  }*/

}
