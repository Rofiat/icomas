import {React, useState} from 'react';
import cart1 from "../../images/cart1.png";
import { Card } from 'antd';
// import { Button, Navbar } from 'flowbite-react';
import rainbowlady from "../../images/rainbowlady.jpg";
import jeanlady from "../../images/jeanlady.jpg";
import jumptoplady from "../../images/jumptoplady.jpg";
import coffeelady from "../../images/coffeelady.jpg";
import shorttop from "../../images/shorttop.jpg";
import finebabe from "../../images/finebabe.jpg";
import hajia from "../../images/hajia.jpg";
import jacketlady from "../../images/jacketlady.jpg";
import babewithcap from "../../images/babewithcap.jpg";
import { Image, Divider } from 'antd';


const Header = () => {
  const pics = [
    {
      id: 1,
      img: shorttop,
      title: "London",
      price: "$20",
      desc: "men"
    },
    {
      id: 2,
      img: jeanlady,
      title: "Germany",
      price: "$25",
      desc: "women"
    },
    {
      id: 3,
      img: babewithcap,
      title: "Egypt",
      price: "$30",
      desc: "boys"
    },
    {
      id: 4,
      img: finebabe,
      title: "Iran",
      price: "$35",
      desc: "girls"
    },
    {
      id: 5,
      img: hajia,
      title: "Iraq",
      price: "$40",
      desc:"unisex"
    },
    {
      id: 6,
      img: jacketlady,
      title: "NewYork",
      price: "$45",
      desc:"women"
    },
  ];


  console.log(pics[3].desc);

  const [filterTags, setFilterTags] = useState([])

  const filteredDATA = 
    pics.filter((item) => 
    filterTags.length > 0
    ? filterTags.every((filterTag) =>
      item.desc===(filterTag)
     )
     : pics
     )

    console.log(filteredDATA);
      
                                                              

  const filterHandler = (event) => {

    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      )
    }
  }
 // console.log(filterHandler);

  return (
    <div className="md:my-2 w-full h-full">
      <nav className="px-[8%] py-3 w-full sticky top-0 bg-white shadow-md">
        <div className="font-bold text-3xl tracking-wide leading-loose">ICOMAS-
          <img src={cart1} className="float-right w-7 my-5" alt="cartpic" />
        </div>
      </nav>
      <div className="w-full h-full px-[7%] py-8 md:py-16 mb-10">
        <div className="flex md:flex-row md:place-content-between">
          <div className="font-bold text-2xl tracking-wide">Latest Image</div>
          <button className="hidden md:flex text-base bg-black text-white w-[25%] text-center my-0 px-[5%] lg:px-[6%] py-2">ADD TO CART</button>
        </div>
        <div className="relative w-full px-auto z-[-1]">
          <img src={rainbowlady} alt="backpic" className="py-10 w-full" />
          <div className="absolute bottom-10 left-0 bg-pink-200"><p className="py-4 px-8 font-bold">Photo of the day</p></div>
        </div>
        <button className="block md:hidden text-base bg-black text-white w-full my-0 px-5 py-2">ADD TO CART</button>
        <div className="md:flex md:place-content-between my-2">
          <p className="font-bold text-md md:text-2xl tracking-wide justify-center">About the latest Image</p>
          <p className="font-bold text-md md:text-2xl tracking-wide hidden md:flex">People also buy</p>
        </div>
        <div className="w-full my-5 sm:flex md:gap-20 lg:gap-60"> 
          <p className="sm:w-2/4 lg:w-full sm:tracking-wide justify-center sm:text-md lg:text-md text-slate-500 text-sm py-2 sm:float-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          </p>
          <div className=''>
            <div className="font-bold text-md tracking-wide md:hidden py-2">People also buy</div>
            <div className="flex gap-5 sm:float-right sm:gap-2">
              <Image
              width={120}
              height={140}
              src={jumptoplady}
              className='object-contain'
              />
              <Image
              width={120}
              height={130}
              src={rainbowlady}
              className='object-contain'
              />
              <Image
              width={120}
              height={130}
              src={coffeelady}
              className='object-contain'
              />
            </div>
            <div className="flex-row">
              <p className="font-bold text-md md:text-2xl tracking-wide sm:text-right py-2">Details</p>
              <p className="text-slate-500 sm:text-right">Size:1020 x 1020 pixel</p>
              <p className='text-slate-500 tracking-wide sm:text-right'>Size:15mb</p>
            </div>
          </div>
        </div>
        <Divider className="h-0.5 bg-gray-400 mb-10"/>
        <div className="border border-gray-200 w-full mx-auto sm:h-[1000px] py-4 px-1 sm:py-7 sm:pr-3 sm:flex sm:gap-5">
          <div className="sm:w-[300px] sm:mx-5">
            <p className="font-bold text-xl my-5">Category</p>
              <ul>
              <div>
                <label className="list-group-item">
                  <input 
                  type="checkbox" 
                  className="form-check-input me-6" 
                  onChange={filterHandler}
                  value="men"
                  id="men" 
                />
                  men
                </label>
              </div>
              <div>
                <label className="list-group-item">
                  <input 
                  type="checkbox" 
                  className="form-check-input me-6" 
                  onChange={filterHandler}
                  value="women"
                  id="women"
                  />
                  women
                </label>
              </div>
              <div className="list-group">
                <label className="list-group-item">
                  <input 
                  type="checkbox" 
                  className="form-check-input me-6" 
                  onChange={filterHandler}
                  value="boys"
                  id="boys" 
                  />
                  boys
                </label>
              </div>
              <div>
                <label className="list-group-item">
                  <input 
                  type="checkbox" 
                  className="form-check-input me-6" 
                  value="girls"
                  onChange={filterHandler}
                  id="girls" 
                  />
                  girls
                </label>
              </div> 
              <div>
                <label className="list-group-item">
                  <input 
                  type="checkbox" 
                  className="form-check-input me-6" 
                  value="unisex" 
                  onChange={filterHandler}
                  id="unisex"
                  />
                  unisex
                </label>
              </div>
          
              </ul>
             


                             
          <p className="font-bold text-xl my-5">Price Range</p>
              <div className="list-group">
                <label className="list-group-item">
                  <input type="radio" className="form-check-input me-6 brand_filter" name="price" />Less than $20
                </label>
              </div>
              <div className="list-group">
                <label className="list-group-item">
                  <input type="radio" className="form-check-input me-6 brand_filter" name="price" />$20 - $100
                </label>
              </div>
              <div className="list-group">
                <label className="list-group-item">
                  <input type="radio" className="form-check-input me-6 brand_filter" name="price" />$100 - $200
                </label>
              </div>
              <div className="list-group">
                <label className="list-group-item">
                  <input type="radio" className="form-check-input me-6 brand_filter" name="price" />Greater than $200
                </label>
              </div> 
          </div>
          <div className="border border-gray-200 w-full h-full py-5 px-5 md:px-10 sm:py-9 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
           {filteredDATA?.map((somet) => (
            <Card
              key={somet.id}
              hoverable
              style={{
                width: 230,
              }}
              cover={<Image height={250} alt="example" src={somet.img} className="rounded-none" />}
              className="rounded-none"
            >
              <Card.Meta description={somet.desc} title={somet.title} />
              <div className="additional py-2">
              <p className="price">{somet.price}</p>
              </div>
            </Card>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
