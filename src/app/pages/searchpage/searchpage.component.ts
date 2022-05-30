import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/searchResponse.model';
import { YtVideo } from 'src/app/models/ytVideo.model';
import { SearchService } from 'src/app/services/searchservice.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  statusMessage: string = 'Enter a new search'
  enableSearchBtn: boolean = false
  loading: boolean = false
  results: Array<YtVideo> = [];
  ytUrl: string = '';
  showedError = false;

  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.searchConnect();
  }

  checkSearchInput() {
    if (this.ytUrl.replace(/\s/g, '') == '') {
      this.enableSearchBtn = false
    } else {
      this.enableSearchBtn = true
    }
  }

  submitVideo() {
    this.statusMessage = ''
    this.results = []
    this.enableSearchBtn = false;
    this.loading = true;
    this.showedError = false;
    this.searchService.searchVideo(this.ytUrl);
  }

  searchConnect() {
    this.searchService.connect().subscribe(
      {
        next: (msg) => this.handleMessage(msg),
        error: err => this.searchReconnet(),
        complete: () => {}
      }
    )
  }
  searchReconnet() {
    if (this.loading) {
      this.resetSearch('Disconnected. Please try again.')
    }
    setTimeout(() => this.searchService.connect().subscribe(
      {
        next: (msg) => this.handleMessage(msg),
        error: err => this.searchReconnet(),
        complete: () => {}
      }
    )
      , 3000)
  }

  handleMessage(msg: any) {
    msg = SearchResponse.parse(msg)
    if (msg.error) {
      if (!this.showedError)
        this.resetSearch(msg.message)
      this.showedError = true
    } else if (msg.message == 'done') {
      this.resetSearch('No results found')
      this.ytUrl = ''
      this.enableSearchBtn = false
      this.results = msg.data
    } else {
      this.statusMessage = msg.message
    }
  }
  resetSearch(message: string) {
    this.loading = false
    this.enableSearchBtn = true
    this.statusMessage = message
    this.showedError = false
  }

}
