import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetPostionOfElementService {
  inputPostionOfElement(e: any) {
    let translateArray = document.getElementById(e)!.style.transform.split('(')[1].split(')')[0].split(',');
    let translateArrayX: number = parseInt(translateArray[0]);
    let translateArrayY: number = parseInt(translateArray[1]);
    let oldValueX: number = parseInt(window.getComputedStyle(document.getElementById("weatherBox")!).marginLeft);
    let oldValueY: number = parseInt(window.getComputedStyle(document.getElementById("weatherBox")!).marginTop);
    translateArrayX = translateArrayX + oldValueX;
    translateArrayY = translateArrayY + oldValueY;
    localStorage.setItem('weatherBoxTranslateX', translateArrayX.toString());
    localStorage.setItem('weatherBoxTranslateY', translateArrayY.toString());
  }

  setPostionOfElement() {
    //let restorableObjects = 
  }
}
