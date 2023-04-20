import api from './api';
import { formType } from '../components/ApplicationForm';

export async function submitApplication(form: formType) {
  return api.post('/applications', form);
}

const applicationApi = { submitApplication };

export { applicationApi };
