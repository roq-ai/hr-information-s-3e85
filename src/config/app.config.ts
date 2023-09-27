interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager', 'Business Owner', 'Payroll Administrator', 'Accountant'],
  tenantName: 'Team',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage employee data',
    'Manage vacations',
    'Manage payroll',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9f81d09c-1f4d-496a-8482-c1e3f10cf5ee',
};
