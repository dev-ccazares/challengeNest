import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type ClientDocument = Client & Document; 

@Schema() 
export class Client {
  @Prop() 
  id: string;

  @Prop() 
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

}

export const ClientSchema = SchemaFactory.createForClass(Client); 