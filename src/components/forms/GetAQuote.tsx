import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Link } from 'gatsby'
import Container from 'components/pages/container'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  path: string
}

const GetAQuote: React.FC<Props> = ({ path }: Props) => {
  /*const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ height: 0 });
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);*/


/*<section className="pb-0">
  <Container>
    <div className="col-lg-12" id="quote-form-container" >
      <IframeResizer
        log
        src="https://sec.infplans.com/forms/get-a-quote.php?agentno=1000000"
        style={{ width: '1px', minWidth: '100%', border: 'none', minHeight: '100%'}}
        scrolling="auto"
      />
    </div>
  </Container>
</section> */
  return (
      <Container>
          <IframeResizer
            log
            src="https://sec.infplans.com/forms/get-a-quote.php?agentno=1000000"
            style={{ width: '1px', minWidth: '100%', border: 'none'}}
            heightCalculationMethod= "lowestElement"
          />
      </Container>
  )
}

export default GetAQuote
