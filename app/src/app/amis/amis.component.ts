import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css'],
})
export class AmisComponent {
  id: string | undefined;

  @Input()
  friendList: Array<string> | undefined;
  constructor(
    private friendsService: FriendsService,
    private activitated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activitated.params.subscribe(
      (data) => {
        this.id = data['id'];
      }
      // friendList = this.friendsService.getFriend();
    );
  }
}
