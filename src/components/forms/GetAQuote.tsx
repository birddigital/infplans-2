import React from 'react'
import { Link } from 'gatsby'
import Container from 'components/pages/container'

interface Props {
  path: string
}

const GetAQuote: React.FC<Props> = ({ path }: Props) => {
  return (
    <Container>
      <div className="col-lg-12" id="quote-form-container">
        <div className="embed-container">
          <iframe src="https://adrienb3.sg-host.com/forms/get-a-quote.php" id="quote-form" scrolling="no"></iframe>
        </div>
      </div>
    </Container>
  )
}

export default GetAQuote
