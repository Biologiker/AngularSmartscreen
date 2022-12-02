import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetPostionOfElementService {
  inputPostionOfElement(e: any) {
    let translateArray = document.getElementById(e)!.style.transform.split('(')[1].split(')')[0].split(',');
    let translateArrayX: number = parseInt(translateArray[0]);
    let translateArrayY: number = parseInt(translateArray[1]);
    let oldValueX: number = parseInt(window.getComputedStyle(document.getElementById("weatherBox")!).left);
    let oldValueY: number = parseInt(window.getComputedStyle(document.getElementById("weatherBox")!).top);
    translateArrayX = translateArrayX + oldValueX;
    translateArrayY = translateArrayY + oldValueY;
    localStorage.setItem('weatherBoxTranslateX', translateArrayX.toString());
    localStorage.setItem('weatherBoxTranslateY', translateArrayY.toString());
  }

  setPostionOfElement() {
    let restorableObjects = ['weatherBox'];
    restorableObjects.forEach(element => {
      let translateX: string = localStorage.getItem(element + 'TranslateX')!.toString() + "px"
      let translateY: string = localStorage.getItem(element + 'TranslateY')!.toString() + "px"
      console.log(translateX)
      console.log(translateY)
      document.getElementById(element)!.style.left = translateX
      document.getElementById(element)!.style.top = translateY


    });
  }
}
