import { Component, Input, OnInit } from '@angular/core';
import { YtVideo } from 'src/app/models/ytVideo.model';

@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.scss']
})
export class PlaylistVideoComponent implements OnInit {
  @Input() video: YtVideo | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
