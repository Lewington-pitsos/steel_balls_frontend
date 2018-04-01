import React from 'react'

import Category from './Node/Category'

export default class State extends React.Component {
  constructor() {
    super()
  }

  category(property) {
    return <Category category={property} balls={Number(this.props.info[property])} />
  }


  render() {

   console.log(Number(this.props.info.unknown))

    return (
       <div className='state'>
         {this.category('unknown')}
         {this.category('possibly_lighter')}
         {this.category('possibly_heavier')}
         {this.category('normal')}
       </div>
    );
  }
}
