import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  let spectator: Spectator<GamesComponent>;
  const createComponent = createComponentFactory(GamesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
