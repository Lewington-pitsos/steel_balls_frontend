import React from 'react'

import Ball from './CarouselManager/Carousel/CarouselNode/Ball'

export default class Legend extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div className='row' id='legend'>
           <div className='col-12 p-0'>
             <h3>Legend</h3>
               <table className="table text-left">
                <tbody>
                  <tr valign='middle'>
                    <td><Ball category='unknown' size=' small'/></td>
                    <td>
                      <h6>Unknown</h6>
                      <p className='whisper'>We have no information at all about this ball. it could be any weight.</p>
                    </td>
                  </tr>
                  <tr valign='middle'>
                    <td><Ball category='possibly_lighter' size=' small'/></td>
                    <td>
                      <h6>Possibly Lighter</h6>
                      <p className='whisper'>This ball is definitly isn't heavier than the normal weight, but it could still be lighter...</p>
                    </td>
                  </tr>
                  <tr valign='middle'>
                    <td><Ball category='possibly_heavier' size=' small'/></td>
                    <td>
                      <h6>Possibly Heavier</h6>
                      <p className='whisper'>This ball is definitly isn't lighter than the normal weight, but it could still be heavier...</p>
                    </td>
                  </tr>
                  <tr valign='middle'>
                    <td><Ball category='normal' size=' small'/></td>
                    <td>
                      <h6>Normal</h6>
                      <p className='whisper'>We can be sure that this ball is not the oddball.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>
      );
   }
}
