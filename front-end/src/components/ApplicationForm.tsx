import styled from 'styled-components';
import { useState } from 'react';
import { applicationApi } from '../services/applicationApi';
import { useMutation } from 'react-query';
import LoadingScreen from './LoadingScreen';

export type formType = {
  name: string;
  whatsapp: string;
  frontEndExp: string;
  frontEndExpYears: number;
  backEndExp: string;
  backEndExpYears: number;
  dbExp: string;
  dbExpYears: number;
  camundaExp: boolean;
  healthcareExp: boolean;
  comments: string;
};

export default function ApplicationForm() {
  const submitApplicationState = useMutation((form: formType) => {
    return applicationApi.submitApplication(form);
  });

  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    frontEndExp: '',
    frontEndExpYears: 0,
    backEndExp: '',
    backEndExpYears: 0,
    dbExp: '',
    dbExpYears: 0,
    camundaExp: false,
    healthcareExp: false,
    comments: '',
  });
  const handleForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };
  const handleRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: string | boolean
  ) => {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };
  const clearForm = () => {
    setForm({
      name: '',
      whatsapp: '',
      frontEndExp: '',
      frontEndExpYears: 0,
      backEndExp: '',
      backEndExpYears: 0,
      dbExp: '',
      dbExpYears: 0,
      camundaExp: false,
      healthcareExp: false,
      comments: '',
    });
  };
  const executeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitApplicationState.mutate(form);
    clearForm();
  };

  if (submitApplicationState.isLoading) {
    return (
      <>
        <LoadingScreen message={'Loading...'} />
      </>
    );
  }

  return (
    <>
      <ApplicationFormStyle onSubmit={executeSubmit}>
        <div className='form-title'>Processo Seletivo</div>

        <FormSection>
          <div className='section-title'>Dados Pessoais</div>
          <InputWrapper>
            <h2>Nome</h2>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleForm}
            />
          </InputWrapper>
          <InputWrapper>
            <h2>Whatsapp</h2>
            <input
              type='text'
              name='whatsapp'
              value={form.whatsapp}
              onChange={handleForm}
              placeholder='(xx) xxxxx-xxxx'
            />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Front-End</div>
          <p className='description'>
            Quando falamos de front-end, meu nível de experiência é:
          </p>
          <InputWrapper>
            <input
              type='radio'
              name='expLevelFrontEnd'
              id='Nenhuma experiência'
              checked={form.frontEndExp === 'Nenhuma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'Nenhuma experiência')
              }
            />
            <label htmlFor='Nenhuma Experiência'>Nenhuma experiência</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='Alguma experiência'
              checked={form.frontEndExp === 'Alguma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'Alguma experiência')
              }
            />
            <label htmlFor='Alguma experiência'>Alguma experiência</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='Experiente'
              checked={form.frontEndExp === 'Experiente'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'Experiente')
              }
            />
            <label htmlFor='Experiente'>Experiente</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='Muito experiente'
              checked={form.frontEndExp === 'Muito experiente'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'Muito experiente')
              }
            />
            <label htmlFor='Muito Experiente'>Muito experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input
              type='number'
              name='frontEndExpYears'
              value={form.frontEndExpYears}
              onChange={handleForm}
            />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Back-End</div>
          <p className='description'>
            Quando falamos de back-end, meu nível de experiência é:
          </p>
          <InputWrapper>
            <input
              type='radio'
              name='expLevelBackEnd'
              id='Nenhuma experiência'
              checked={form.backEndExp === 'Nenhuma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'Nenhuma experiência')
              }
            />
            <label htmlFor='Nenhuma experiência'>Nenhuma Experiência</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='Alguma experiência'
              checked={form.backEndExp === 'Alguma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'Alguma experiência')
              }
            />
            <label htmlFor='Alguma experiência'>Alguma Experiência</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='Experiente'
              checked={form.backEndExp === 'Experiente'}
              onChange={(e) => handleRadioButton(e, 'backEndExp', 'Experiente')}
            />
            <label htmlFor='Experiente'>Experiente</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='Muito experiente'
              checked={form.backEndExp === 'Muito experiente'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'Muito experiente')
              }
            />
            <label htmlFor='Muito experiente'>Muito Experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input
              type='number'
              name='backEndExpYears'
              value={form.backEndExpYears}
              onChange={handleForm}
            />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Banco de Dados</div>
          <p className='description'>
            Quando falamos de banco de dados, meu nível de experiência é:
          </p>
          <InputWrapper>
            <input
              type='radio'
              name='expLevelDb'
              id='Nenhuma experiência'
              checked={form.dbExp === 'Nenhuma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'Nenhuma experiência')
              }
            />
            <label htmlFor='Nenhuma experiência'>Nenhuma experiência</label>

            <input
              type='radio'
              name='expLevelDb'
              id='Alguma experiência'
              checked={form.dbExp === 'Alguma experiência'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'Alguma experiência')
              }
            />
            <label htmlFor='Alguma experiência'>Alguma experiência</label>

            <input
              type='radio'
              name='expLevelDb'
              id='Experiente'
              checked={form.dbExp === 'Experiente'}
              onChange={(e) => handleRadioButton(e, 'dbExp', 'Experiente')}
            />
            <label htmlFor='Experiente'>Experiente</label>

            <input
              type='radio'
              name='expLevelDb'
              id='Muito experiente'
              checked={form.dbExp === 'Muito experiente'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'Muito experiente')
              }
            />
            <label htmlFor='Muito experiente'>Muito experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input
              type='number'
              name='dbExpYears'
              value={form.dbExpYears}
              onChange={handleForm}
            />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Outras Experiências</div>
          <p className='description'>Possuo conhecimento ou experiência em:</p>
          <InputWrapper>
            <h2>Camunda</h2>
            <input
              type='radio'
              name='camundaExp'
              id='Sim'
              checked={form.camundaExp}
              onChange={(e) => handleRadioButton(e, 'camundaExp', true)}
            />
            <label htmlFor='Sim'>Sim</label>

            <input
              type='radio'
              name='camundaExp'
              id='Não'
              checked={!form.camundaExp}
              onChange={(e) => handleRadioButton(e, 'camundaExp', false)}
            />
            <label htmlFor='Não'>Não</label>
          </InputWrapper>

          <InputWrapper>
            <h2>Mercado de Saúde</h2>
            <input
              type='radio'
              name='heathcareExp'
              id='Sim'
              checked={form.healthcareExp}
              onChange={(e) => handleRadioButton(e, 'healthcareExp', true)}
            />
            <label htmlFor='Sim'>Sim</label>

            <input
              type='radio'
              name='heathcareExp'
              id='Não'
              checked={!form.healthcareExp}
              onChange={(e) => handleRadioButton(e, 'healthcareExp', true)}
            />
            <label htmlFor='Não'>Não</label>
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Comentários</div>
          <InputWrapper>
            <textarea
              id='comments'
              name='comments'
              rows={4}
              cols={50}
              value={form.comments}
              onChange={handleForm}></textarea>
          </InputWrapper>
        </FormSection>
        <button>Enviar</button>
      </ApplicationFormStyle>
    </>
  );
}

const ApplicationFormStyle = styled.form`
  width: min(80%, 700px);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 200px;
  .form-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  button {
    width: 100px;
    background-color: var(--secundary-color);
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
`;

const FormSection = styled.div`
  .section-title {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .description {
    font-size: 20px;
    margin-bottom: 20px;
  }
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  > h2 {
    font-size: 18px;
    font-weight: 300;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  > input[type='text'] {
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    color: var(--quaternary-color);
    box-shadow: 0px 0px 6px 4px #00000028;
    &:focus {
      background-color: #e6e6e6;
    }
  }
  > input[type='radio'] {
    margin: 15px;
    cursor: pointer;
    width: 20px;
  }
  > input[type='number'] {
    border-radius: 8px;
    height: 30px;
    width: 90px;
    padding-left: 10px;
    box-shadow: 0px 0px 6px 4px #00000028;
  }
  textarea {
    border-radius: 8px;
    padding: 3px;
    box-shadow: 0px 0px 6px 4px #00000028;
  }
`;
