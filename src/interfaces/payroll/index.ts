import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  user_id: string;
  gross_pay?: number;
  net_pay?: number;
  taxes?: number;
  deductions?: number;
  pay_period?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
