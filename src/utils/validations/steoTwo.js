import * as yup from 'yup';

const stepTwo = yup.object().shape({
  gender: yup.bool().required(),
  picker: yup.string().required(),

});

export default stepTwo;
