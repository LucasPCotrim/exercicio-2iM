import styled from 'styled-components';

function ApplicationForm() {
  return (
    <>
      <ApplicationFormStyle>
        <div className='form-title'>Processo Seletivo</div>
        <FormSection>
          <div className='section-title'>Dados Pessoais</div>
        </FormSection>
      </ApplicationFormStyle>
    </>
  );
}

export default ApplicationForm;

const ApplicationFormStyle = styled.form`
  width: 70%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .form-title {
    font-size: 36px;
    font-weight: 600;
  }
`;

const FormSection = styled.div`
  .section-title {
    font-size: 30px;
    font-weight: 400;
  }
`;
