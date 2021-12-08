import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;
  imgURL = "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  bgImg = "url("+this.imgURL+")";

  onCapture(){
    html2canvas(document.querySelector("#imgDiv")).then(function(canvas) {
      console.log("qq canvas",canvas);
      document.body.appendChild(canvas);
  });
  
}


setBgImage(){
    const base64 = this.getBase64Image(document.getElementById("golf"));
    console.log("qq base64",base64);
    this.bgImg = "url("+base64+")";
}



  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


  getBase64(){
    fetch("https://api.allorigins.win/raw?url="+this.imgURL).then((res)=>{
      console.log("qq res",res);
    })
  }
  

  /*
  Why do we need base64?
  Since we are going to draw the diagrams on image, we need to set it as a background-image of a div
  If we use img tag then we won't be able to see whatever we draw on image

  If we directly give the URL of image to background of div then, html2canvas is not able to capture the
  background image. It only captures whatever figures we have drawn on the image.

  If we set the background-image of div using base64 of image then we are able to see the proper output

  */
}
