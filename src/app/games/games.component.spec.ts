import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { GamesComponent } from './games.component';
import { mockProvider } from '@ngneat/spectator';
import { ActivatedRoute } from '@angular/router';

describe('GamesComponent', () => {
  let spectator: Spectator<GamesComponent>;
  const createComponent = createComponentFactory({
    component: GamesComponent,
    providers: [mockProvider(ActivatedRoute)],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
