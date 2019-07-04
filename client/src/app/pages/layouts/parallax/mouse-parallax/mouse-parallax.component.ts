import { Component, OnInit } from '@angular/core';

interface IParallaxMouse {
  targetContainer: HTMLElement;
  moveFactor: number;
  zIndex: number;
}

@Component({
  selector: 'nlg-mouse-parallax',
  templateUrl: './mouse-parallax.component.html',
  styleUrls: ['./mouse-parallax.component.scss']
})
export class MouseParallaxComponent implements OnInit {

  title = 'Mouse Parallax Component';
  parallaxElements: IParallaxMouse[];

  constructor() { }

  ngOnInit() {
  }

  parallaxMouse(event: MouseEvent, p: IParallaxMouse ) {

    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let percentX = ((mouseX / windowWidth) * p.moveFactor) - (p.moveFactor / 2);
    let percentY = ((mouseY / windowHeight) * p.moveFactor) - (p.moveFactor / 2);

    let topString = (0 - percentY - p.moveFactor) + '%';
    let leftString = (0 - percentX - p.moveFactor) + '%';
    let rightString = (0 - percentX - p.moveFactor) + '%';
    let bottomString = (0 - percentY - p.moveFactor) + '%';

    p.targetContainer.style.top = topString;
    p.targetContainer.style.left = leftString;
    p.targetContainer.style.right = rightString;
    p.targetContainer.style.bottom = bottomString;

    if (p.zIndex) {
      p.targetContainer.style.zIndex = p.zIndex.toString();
    }
  }

}
