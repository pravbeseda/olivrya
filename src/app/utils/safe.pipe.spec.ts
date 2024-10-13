import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';

import { SafePipe } from './safe.pipe';

describe('SafePipe ', () => {
  let spectator: SpectatorPipe<SafePipe>;
  const createPipe = createPipeFactory(SafePipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | safe }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
