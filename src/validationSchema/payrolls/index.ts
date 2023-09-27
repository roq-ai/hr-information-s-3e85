import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  gross_pay: yup.number().integer().nullable(),
  net_pay: yup.number().integer().nullable(),
  taxes: yup.number().integer().nullable(),
  deductions: yup.number().integer().nullable(),
  pay_period: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
