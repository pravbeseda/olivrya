import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ArtService } from './art.service';

describe('ArtService', () => {
  let spectator: SpectatorService<ArtService>;
  const createService = createServiceFactory(ArtService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});