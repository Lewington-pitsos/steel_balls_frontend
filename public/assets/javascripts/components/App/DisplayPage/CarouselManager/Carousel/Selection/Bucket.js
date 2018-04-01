import React from 'react'

import Category from '../CarouselNode/Category'

export default class Bucket extends React.Component {
  category(property, status) {
    return <Category category={status} balls={Number(this.props.info[property][status])} />
  }


  render() {
    return (
      <div className='bucket'>
        {this.category(this.props.side, 'unknown')}
        {this.category(this.props.side, 'possibly_lighter')}
        {this.category(this.props.side, 'possibly_heavier')}
        {this.category(this.props.side, 'normal')}
      </div>
    );
  }
}
