import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './schemas/client.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor( 
    @InjectModel(Client.name) private readonly clientModel: Model<ClientDocument>, 
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client>{
    return this.clientModel.create(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    return this.clientModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findOneAndUpdate({ _id: id }, updateClientDto, { 
      new: true, 
    });
  }

  async remove(id: string) {
    return this.clientModel.findByIdAndRemove({ _id: id }).exec();
  }
}
