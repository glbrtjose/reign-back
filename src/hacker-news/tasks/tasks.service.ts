import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Observable } from 'rxjs';

@Injectable()
export class TasksService {

  constructor(private _HttpService: HttpService){}
  private readonly logger = new Logger(TasksService.name);

  @Cron('0 * * * *')
  async handleCron():Promise<any> {
    this.logger.debug('Called every hour');
    const apiUrl = `https://hn.algolia.com/api/v1/search_by_date?query=nodejs`;
    let result;
    result = 
    this._HttpService.get(apiUrl);
    return result;
  }
}
