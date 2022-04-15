import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapServiceService } from '../app/map-service.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public MapServiceService: MapServiceService, private activatedroute: ActivatedRoute) {

  }

  // title = ""
  // @ViewChild('myGoogleMap', { static: false })
  // map!: GoogleMap;
  // @ViewChild(MapInfoWindow, { static: false })
  // info!: MapInfoWindow;


  // zoom = 12;
  // maxZoom = 15;
  // minZoom = 8;
  // center!: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   mapTypeId: 'hybrid',
  //   maxZoom: this.maxZoom,
  //   minZoom: this.minZoom,
  // }
  // markers = [] as any;
  // infoContent = ''
  // id: any;
  // mapsList: any;

//   ngOnInit() {

//     var urlstring = (window.location.href.replace('#', ''))
//     var urlsss = new URL(urlstring);
//     debugger
//     this.id = urlsss.searchParams.get("id");
//     navigator.geolocation.getCurrentPosition((position) => {
//       debugger
//       this.center = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//       }
//     })

//     this.activatedroute.params.subscribe(params => {
//       debugger
//       this.id = params['id'];
//       this.MapServiceService.GetMyOrdersMapsForPhelboMob(14).subscribe(data => {
//         debugger
//         this.mapsList = data;
//         console.log("maplist", this.mapsList);
//         if(data.length!=0)
//         {
//           this.dropMarker()
//         }
//         else{

//         }
       
//       })

//     }
//     )


//     // setInterval(this.dropMarker, 1000);





//   }

//   zoomIn() {
//     debugger
//     if (this.zoom < this.maxZoom) this.zoom++;
//     console.log('Get Zoom', this.map.getZoom());
//   }

//   zoomOut() {
//     if (this.zoom > this.minZoom) this.zoom--;
//   }

//   eventHandler(event: any, name: string) {
//     console.log(event, name);


//     // Add marker on double click event
//     // if(name === 'mapDblclick'){
//     //   debugger
//     //   this.dropMarker(event)
//     // }
//   }

//   // Markers
//   logCenter() {
//     debugger
//     console.log(JSON.stringify(this.map.getCenter()))
//   }



//   dropMarker() {
//     debugger

//     for(let i=0;i<this.mapsList.length;i++)
//     {
//     this.markers.push({
//       position: {
//         lat: this.mapsList[i].latitude,
//         lng: this.mapsList[i].longitude,
//       },
//       label: {
//         color:  this.mapsList[i].colorCode,
//         text: '' + (this.markers.length + 1),
//       },

//       title: '' + (this.markers.length + 1),
//       info: this.mapsList[i].addresss,
//       options: {
//         animation: google.maps.Animation.DROP,
//       },
//     })
//     debugger
//     console.log("markesrs",this.markers);
//   }
// }

//   // dropMarker(event:any) {
//   //   debugger
//   //   this.markers.push({
//   //     position: {
//   //       lat: event.latLng.lat(),
//   //       lng: event.latLng.lng(),
//   //     },
//   //     label: {
//   //       color: 'blue',
//   //       text: 'Marker label ' + (this.markers.length + 1),
//   //     },
//   //     title: 'Marker title ' + (this.markers.length + 1),
//   //     info: 'Marker info ' + (this.markers.length + 1),
//   //     options: {
//   //       animation: google.maps.Animation.DROP,
//   //     },
//   //   })
//   // }

//   openInfo(marker: MapMarker, content: string) {
//     debugger
//     this.infoContent = content;
//     this.info.open(marker)
//   }
}

