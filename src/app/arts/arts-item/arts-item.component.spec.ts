import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ArtsItemComponent } from './arts-item.component';

describe('ArtsItemComponent', () => {
  let spectator: Spectator<ArtsItemComponent>;
  const createComponent = createComponentFactory(ArtsItemComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
