import React from 'react'
import { Link } from 'gatsby'

interface Props {
  path: string
  label: string
  primary: boolean
}

const ButtonBlack: React.FC<Props> = ({ path, label, primary }: Props) => {
  return (
    <Link className="link-main" to={path}>
    	<button class="btn btn-black-main btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
    		<strong>{label} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></strong>
    	</button>
    </Link>
  )
}

export default ButtonBlack
