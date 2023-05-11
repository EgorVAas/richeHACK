import React from 'react'
import "./styles/main.css"
import Rich from "../assets/RICHE-name.png"
import section1photo from "../assets/section1photo.jpg"


const Main = () => {
  return (
    <div className='Main__container'>
        <div className='div'></div>
        <div className="section1">
             <img className='main__RichLogo' src={Rich} alt="" />    
            <div className="section1__velcome">
                <div className="section1__left">
                    <h2 className='section1__leftText'>Добро пожаловать в наш магазин RICH! <br /> Мы гордимся тем, что предлагаем нашим <br /> клиентам  лучшие алкогольные напитки <br /> из разных уголков мира. </h2>
                    <h2 className='section1__leftTextp'>В нашем магазине вы найдете широкий выбор <br /> элитных спиртных напитков: <br /> вина, виски, джин и другие. <br /> Мы тщательно отбираем наши <br /> товары у производителей, <br /> которые придают большое значение качеству, <br /> традиции и истории.</h2>
                </div>
                <img className='section1photo' src={section1photo} alt="" />
                <div className="section1__left">
                    <h2 className='section1__leftText'>У нас вы сможете приобрести <br /> эксклюзивные коллекционные бутылки, <br /> редкие вина,  а также специальные <br /> ограниченные серии алкоголя.</h2>
                    <h2 className='section1__leftTextp'>Мы стремимся обеспечить нашим <br /> клиентам высокий уровень сервиса <br /> и качественные продукты, и <br /> надеемся, что вы найдете <br /> то, что ищете <br /> в нашем магазине RICHE. <br /> Спасибо, что выбрали нас!</h2>
                </div>
            </div>
          
        </div>
        <div className="sectionWine">
        </div>
    </div>
  )
}

export default Main