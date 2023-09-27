import queryString from 'query-string';
import { EmployeeDataInterface, EmployeeDataGetQueryInterface } from 'interfaces/employee-data';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeData = async (
  query?: EmployeeDataGetQueryInterface,
): Promise<PaginatedInterface<EmployeeDataInterface>> => {
  return fetcher('/api/employee-data', {}, query);
};

export const createEmployeeData = async (employeeData: EmployeeDataInterface) => {
  return fetcher('/api/employee-data', { method: 'POST', body: JSON.stringify(employeeData) });
};

export const updateEmployeeDataById = async (id: string, employeeData: EmployeeDataInterface) => {
  return fetcher(`/api/employee-data/${id}`, { method: 'PUT', body: JSON.stringify(employeeData) });
};

export const getEmployeeDataById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employee-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeDataById = async (id: string) => {
  return fetcher(`/api/employee-data/${id}`, { method: 'DELETE' });
};
