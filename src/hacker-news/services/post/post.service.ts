import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Post } from 'src/hacker-news/schemas/post.schema';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_MODEL')
    private postModel: Model<Post>,
  ) {}

  async insertMany(_CreatePostDto: any[]): Promise<any> {
    const items = (await this.postModel.find()).map(item => item.objectID);
    let result = {};
    const data = _CreatePostDto.filter((item) => !items.includes(`${item.objectID}`));
    result = await this.postModel.insertMany(data);
    return result;
  }

  async delete(_id): Promise<Post[]> {
    await this.postModel.deleteOne({_id:`${_id}`}).exec();
    const res = await this.findAll({limit:5});
    return res;
  }

  async findAll(params:any = {}): Promise<Post[]> {
    const { search, filterBy} = params;
    const limit = (params.limit>0&&params.limit<6)?params.limit:5;
    let filter = {};
    if(search&&filterBy)
      filter[filterBy || 'author'] = new RegExp(search, 'i');
    const result = await (
      this.postModel
      .find(filter)
      .limit( limit )
      .sort({created_at: 1}).exec()
    );
    return result;
  }
}