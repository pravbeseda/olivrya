import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ArtApiService } from './art-api.service';

describe('ArtApiService', () => {
  let spectator: SpectatorService<ArtApiService>;
  const createService = createServiceFactory(ArtApiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});