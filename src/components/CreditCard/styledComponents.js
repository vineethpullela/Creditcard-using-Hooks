import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #3b4b69, #344e7a);
  height: 60vh;
  width: 100vw;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 100vh;
    padding: 10px;
  }
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0;
  align-self: center;
  border-bottom: 4px solid #ffd773;
`
export const Line = styled.hr`
  border: 2px solid #ffd773;
  width: 130px;
  margin-left: 28%;
`
export const CreditCardContainer = styled.div`
  min-height: 220px;
  width: 360px;
  border-radius: 10px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;

  @media screen and (min-width: 768px) {
    margin-top: 25%;
  }
`

export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 5px;
`
export const CardNameLabel = styled.p`
  font-family: 'Roboto';
  color: #d3d9e0;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 5px;
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-top: 0;
`

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin: auto;
  padding: 15px;
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 40vh;
    padding: 20px;
  }
`
export const PaymentContainer = styled.div`
  min-height: 250px;
  width: 400px;
  box-shadow: 0 0 10px #c3cad9;
  border-radius: 30px 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #344e7a;
  font-weight: 400;
  text-align: center;
`
export const CardNumberInput = styled.input`
  height: 40px;
  width: 250px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #d3d9e0;
  outline: none;
  padding: 8px 16px;
  color: #475569;
  background-color: transprant;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-size: 12px;
`
export const CardNameInput = styled.input`
  height: 40px;
  width: 250px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #d3d9e0;
  outline: none;
  padding: 8px 16px;
  color: #475569;
  background-color: transprant;
  font-family: 'Roboto';
  font-size: 12px;
`
