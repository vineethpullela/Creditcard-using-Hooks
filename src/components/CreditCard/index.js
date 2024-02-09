import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardHeading,
  CreditCardContainer,
  CardNumber,
  CardNameLabel,
  CardHolderName,
  PaymentCardContainer,
  PaymentContainer,
  PaymentHeading,
  CardNumberInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>

        <CreditCardContainer>
          <CardNumber>{cardNumber}</CardNumber>
          <CardNameLabel>CARDHOLDER NAME</CardNameLabel>
          <CardHolderName>{cardName.toUpperCase()}</CardHolderName>
        </CreditCardContainer>
      </CardContainer>
      <PaymentCardContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeName}
          />
        </PaymentContainer>
      </PaymentCardContainer>
    </MainContainer>
  )
}

export default CreditCard
