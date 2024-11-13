import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AlertsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAlertDto: Prisma.AlertCreateInput) {
    return this.databaseService.alert.create({ data: createAlertDto });
  }

  async findAll(entityType?: 'DEVICE' | 'APP') {
    if (entityType)
      return this.databaseService.alert.findMany({ where: { entityType } });
    return this.databaseService.alert.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.alert.findUnique({ where: { id } });
  }

  async update(id: number, updateAlertDto: Prisma.AlertUpdateInput) {
    return this.databaseService.alert.update({
      where: { id },
      data: updateAlertDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.alert.delete({ where: { id } });
  }
}
