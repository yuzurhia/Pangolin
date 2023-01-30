import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISmallPangolin } from '../interface/i-small-pangolin';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css'],
})
export class AmisComponent implements OnChanges {
  pangolinList: Array<ISmallPangolin> | undefined; // Tout les pangolin qui ne sont  pas ami avec le pangolin

  @Input()
  friendList: Array<string> | undefined;
  id: string | undefined;
  // refreshFriendList: EventEmitter<any> = new EventEmitter();

  @Output() refreshFriendList: EventEmitter<any> = new EventEmitter();

  // refreshMethode: Function = this.refreshFriendList;
  constructor(
    private friendsService: FriendsService,
    private activitated: ActivatedRoute
  ) {
    // this.refreshFriendList = new EventEmitter();
  }

  onRefresh() {
    this.refreshFriendList.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes) {
      // this.onRefresh();
    }
  }

  ngOnInit(): void {
    this.activitated.params.subscribe((data) => {
      console.log(this.friendList);

      this.id = data['id'];
    });
    this.friendsService.getAllPangolin().subscribe(
      (data) => {
        this.pangolinList = data.filter(
          (element: any) =>
            // console.log(element._id);
            !this.friendList?.includes(element._id)
        );
      },
      (error) => {
        console.log(error);
      }
    );
    //     this.friendsService await
  }

  onSubmit(pangolinID: string) {
    this.friendsService.addFriend(this.id, pangolinID).subscribe(
      (data) => {
        console.log('pangolin ajouter avec succes');
        this.onRefresh();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // this.refreshFriendList.emit();
  // this.refreshFriendList.emit();
  // this.friendsService.getFriend(this.id).subscribe(
  //   (data) => {
  //     console.log(data);
  //     this.friendList = data;
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  // --------------------------
  // console.log(this.friendList);
}
