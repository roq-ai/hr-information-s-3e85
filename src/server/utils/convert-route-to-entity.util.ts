const mapping: Record<string, string> = {
  'employee-data': 'employee_data',
  payrolls: 'payroll',
  teams: 'team',
  'team-members': 'team_member',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
