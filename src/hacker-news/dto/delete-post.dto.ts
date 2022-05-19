import { MinLength, MaxLength, IsString,isEmpty } from 'class-validator';
export class DeletePostDto {
  id: string;

  @MinLength(4)
  @MaxLength(20)
  content: string;

  @MinLength(4)
  @MaxLength(20)
  context: string;

  // @MinLength(4)
  // @MaxLength(20)
  uuid: string;
  
  language_id: string;

  constructor(
      label:string,
      context:string
  ){ }
}