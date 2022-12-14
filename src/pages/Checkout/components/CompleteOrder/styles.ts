import styled from "styled-components"

export const CompleteOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
  max-width: 640px;
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  width: 100%;
`

export const BaseFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 95%;
  max-width: 560px;

  padding: 40px;

  @media(max-width: 1200px){
    padding: 6vw 2vw;
  }

  background-color: lightPink;
  border-radius: 6px;
  background-color: ${props => props.theme["base-colors"]["base-card"]};

  header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    width: 100%;
    min-height: 44px;

    .icon-frame{
      display: block;

      width: 22px;
      min-height: 44px;
    }

    .header-content{
      h1{
        font-family: ${props => props.theme["fonts"]["primary-text"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 20px;
        color: ${props => props.theme["base-colors"]["base-subtitle"]};
      }
      p{
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 18px;
        color: ${props => props.theme["base-colors"]["base-text"]};
      }
    }
  }

`

export const AddressFormContainer = styled(BaseFormContainer)`
  gap: 32px;

  min-height: 292px;

  .form-wrapper{
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    min-height: 216px;
    
    label{
      position: relative;

      display: flex;
      align-items: center;
      gap: 8px;

      p{
        font-size: 0.8rem;
        color: ${props => props.theme["base-colors"]["base-text"]};
      }

      .invalid-input-message{
        position: absolute;
        bottom: -34px;

        display: flex;
        align-items: center;

        min-height: 32px;

        padding: 0 8px;
        border-radius: 4px;

        font-size: 0.8rem;
        color: white;
        background-color: #a6312b;
        opacity: 0.95;

        z-index: 999;
      }
    }



    input{
      height: 42px;

      text-indent: 10px;

      border: 1px solid ${props => props.theme["base-colors"]["base-button"]};
      border-radius: 4px;

      background-color: ${props => props.theme["base-colors"]["base-input"]};

      ::placeholder {
        color: ${props => props.theme["base-colors"]["base-label"]};
        font-size: 0.875rem;
      }

      &:disabled{
        background-color: ${props => props.theme["base-colors"]["base-input-disabled"]};
      }

      &:focus{
        border: 1px solid ${props => props.theme["product-colors"]["yellow-dark"]};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    #cep{
      width: 200px;
    }

    #rua{
      width: 100%;
    }

    #numero{
      width: 200px;
    }

    #complemento{
      flex: 1;
    }

    #bairro{
      width: 200px;
    }

    #cidade{
      flex: 1;
    }

    #uf{
      width: 60px;
    }

    .flex{
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;

      width: 100%;
    }
  }
`

export const ChoosePaymentMethodContainer = styled(BaseFormContainer)`
  min-height: 128px;

  .paymentMethods-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 51px;

    input{
      position: absolute;
      display: hidden;
      width: 0px;
      height: 0px;
    }

    input:checked + label{
      border: 1px solid ${props => props.theme["product-colors"]["purple"]};
      background-color: ${props => props.theme["product-colors"]["purple-light"]};
    }

    input[type=radio]:focus-visible + label{
      outline: 2px solid black;
      outline-offset: 2px;
      border: 1px solid transparent;
    }

    label{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      width: 178px;
      height: 51px;

      border: 1px solid transparent;
      border-radius: 6px;

      font-size: 0.75rem;
      font-weight: 400;
      color: ${props => props.theme["base-colors"]["base-text"]};

      background-color: ${props => props.theme["base-colors"]["base-button"]};

      cursor: pointer;

      @media(max-width: 768px){
        font-size: 0.65rem;
        width: 28vw;
        max-width: 178px;
      }

      span{
        color: ${props => props.theme["product-colors"]["purple"]};
      }
    }
  }
  
`