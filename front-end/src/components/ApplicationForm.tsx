import styled from 'styled-components';
import { useState } from 'react';
import { applicationApi } from '../services/applicationApi';
import { useMutation } from 'react-query';
import LoadingScreen from './LoadingScreen';

export type formType = {
  name: string;
  whatsappString: string;
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
    whatsappString: '',
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
      whatsappString: '',
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
              name='whatsappString'
              value={form.whatsappString}
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
              id='NENHUMA_EXPERIENCIA'
              checked={form.frontEndExp === 'NENHUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'NENHUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='NENHUMA_EXPERIENCIA'>Nenhuma experiência</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='ALGUMA_EXPERIENCIA'
              checked={form.frontEndExp === 'ALGUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'ALGUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='ALGUMA_EXPERIENCIA'>Alguma experiência</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='EXPERIENTE'
              checked={form.frontEndExp === 'EXPERIENTE'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'EXPERIENTE')
              }
            />
            <label htmlFor='EXPERIENTE'>Experiente</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='MUITO_EXPERIENTE'
              checked={form.frontEndExp === 'MUITO_EXPERIENTE'}
              onChange={(e) =>
                handleRadioButton(e, 'frontEndExp', 'MUITO_EXPERIENTE')
              }
            />
            <label htmlFor='MUITO_EXPERIENTE'>Muito experiente</label>
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
              id='NENHUMA_EXPERIENCIA'
              checked={form.backEndExp === 'NENHUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'NENHUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='NENHUMA_EXPERIENCIA'>Nenhuma Experiência</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='ALGUMA_EXPERIENCIA'
              checked={form.backEndExp === 'ALGUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'ALGUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='ALGUMA_EXPERIENCIA'>Alguma Experiência</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='EXPERIENTE'
              checked={form.backEndExp === 'EXPERIENTE'}
              onChange={(e) => handleRadioButton(e, 'backEndExp', 'EXPERIENTE')}
            />
            <label htmlFor='EXPERIENTE'>Experiente</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='MUITO_EXPERIENTE'
              checked={form.backEndExp === 'MUITO_EXPERIENTE'}
              onChange={(e) =>
                handleRadioButton(e, 'backEndExp', 'MUITO_EXPERIENTE')
              }
            />
            <label htmlFor='MUITO_EXPERIENTE'>Muito Experiente</label>
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
              id='NENHUMA_EXPERIENCIA'
              checked={form.dbExp === 'NENHUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'NENHUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='NENHUMA_EXPERIENCIA'>Nenhuma experiência</label>

            <input
              type='radio'
              name='expLevelDb'
              id='ALGUMA_EXPERIENCIA'
              checked={form.dbExp === 'ALGUMA_EXPERIENCIA'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'ALGUMA_EXPERIENCIA')
              }
            />
            <label htmlFor='ALGUMA_EXPERIENCIA'>Alguma experiência</label>

            <input
              type='radio'
              name='expLevelDb'
              id='EXPERIENTE'
              checked={form.dbExp === 'EXPERIENTE'}
              onChange={(e) => handleRadioButton(e, 'dbExp', 'EXPERIENTE')}
            />
            <label htmlFor='EXPERIENTE'>Experiente</label>

            <input
              type='radio'
              name='expLevelDb'
              id='MUITO_EXPERIENTE'
              checked={form.dbExp === 'MUITO_EXPERIENTE'}
              onChange={(e) =>
                handleRadioButton(e, 'dbExp', 'MUITO_EXPERIENTE')
              }
            />
            <label htmlFor='MUITO_EXPERIENTE'>Muito experiente</label>
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
