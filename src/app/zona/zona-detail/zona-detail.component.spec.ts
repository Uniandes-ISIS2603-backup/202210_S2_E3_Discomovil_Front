// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { ZonaDetailComponent } from './zona-detail.component';
// import { faker } from '@faker-js/faker';
// import { ZonaDetail } from '../zona-detail';
// import { Proveedor } from 'src/app/proveedor/proveedor';
// import { ProveedorDetail } from 'src/app/proveedor/proveedor-detail';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('ZonaDetailComponent', () => {
//   let component: ZonaDetailComponent;
//   let fixture: ComponentFixture<ZonaDetailComponent>;
//   let debug: DebugElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule, RouterTestingModule],
//       declarations: [ ZonaDetailComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ZonaDetailComponent);
//     component = fixture.componentInstance;

//     let proveedor = new ProveedorDetail(
//       faker.datatype.number(),  //id
//       faker.lorem.sentence(), //nombre
//       faker.lorem.sentence(), //descripcion
//       faker.lorem.sentence(),  //trayectorio
//       faker.lorem.sentence(),  //calificacion
//       faker.image.imageUrl(), //imagen
//       [],
//       []
//     );

//     fixture.detectChanges();
//     // debug = fixture.debugElement;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
