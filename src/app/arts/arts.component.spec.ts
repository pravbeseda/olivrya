import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ArtsComponent } from './arts.component';

describe('ArtsComponent', () => {
  let spectator: Spectator<ArtsComponent>;
  const createComponent = createComponentFactory(ArtsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
