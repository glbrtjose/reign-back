import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  created_at: Date,
  title: String,
  url: String,
  author: String,
  points: Number,
  story_text: String,
  comment_text: String,
  num_comments: Number,
  story_id: Number,
  story_title: String,
  story_url: String,
  parent_id: Number,
  created_at_i: Number,
  _tags: Array,
  objectID: String,
  _highlightResult:Object
});
import { Document } from 'mongoose';

export interface Post extends Document {
  created_at: Date,
  title: string,
  url: string,
  author: string,
  points: number,
  story_text: string,
  comment_text: string,
  num_comments: number,
  story_id: number,
  story_title: string,
  story_url: string,
  parent_id: number,
  created_at_i: number,
  _tags: any,
  objectID: string,
  _highlightResult:any
}