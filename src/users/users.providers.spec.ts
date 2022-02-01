import { Test, TestingModule } from '@nestjs/testing';
import { UsersProviders } from './users.providers';

describe('UsersProviders', () => {
  let provider: UsersProviders;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersProviders],
    }).compile();

    provider = module.get<UsersProviders>(UsersProviders);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
