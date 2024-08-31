import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genre-list-response';
import { StatesListResponse } from './types/states-list-response';
import { BrazilianStatesService } from './services/brazilian-states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersServices: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService
  ){}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  private getUsers(){
    this._usersServices.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres(){
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    });
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }
}
