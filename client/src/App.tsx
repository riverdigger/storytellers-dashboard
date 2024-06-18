import './App.css';
import { Navbar } from "./components/Navbar/Navbar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import GameCollection from './components/Game/GameCollection';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold text-center text-white pt-4">
        Active Games
      </h1>
      <GameCollection></GameCollection>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="bg-transparent"
      >
        <SwiperSlide>
          <Card
            title="Chariot of the Gods"
            gameMaster="William Assaf"
            playerCount={4}
            maxPlayerCount={5}
            isNew={true}
            schedule="3-SHOT"
            gameSystem="Alien RPG"
            imageUrl="https://spg-images.s3.us-west-1.amazonaws.com/06724b58-33ab-4752-be32-e3b3e089c9f5"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="The Mhalmet Heist"
            gameMaster="Justin Wendlandt"
            playerCount={0}
            maxPlayerCount={5}
            isNew={true}
            schedule="WEEKLY"
            gameSystem="D&D 5e"
            imageUrl="https://s3.amazonaws.com/files.d20.io/marketplace/1659987/s7g9WzWba133tMptjZ8dfA/med.jpg?1614562353935"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="The Lost Caverns of Tsojcanth"
            gameMaster="Robby Beatie"
            playerCount={3}
            maxPlayerCount={4}
            isNew={true}
            schedule="ONE-SHOT"
            gameSystem="D&D 5e"
            imageUrl="https://dungeonsanddragonsfan.com/wp-content/uploads/2024/03/descent-lost-caverns-tsojcanth-hero-new-art.png"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Keys from the Golden Vault"
            gameMaster=""
            playerCount={2}
            maxPlayerCount={5}
            isNew={true}
            schedule="ONE-SHOT"
            gameSystem="D&D 5e"
            imageUrl="https://www.starburstmagazine.com/wp-content/uploads/2023/03/keys-from-the-golden-vault-cover-art.jpg"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Saturnine Chalice"
            gameMaster="Matteo Valdina"
            playerCount={4}
            maxPlayerCount={5}
            isNew={true}
            schedule="ONE-SHOT"
            gameSystem="Call of Cthulhu"
            imageUrl="https://cdn.shopify.com/s/files/1/0987/8934/products/dead_light_and_other_dark_turns_-_front_cover_-_700x900__82042_1024x1024.jpg?v=1666006153"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Spelljammer"
            gameMaster="Caitlin Cunningham"
            playerCount={5}
            maxPlayerCount={6}
            isNew={false}
            schedule="WEEKLY"
            gameSystem="D&D 5e"
            imageUrl="https://th.bing.com/th/id/R.980a2cce780830ff927568c2909f274c?rik=omojUF0lcolM5g&pid=ImgRaw&r=0&sres=1&sresct=1"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Doskvol in Lockdown"
            gameMaster="Matei Armanasu"
            playerCount={4}
            maxPlayerCount={5}
            isNew={false}
            schedule="WEEKLY"
            gameSystem="Blades in the Dark"
            imageUrl="https://th.bing.com/th/id/OIP.naSM6eig1OIROu-Y2bQ_MwHaEK?rs=1&pid=ImgDetMain"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Electric Dreams"
            gameMaster="Whitney Henderson"
            playerCount={4}
            maxPlayerCount={4}
            isNew={false}
            schedule="TWO-SHOT"
            gameSystem="Blade Runner RPG"
            imageUrl="https://startplaying.games/_next/image?url=https:%2F%2Fspg-images.s3.us-west-1.amazonaws.com%2F9c40cde0-f126-4d84-8e6e-e8a27ac05c89&w=3840&q=75"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Curse of Strahd"
            gameMaster="Paul Kavitz"
            playerCount={5}
            maxPlayerCount={5}
            isNew={false}
            schedule="WEEKLY"
            gameSystem="D&D 5e"
            imageUrl="https://th.bing.com/th/id/OIP.omAMHFh22RsmGnXjYt9jiQAAAA?rs=1&pid=ImgDetMain"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Candlekeep Mysteries"
            gameMaster="Travis Adams"
            playerCount={5}
            maxPlayerCount={5}
            isNew={false}
            schedule="WEEKLY"
            gameSystem="D&D 5e"
            imageUrl="https://i0.wp.com/codexanathema.com/wp-content/uploads/sites/4/2021/01/ckm_key_wallpaper_1920x1080-1717405487-1610512502589.jpg?fit=1189%2C1078&ssl=1"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Waterdeep"
            gameMaster="William Assaf"
            playerCount={5}
            maxPlayerCount={5}
            isNew={false}
            schedule="WEEKLY"
            gameSystem="D&D 5e"
            imageUrl="https://th.bing.com/th/id/OIP.t4RbVyAjhP47licwnsylzQAAAA?rs=1&pid=ImgDetMain"
          ></Card>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default App;
