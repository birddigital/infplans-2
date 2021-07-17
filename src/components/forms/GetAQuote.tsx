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
          <iframe src="http://localhost:8001/forms/get-a-quote.php" id="quote-form"></iframe>
        </div>
      </div>
    </Container>
  )
}

export default GetAQuote
