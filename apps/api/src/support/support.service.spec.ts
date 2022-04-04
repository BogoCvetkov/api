import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { EmailService } from '../email/email.service'
import { TemplateService } from '../email/template.service'
import { MockPrismaService } from '../prisma/prisma-client.mock'
import { SupportService } from './support.service'

describe('SupportService', () => {
  let service: SupportService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportService, MockPrismaService, EmailService, TemplateService, ConfigService],
    }).compile()

    service = module.get<SupportService>(SupportService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
