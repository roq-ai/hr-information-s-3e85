import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  job_title: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
