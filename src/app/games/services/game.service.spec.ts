import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { GameService } from './game.service';

describe('GameService', () => {
  let spectator: SpectatorService<GameService>;
  const createService = createServiceFactory(GameService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});