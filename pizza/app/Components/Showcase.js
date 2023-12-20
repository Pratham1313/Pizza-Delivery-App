import React from 'react'
const Showcase = () => {
  return (
   <>
   <br /><br />
    <div className='font-weight-bold  text-center '>
    <div className="btn-group " role="group" aria-label="Basic mixed styles example">
    <button type="button" className="btn btn-primary">Show All</button>
    <button type="button" className="btn btn-success">Veg Only</button>
    <button type="button" className="btn btn-danger">Non-Veg Only</button>
    </div>
    </div>
   <br /><br />
   <div  className='d-flex flex-column justify-content-around'>
    
    {/* 1st */}

   <div className='d-flex justify-content-around mt-5'>      
        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/Cheese_Margherita.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Cheese Margherita</h5>
            <p className="card-text text-center">A hugely popular margherita, with a deliciously tangy single cheese topping</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/Corn_&_Cheese.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Corn & Cheese</h5>
            <p className="card-text text-center">Indulge in the harmonious blend of savory Cheese and the sweetness of Golden Corn </p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/Farmhouse.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Farmhouse</h5>
            <p className="card-text text-center">Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>
   </div>
   
    
     {/* 2nd */}


   <div className='d-flex justify-content-around mt-5'>
        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/chicken_dominator.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Chicken Dominator</h5>
            <p className="card-text text-center">Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/chicken_golden_delight.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Chicken Golden Delight</h5>
            <p className="card-text text-center">Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/chicken_fiesta.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Chicken Fiesta</h5>
            <p className="card-text text-center"> Immerse in the flavors of perfectly grilled chicken rashers, fiery peri-peri chicken, and the crunch of onions and capsicum</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>
   </div>

    {/* 3rd */}

    <div className='d-flex justify-content-around mt-5'>
        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/IndianTandooriPaneer.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Indian Tandoori Paneer</h5>
            <p className="card-text text-center">It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/Mexican_Green_Wave.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Mexican Green Wave</h5>
            <p className="card-text text-center">Pizza loaded with crunchy onions, crisp capsicum, tomatoes and jalapeno with  liberal sprinkling of exotic Mexican herbs.</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/Peppy_Paneer.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Peppy Paneer</h5>
            <p className="card-text text-center"> Revel in the succulent goodness of chunky paneer, the crisp freshness of capsicum, and the fiery kick of spicy red pepper.</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>
   </div>

    {/* 4thd */}


    <div className='d-flex justify-content-around mt-5'>
        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/indi_chcicken_tikka.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Indi Chicken Tikka</h5>
            <p className="card-text text-center">The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/nonveg_supreme.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Nonveg Supreme</h5>
            <p className="card-text text-center">Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end">Order Now</a>
            </div>
        </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
        <img src="/Images/pepper_bbq_chicken.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">Pepper BBQ Chicken</h5>
            <p className="card-text text-center"> Savory bites of pepper barbecue chicken meet the sweet crunch of onions in a perfect harmony of flavors</p>
            <div className='d-flex flex-row  justify-content-around'><h6 className='mt-2'>&#8377;400</h6>
            <a href="#" className="btn btn-warning d-flex flex-row align-items-end justify-content-end ">Order Now</a>
            </div>
        </div>
        </div>
   </div>


   </div>
   </>
  )
}

export default Showcase
