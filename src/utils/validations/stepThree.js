import * as yup from 'yup';

const stepThree = yup.object().shape({
  company: yup.string().required(),
  position: yup.string().required(),

});

export default stepThree;
