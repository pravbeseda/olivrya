import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ButtonBackComponent } from './button-back.component';

describe('ButtonBackComponent', () => {
  let spectator: Spectator<ButtonBackComponent>;
  const createComponent = createComponentFactory(ButtonBackComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
