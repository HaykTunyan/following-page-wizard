import * as yup from 'yup';

const stepOne = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.email().required(),

});

export default stepOne;
