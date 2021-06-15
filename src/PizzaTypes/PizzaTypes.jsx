import { types } from '@babel/core';
import React from 'react';
import image4 from '../../src/images/C.JPG';
import image5 from '../../src/images/D.JPG';
import image6 from '../../src/images/F.JPG';
import image7 from '../../src/images/IMG_1576.JPG';


const PizzaTypes = (props) => {
    return (
        <div className="container pizza-types">
             <div className="row">
               <p>
               <h1 className="text-center">{props.type}</h1></p>
                 <div className="col-md-3"> 
                     <div className="thumbnail">
                    <img src={image4} alt="..." />
                    <div className="caption">
                      <h3>Pepperoni Pizza</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nihil in maxime vitae atque repudiandae beatae, sint expedita nisi sed,
                        autem doloribus reprehenderit voluptatibus. Quaerat non, 
                        repellat optio natus perferendis incidunt.</p>
                    </div>
                  </div>
                </div>
                 <div className="col-md-3"> 
                     <div className="thumbnail">
                    <img src={image5} alt="..." />
                    <div className="caption">
                      <h3>Vegetable Pizza</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nihil in maxime vitae atque repudiandae beatae, sint expedita nisi sed,
                        autem doloribus reprehenderit voluptatibus. Quaerat non, 
                        repellat optio natus perferendis incidunt.</p>
                    </div>
                  </div>
                  </div>
                 <div className="col-md-3"> 
                     <div className="thumbnail">
                    <img src={image6} alt="..." />
                    <div className="caption">
                      <h3>Cheese Pizza</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nihil in maxime vitae atque repudiandae beatae, sint expedita nisi sed,
                        autem doloribus reprehenderit voluptatibus. Quaerat non, 
                        repellat optio natus perferendis incidunt.</p>
                    </div>
                </div>
                </div>

                 <div className="col-md-3"> 
                     <div className="thumbnail">
                    <img src={image7} alt="..." />
                    <div className="caption">
                      <h3>Bossu</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nihil in maxime vitae atque repudiandae beatae, sint expedita nisi sed,
                        autem doloribus reprehenderit voluptatibus. Quaerat non, 
                        repellat optio natus perferendis incidunt.</p>
                    </div>
                  </div>
                 </div>
             </div>
                 </div>
        
    );
}

export default PizzaTypes;
