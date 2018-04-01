import React from 'react'

export default class Selection extends React.Component {
  constructor() {
    super()
  }

  category(property, status) {
    return <Category category={status} balls={Number(this.props.info[property][status])} />
  }


  render() {
    return (
      <div className='selection'>
        {this.category('unknown')}
        {this.category('possibly_lighter')}
        {this.category('possibly_heavier')}
        {this.category('normal')}
      </div>
    );
  }
}
