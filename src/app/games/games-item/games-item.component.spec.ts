import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { GamesItemComponent } from './games-item.component';

describe('GamesItemComponent', () => {
  let spectator: Spectator<GamesItemComponent>;
  const createComponent = createComponentFactory(GamesItemComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
