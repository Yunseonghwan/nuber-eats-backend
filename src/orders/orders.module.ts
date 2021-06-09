import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderResolver } from './order.resolve';
import { OrderService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
