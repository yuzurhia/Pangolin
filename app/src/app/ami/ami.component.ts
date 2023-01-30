import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmisComponent } from '../amis/amis.component';
import { Irole } from '../interface/irole';
import { FriendsService } from '../service/friends.service';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css'],
})
export class AmiComponent implements OnChanges {
  nom: string | undefined;
  role!: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';

  @Input()
  idFriend: string | undefined;
  id: string | undefined;
  refreshFriendList!: EventEmitter<any>;

  // @Output()
  onRefresh() {
    this.refreshFriendList.emit();
  }

  constructor(
    private friend: FriendsService,
    private activate: ActivatedRoute // private parent: AmisComponent
  ) {}

  ngOnChanges(): void {
    this.activate.params.subscribe((data) => {
      this.id = data['id'];
    });

    if (this.idFriend) {
      this.friend.pangolin(this.idFriend).subscribe((pangolin) => {
        this.nom = pangolin.nom;
        this.role = pangolin.role;
      });
    }
  }

  onSubmit() {
    console.log('id:' + this.id + '|' + this.idFriend);
    this.friend.removeFriend(this.id, this.idFriend).subscribe(
      (data) => {
        console.log(data);
        this.onRefresh();
        this.refreshFriendList.subscribe(() => {
          // this.refreshFriendList.subscribe(() => {
          console.log("La liste d'ami est rafraichie");
        });
        // });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
