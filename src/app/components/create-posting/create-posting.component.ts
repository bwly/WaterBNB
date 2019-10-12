import { Component, OnInit } from '@angular/core';
import { Posting } from '../../models/posting';
import { AdpostingService } from '../../adposting.service';

@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostingComponent implements OnInit {

  model = new Posting(null, null, null, null, null, null);
  constructor(private postingService: AdpostingService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.postingService.addPosting(this.model);
  }
}
