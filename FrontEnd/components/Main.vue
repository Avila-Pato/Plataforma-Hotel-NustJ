<!-- src/components/Main.vue -->
<template>
    <!-- ===================== MAIN ==================== -->
    <div> 
      <main class="main">
        <!-- ===================== HOME ==================== -->
        <section class="home section" id="home">
          <img src="public/img/mainhotel.jpg" alt="home image" class="home__bg" />
          <div class="home__shadow"></div>
  
          <div class="home__container container grid">
            <div class="home__data">
              <!-- <h3 class="home__subtitle">Bienvenido a nuestro hotel</h3> -->
              <h1 class="home__title">
                Escápate a Un Lugar Inolvidable
              </h1>
              <p class="home__description">
                Vive la experiencia única de relajarte en nuestros hoteles, elije lo que mas te acomode disfruta de las vistas, el confort y mucho más, ¡haz tu reserva ahora!
              </p>
  
              <a href="#" class="button">
                Reserva ahora <i class="ri-arrow-right-line"></i>
              </a>
            </div>
  
            <div class="home__cards grid">
              <article class="home__card">
                <img
                  src="public/img/home-trees.jpg"
                  alt="home image"
                  class="home__card-img"
                />
                <h3 class="home__card-title">Casa del Arbol</h3>
                <div class="home__card-shadow"></div>
              </article>
  
              <article class="home__card">
                <img
                  src="public/img/home-lake.jpg"
                  alt="home image"
                  class="home__card-img"
                />
                <h3 class="home__card-title">Habitación de Lujo</h3>
                <div class="home__card-shadow"></div>
              </article>
  
              <article class="home__card">
                <img
                  src="public/img/home-mountain.jpg"
                  alt="home image"
                  class="home__card-img"
                />
                <h3 class="home__card-title">Suite con Vista al Mar</h3>
                <div class="home__card-shadow"></div>
              </article>
  
              <article class="home__card">
                <img
                  src="public/img/home-beach.jpg"
                  alt="home image"
                  class="home__card-img"
                />
                <h3 class="home__card-title">Cabaña Privada</h3>
                <div class="home__card-shadow"></div>
              </article>
            </div>
          </div>
        </section>
  
        <!-- ===================== ABOUT ==================== -->
        <section class="about section" id="about">
          <div class="about__container container grid">
            <div class="about__data">
              <h2 class="section__title">
                Información <br />
                Acerca de nuestro trabajo
              </h2>
              <p class="about__description">
                Nuestro agencia es el lugar perfecto para una escapada relajante. Con un servicio excepcional y vistas espectaculares, cada estancia será inolvidable.
              </p>
              <a href="#" class="button">
                Conoce nuestras instalaciones <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="about__image">
              <img
                src="public/img/about-beach.jpg"
                alt="about image"
                class="about__img"
              />
              <div class="about__shadow"></div>
            </div>
          </div>
        </section>
  
        <!-- ===================== POPULAR ==================== -->
        <section class="popular section" id="popular">
          <h2 class="section__title">Habitaciones Populares para el <br /> San Valentin </h2>
          <div class="popular__container container grid">
            <article class="popular__card">
              <div class="popular__image">
                <img
                  src="public/img/room-suite.jpg"
                  alt="popular image"
                  class="popular__img"
                />
                <div class="popular__shadow"></div>
              </div>
              <h2 class="popular__title">Suite Romántica</h2>
              <div class="popular__location">
                <i class="ri-map-pin-line"></i>
                <span> En el Centro del Hotel </span>
              </div>
            </article>
  
            <article class="popular__card">
              <div class="popular__image">
                <img
                  src="public/img/room-jacuzzi.jpg"
                  alt="popular image"
                  class="popular__img"
                />
                <div class="popular__shadow"></div>
              </div>
              <h2 class="popular__title">Habitación con Jacuzzi</h2>
              <div class="popular__location">
                <i class="ri-map-pin-line"></i>
                <span> Planta Alta </span>
              </div>
            </article>
  
            <article class="popular__card">
              <div class="popular__image">
                <img
                  src="public/img/room-sea-view.jpg"
                  alt="popular image"
                  class="popular__img"
                />
                <div class="popular__shadow"></div>
              </div>
              <h2 class="popular__title">Habitación con Vista al Mar</h2>
              <div class="popular__location">
                <i class="ri-map-pin-line"></i>
                <span> Frente al Mar </span>
              </div>
            </article>
          </div>
        </section>
  
        <!-- ===================== JOIN  ==================== -->
        <section class="join section">
          <div class="join__container container grid">
            <div class="join__data">
              <h2 class="Suscripcion__data" id="Susbcripcion">
                Tu Estancia <br />
                Comienza Aquí!
              </h2>
              <p class="join__description">Suscríbete Y gana un sorteo de 2 noches con todo pagado  
                para una pareja el dia de San Valentin
              </p>
              <!-- Formulario de inscripcion al sorteo -->
  
              <form action="" class="join__form">
                <input type="email" placeholder="Tu Correo" class="join__input" />
                <button class="join__button button">
                  Suscríbete y participa por muchos mas premios!
                  <i class="ri-arrow-right-line"></i>
                </button>
              </form>
            </div>
  
            <div class="join__image">
              <img
                src="public/img/home-beach.jpg"
                alt="join image"
                class="join__img"
              />
              <div class="join__shadow"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  const rooms = [
    { image: 'public/img/room-suite.jpg', title: 'Suite Romántica' },
    { image: 'public/img/room-jacuzzi.jpg', title: 'Habitación con Jacuzzi' },
    { image: 'public/img/room-sea-view.jpg', title: 'Habitación con Vista al Mar' },
    { image: 'public/img/room-cabin.jpg', title: 'Cabaña Privada' }
  ];
  </script>
  
  <style scoped>
  /* Styles specific to the hotel promotion */
  </style>
  