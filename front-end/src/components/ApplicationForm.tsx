import styled from 'styled-components';

function ApplicationForm() {
  return (
    <>
      <ApplicationFormStyle>
        <div className='form-title'>Processo Seletivo</div>

        <FormSection>
          <div className='section-title'>Dados Pessoais</div>
          <InputWrapper>
            <h2>Nome</h2>
            <input type='text' name='name' />
          </InputWrapper>
          <InputWrapper>
            <h2>Whatsapp</h2>
            <input type='text' name='whatsapp' />
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
              id='Nenhuma Experiência'
            />
            <label htmlFor='Nenhuma Experiência'>Nenhuma Experiência</label>

            <input
              type='radio'
              name='expLevelFrontEnd'
              id='Alguma Experiência'
            />
            <label htmlFor='Alguma Experiência'>Alguma Experiência</label>

            <input type='radio' name='expLevelFrontEnd' id='Experiente' />
            <label htmlFor='Experiente'>Experiente</label>

            <input type='radio' name='expLevelFrontEnd' id='Muito Experiente' />
            <label htmlFor='Muito Experiente'>Muito Experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input type='number' name='expYears' />
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
              id='Nenhuma Experiência'
            />
            <label htmlFor='Nenhuma Experiência'>Nenhuma Experiência</label>

            <input
              type='radio'
              name='expLevelBackEnd'
              id='Alguma Experiência'
            />
            <label htmlFor='Alguma Experiência'>Alguma Experiência</label>

            <input type='radio' name='expLevelBackEnd' id='Experiente' />
            <label htmlFor='Experiente'>Experiente</label>

            <input type='radio' name='expLevelBackEnd' id='Muito Experiente' />
            <label htmlFor='Muito Experiente'>Muito Experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input type='number' name='expYears' />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Banco de Dados</div>
          <p className='description'>
            Quando falamos de banco de dados, meu nível de experiência é:
          </p>
          <InputWrapper>
            <input type='radio' name='expLevelDb' id='Nenhuma Experiência' />
            <label htmlFor='Nenhuma Experiência'>Nenhuma Experiência</label>

            <input type='radio' name='expLevelDb' id='Alguma Experiência' />
            <label htmlFor='Alguma Experiência'>Alguma Experiência</label>

            <input type='radio' name='expLevelDb' id='Experiente' />
            <label htmlFor='Experiente'>Experiente</label>

            <input type='radio' name='expLevelDb' id='Muito Experiente' />
            <label htmlFor='Muito Experiente'>Muito Experiente</label>
          </InputWrapper>
          <InputWrapper>
            <h2>Anos de Experiência</h2>
            <input type='number' name='expYears' />
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Outras Experiências</div>
          <p className='description'>Possuo conhecimento ou experiência em:</p>
          <InputWrapper>
            <h2>Camunda</h2>
            <input type='radio' name='expBoolCamunda' id='Sim' />
            <label htmlFor='Sim'>Sim</label>

            <input type='radio' name='expBoolCamunda' id='Não' />
            <label htmlFor='Não'>Não</label>
          </InputWrapper>

          <InputWrapper>
            <h2>Mercado de Saúde</h2>
            <input type='radio' name='expBoolHealth' id='Sim' />
            <label htmlFor='Sim'>Sim</label>

            <input type='radio' name='expBoolHealth' id='Não' />
            <label htmlFor='Não'>Não</label>
          </InputWrapper>
        </FormSection>

        <FormSection>
          <div className='section-title'>Comentários</div>
          <InputWrapper>
            <textarea id='w3review' name='w3review' rows={4} cols={50}>
              Teste
            </textarea>
          </InputWrapper>
        </FormSection>
        <button>Enviar</button>
      </ApplicationFormStyle>
    </>
  );
}

export default ApplicationForm;

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
  }
  > input[type='number'] {
    border-radius: 8px;
    height: 30px;
    padding-left: 10px;
    box-shadow: 0px 0px 6px 4px #00000028;
  }
  textarea {
    border-radius: 8px;
    padding: 3px;
    box-shadow: 0px 0px 6px 4px #00000028;
  }
`;
