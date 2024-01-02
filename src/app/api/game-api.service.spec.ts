import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { GameApiService } from './game-api.service';

describe('GameApiService', () => {
  let spectator: SpectatorService<GameApiService>;
  const createService = createServiceFactory(GameApiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});