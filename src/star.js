import React from 'react'

export default function Star(props) {
  return (
    <div>
      <img alt='' src={props.value.isfilled?"https://ahlfalconsblog.files.wordpress.com/2010/10/gold-star-2.jpg?w=150&h=106"
                                    :"https://clipart-library.com/images_k/black-star-transparent/black-star-transparent-5.png"}
                                    width={"20px"} />
    </div>
  )
}
