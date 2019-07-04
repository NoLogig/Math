import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewChecked, AfterViewInit, OnChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import maths from 'src/app/services/math/utils.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface IVideoPlayer {
  controls: boolean;
  poster: string;
  src: string;
  loop: boolean;
  autoplay: boolean;
}
export interface IMediaFile extends File {
  url: string;
  saveUrl: SafeUrl;
}

@Component({
  selector: 'nlg-gn8-player',
  templateUrl: './gn8-player.component.html',
  styleUrls: ['./gn8-player.component.scss']
})
export class Gn8PlayerComponent implements OnInit {


  @ViewChild('player') videoRef: ElementRef;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({ matches }) => {
    if (matches) {
      return [
        // { title: 'Card 1', cols: 6, rows: 2 },
        { title: 'Card 2', cols: 6, rows: 2 },
        { title: 'Card 3', cols: 6, rows: 3 }
      ];
    }
    return [
      // { title: 'Card 1', cols: 4, rows: 3 },
      { title: 'Card 2', cols: 2, rows: 3 },
      { title: 'Card 3', cols: 6, rows: 3 }
    ];
  }));

  v = {
    player: HTMLVideoElement,
    controls: true,
    poster: "./assets/images/poster/Ethereum-homestead-background-10.jpg",
    files: [] as IMediaFile[],
    file: {} as IMediaFile,
    mediaSrcs: [] as string[],
    playLists: [],
    playList: [],
    tracks: [],
    track: null
  };

  fileReader: HTMLInputElement;
  selectList: IMediaFile[] = [];
  videoPlayer: HTMLVideoElement;
  playList = [];
  currentVideo: string;

  constructor(private rend: Renderer2, private domSanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.videoPlayer = this.videoRef.nativeElement;
    // this.videoPlayer.width =  window.innerWidth * 0.68;
    // this.rend.listen(this.video, 'load', () => console.log('video load'));
  }

  select2Paylist(name: string) {
    this.playList.push({ name, files: this.selectList });
  }

  autoplayNext() {

  }

  selectLocalMedias(fileList: FileList): IMediaFile[] {

    let tmpList: IMediaFile[] = [];
    let URL = window.URL;

    if (fileList[0]) {

      for (let i = 0, limit = fileList.length; i < limit; i++) {

        let media = fileList[i] as IMediaFile;
        media.url = URL.createObjectURL(fileList[i]);
        media.saveUrl = this.domSanitizer.bypassSecurityTrustUrl(media.url);

        tmpList.push(media);
      }
      return tmpList;
    }
  }

  files2Playlist(files: IMediaFile[], playList): void {
    
    if (files[0]) {
      playList.push(files);
    }
  }

  rndVideo(pool: IMediaFile[]) {
    return Math.floor(Math.random() * pool.length);
  }

  playRnd() {
    let media = this.selectList[this.rndVideo(this.selectList)];
    this.currentVideo = media.name;
    this.videoPlayer.src = media.url;
    this.videoPlayer.play();
  }

  setVideoURL(url: SafeUrl, player: HTMLVideoElement): void
  setVideoURL(url: string, player: HTMLVideoElement): void {
    player.src = url;
  }

  scrollVolume(e: WheelEvent): void {
    e.preventDefault();
    // Need to round cuz 0.94 rounding bug that turns value into 0.93999... 
    // Therefore it's impossible to mute the player with scolling volume value.
    if (e.deltaY < 0 && this.videoPlayer.volume < 1.00) {
      this.videoPlayer.volume = maths.roundToPlaces(this.videoPlayer.volume += 0.01, 3);
      return;
    }
    if (this.videoPlayer.volume >= 0.01) this.videoPlayer.volume = maths.roundToPlaces(this.videoPlayer.volume -= 0.01, 3);
  }

  test() {
    console.log(this.playList);
    console.log(this.selectList);
  }
}

// let myReader = new FileReader();
// myReader.onloadend = (e) => {
//   // you can perform an action with readed data here
//   this.video.src = myReader.result as string;
// }
// myReader.readAsDataURL(files[0]);
