import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapServiceService } from '../../app/map-service.service'
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
@Component({
  selector: 'app-mobile-maps',
  templateUrl: './mobile-maps.component.html',
  styleUrls: ['./mobile-maps.component.css']
})
export class MobileMapsComponent implements OnInit {

  constructor(public MapServiceService: MapServiceService, private activatedroute: ActivatedRoute) {

  } title = ""
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;


  zoom = 12;
  maxZoom = 25;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
  }
  markers = [] as any;
  infoContent = ''
  id: any;
  mapsList: any;
  userid: any;
  orderid: any;
  ptientLattitude:any;
  patientLongitude:any;
  Address:any;
  ngOnInit() {

    // navigator.geolocation.getCurrentPosition((position) => {
    //   debugger
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   }
    // })


    this.activatedroute.params.subscribe(params => {
      debugger
      this.userid = params['userid'];
      this.orderid = params['orderid'];


      this.MapServiceService.GetUserOrdersMapsForPatientApp(this.userid, this.orderid).subscribe(data => {
        debugger
        this.markers.length = 0;
        this.mapsList = data;
  
        this.center = {
          lat: this.mapsList[0].latitude,
          lng: this.mapsList[0].longitude,
        }
        this.ptientLattitude=this.mapsList[0].patientLattitude
        this.patientLongitude= this.mapsList[0].patientLongitude
        this.Address=this.mapsList[0].address
        console.log("maplist", this.mapsList);
        if (data.length != 0) {
          this.dropMarker()
        }
        else {

        }

      })


      const source = timer(1000, 5000);
      const abc = source.subscribe(val => {

      this.MapServiceService.GetUserOrdersMapsForPatientApp(this.userid, this.orderid).subscribe(data => {
        debugger
        this.markers.length = 0;
        this.mapsList = data;
        this.mapsList[0]["Icon"]="assets/bike.png"

        var entity = {
          acceptedBit: true,
          'address': "",
          'addresss':this.Address,
          'colorCode': "",
          'id': 122,
          'latitude':this.ptientLattitude,
          'longitude': this.patientLongitude,
          'modifiedDate': "",
          'Icon':"assets/home.png"
        }
        this.mapsList.push(entity);


        // this.center = {
        //   lat: this.mapsList[0].latitude,
        //   lng: this.mapsList[0].longitude,
        // }
        // navigator.geolocation.getCurrentPosition((position) => {
        //   debugger

        // })
        console.log("maplist", this.mapsList);
        if (data.length != 0) {
          this.dropMarker()
        }
        else {

        }

      })

    });

    }
    )


    // setInterval(this.dropMarker, 1000);





  }

  zoomIn() {
    debugger
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom', this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any, name: string) {
    console.log(event, name);


    // Add marker on double click event
    // if(name === 'mapDblclick'){
    //   debugger
    //   this.dropMarker(event)
    // }
  }

  // Markers
  logCenter() {
    debugger
    console.log(JSON.stringify(this.map.getCenter()))
  }



  dropMarker() {
    debugger

    for (let i = 0; i < this.mapsList.length; i++) {
      this.markers.push({
        position: {
          lat: this.mapsList[i].latitude,
          lng: this.mapsList[i].longitude,
        },
        label: {
          color: this.mapsList[i].colorCode,
          text: '' + (this.markers.length + 1),
        },
        icon: this.mapsList[i].Icon,
        title: '' + (this.markers.length + 1),
        info: this.mapsList[i].addresss,
        options: {
          // animation: google.maps.Animation.DROP,

        },
      })
      debugger
      console.log("markesrs", this.markers);
    }
  }

  // dropMarker(event:any) {
  //   debugger
  //   this.markers.push({
  //     position: {
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //     },
  //     label: {
  //       color: 'blue',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.DROP,
  //     },
  //   })
  // }

  openInfo(marker: MapMarker, content: string) {
    debugger
    this.infoContent = content;

    this.info.open(marker);

  }

}