import React from 'react'
import { Link } from 'gatsby'
import Container from 'components/pages/container'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  path: string
}

const GetAQuote: React.FC<Props> = ({ path }: Props) => {
  return (
    <section className="pb-0">
      <Container>
        <div className="col-lg-12" id="quote-form-container">
          <IframeResizer
            log
            src="https://adrienb3.sg-host.com/forms/get-a-quote.php?agentno=1000000"
            style={{ width: '1px', minWidth: '100%', border: 'none'}}
          />
        </div>
      </Container>
    </section>
  )
}

export default GetAQuote
