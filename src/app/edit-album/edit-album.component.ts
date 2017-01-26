import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model'
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})


export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  editAlbumForm = null;

  editAlbumButton = true;

  showEdit(selectedAlbum) {
    this.editAlbumForm = selectedAlbum;
    this.editAlbumButton = null;
  }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate) {
    this.albumService.updateAlbum(albumToUpdate);
    this.editAlbumForm = null;
    this.editAlbumButton = true;
  }

  beginDeletingAlbum(albumToDelete) {
    if(confirm("Are you sure you want to delete this album?")) {
      this.albumService.deleteAlbum(albumToDelete);
    }
  }

}
