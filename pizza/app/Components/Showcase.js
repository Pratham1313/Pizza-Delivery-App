import React from "react";

const Showcase = (props) => {

  let options = props.options;
  let priceOptions = Object.keys(options)

  return (
    <>
      <div className="card mt-5 " style={{"width": "18rem","marginRight":"10px","marginLeft":"175px"}}>
        <img src={props.imgSrc} className="card-img-top" alt="image thi" />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">{props.Desc}
          </p>
          <div className="container ">
            <select className="h-100 w-20 p-2 rounded">
                {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>
            <select className=" h-100 p-2 m-2 rounded">
                  {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}
            </select>

            <div className="d-inline m-2 fs-6">$123</div>
          </div>
          <a href="#" className="btn btn-primary mt-3 d-flex flex-column justify-items-center">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Showcase;
