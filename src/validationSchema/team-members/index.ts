import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  join_date: yup.date().nullable(),
  team_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
