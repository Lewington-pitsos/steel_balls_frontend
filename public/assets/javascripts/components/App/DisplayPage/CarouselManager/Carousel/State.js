import React from 'react'

import Category from './CarouselNode/Category'

export default class State extends React.Component {
  constructor() {
    super()
  }

  category(property) {
    return <Category category={property} balls={Number(this.props.info[property])} />
  }


  render() {
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
