import React from "react";
import "./styles/main.css";
import "./media/headerMedia.css"
import Rich from "../assets/RICHE-name.png";
import section1photo from "../assets/section1photo.jpg";
import Winebg from "../assets/wine-bg.png";
import Whiskeybg from "../assets/whiskey-bg.png";
import liquorbg from "../assets/liquor-bg.png";
import ginbg from "../assets/gin-bg.png";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LiquorIcon from "@mui/icons-material/Liquor";
import AddCardIcon from "@mui/icons-material/AddCard";
import RicheLogo from "../assets/RICHE logo.png";

const Main = () => {
  return (
    <div className="Main__container">
      <div className="div"></div>
      <div className="section1">
        <img className="main__RichLogo" src={Rich} alt="" />
        <div className="section1__velcome">
          <div className="section1__left">
            <h2 className="section1__leftText">
              Добро пожаловать в наш магазин RICHE! <br /> Мы гордимся тем, что
              предлагаем нашим <br /> клиентам лучшие алкогольные напитки <br />{" "}
              из разных уголков мира.
            </h2>
            <h2 className="section1__leftTextp">
              В нашем магазине вы найдете широкий выбор <br /> элитных спиртных
              напитков: <br /> вина, виски, джин и другие. <br /> Мы тщательно
              отбираем наши <br /> товары у производителей, <br /> которые
              придают большое значение качеству, <br /> традиции и истории.
            </h2>
          </div>
          <img className="section1photo" src={section1photo} alt="" />
          <div className="section1__left">
            <h2 className="section1__leftText">
              У нас вы сможете приобрести <br /> эксклюзивные коллекционные
              бутылки, <br /> редкие вина, а также специальные <br />{" "}
              ограниченные серии алкоголя.
            </h2>
            <h2 className="section1__leftTextp">
              Мы стремимся обеспечить нашим <br /> клиентам высокий уровень
              сервиса <br /> и качественные продукты, и <br /> надеемся, что вы
              найдете <br /> то, что ищете <br /> в нашем магазине RICHE. <br />{" "}
              Спасибо, что выбрали нас!
            </h2>
          </div>
        </div>
      </div>
      <div className="sectionAlco">
        <img className="WineLeftPhoto" src={Winebg} alt="" />
        <div className="Wine__rignt">
          <h2 className="Wine__rignt_h2">ВИНО</h2>
          <h3 className="Wine__rignt_h3">
            Вино - это не только напиток, но и <br /> культура, искусство и
            наслаждение.
          </h3>
          <p className="Wine__rignt_p">
            Среди популярных вин можно назвать красные вина, <br /> такие как
            Мерло, Каберне Совиньон, Шираз <br /> и Пинот Нуар, а также белые
            вина, такие как Шардоне, <br /> Совиньон Блан, Рислинг и Пино
            Гриджио.
          </p>
        </div>
      </div>
      <div className="sectionAlco sectionAlcoReverse">
        <img className="WineLeftPhoto" src={Whiskeybg} alt="" />
        <div className="Wine__rignt">
          <h2 className="Wine__rignt_h2">ВИСКИ</h2>
          <h3 className="Wine__rignt_h3">
            Виски также является частью культуры <br /> многих стран, в том
            числе Шотландии, <br /> Ирландии, США и Японии.
          </h3>
          <p className="Wine__rignt_p">
            Виски - это один из самых известных и популярных спиртных <br />{" "}
            напитков в мире, произведенный из зерновых культур, <br /> таких как
            ячмень, рожь и кукуруза.{" "}
          </p>
        </div>
      </div>
      <div className="sectionAlco">
        <img className="WineLeftPhoto" src={ginbg} alt="" />
        <div className="Wine__rignt">
          <h2 className="Wine__rignt_h2">ДЖИН</h2>
          <h3 className="Wine__rignt_h3">
            Джин - это прозрачный алкогольный напиток, <br /> который получается
            путем перегонки зерновых <br /> спиртов и добавления ботанических{" "}
            <br /> ингредиентов, включая можжевельник, <br /> кориандр,
            цитрусовые, анис и многие другие.
          </h3>
          <p className="Wine__rignt_p">
            Этот напиток был изобретен в Нидерландах <br /> в 17 веке, но стал
            особенно популярен в Англии, где он был <br /> использован в
            качестве лекарства против малярии
          </p>
        </div>
      </div>
      <div className="sectionAlco sectionAlcoReverse">
        <img className="WineLeftPhoto" src={liquorbg} alt="" />
        <div className="Wine__rignt">
          <h2 className="Wine__rignt_h2">ЛИКЕР</h2>
          <h3 className="Wine__rignt_h3">
            Ликер - это сладкий алкогольный напиток, <br /> который производится
            путем смешивания <br /> алкоголя с фруктовыми, цветочными, <br />{" "}
            травяными и другими ароматными ингредиентами.
          </h3>
          <p className="Wine__rignt_p">
            Ликер известен своим богатым вкусом и ароматом, <br /> который может
            быть сладким, горьким или пряным.{" "}
          </p>
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(249, 214, 165)",
          paddingTop: "1em",
          paddingBottom: "1em",
          marginTop: "1em"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            borderBottom: "2 px solid black",
          }}
        >
          <img style={{ width: "10vw", height: "15vh", marginTop: "4em" }} src={RicheLogo} alt="" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.045645779053!2d74.58507277539424!3d42.87188070261396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec826a9279199%3A0xa864dba98b387b9f!2z0J3Rg9Cy0L7RgNC40Yg!5e0!3m2!1sru!2skg!4v1684230806207!5m2!1sru!2skg"
            width="800"
            height="250"
            style={{ border: "0", borderRadius: "1em", marginTop: "1em" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3em",
            width: "15vw",
            flexWrap: "wrap",
          }}
        >
          <AirportShuttleIcon sx={{ cursor: "pointer" }} />
          <CallIcon sx={{ cursor: "pointer" }} />
          <InstagramIcon sx={{ cursor: "pointer" }} />
          <FacebookIcon sx={{ cursor: "pointer" }} />
          <TwitterIcon sx={{ cursor: "pointer" }} />
          <ShoppingCartIcon sx={{ cursor: "pointer" }} />
          <LiquorIcon sx={{ cursor: "pointer" }} />
          <AddCardIcon sx={{ cursor: "pointer" }} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
