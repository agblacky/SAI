<template>
  <div>
    <nav class="navbar navbar-expand-mg navbar-light bg-none shadow fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/logo.jpg" class="icon rounded"/></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-light" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/about"  class="nav-link text-light" >Legal</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="
        container-fluid
        site
        d-flex
        flex-wrap
        justify-content-around
        align-items-center 
        align-content-center
        bg-img
      "
    >
      <div class="col-12 col-md-3 text-light">
        <h2>Description</h2>
        <p>
          SAI is a pixel-art looking klondike solitaire game to play online for free. Find yourself stuck? No
          problem! Our self-created state of the art QLearning neuronal network is going to help you at your
          next decision. <router-link to="/game" class="link-light">Click here to play.</router-link><br />
          <span class="blockquote-footer text-light"> Solitaire made easy </span>
        </p>
      </div>
      <video width="853" height="480" class="img-fluid rounded shadow" controls autoplay loop="true">
        <source src="../assets/preview.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
    <section class="m-5 p-5">
      <div class="container">
        <div class="row justify-content-center text-center section-intro">
          <div class="col-12 col-md-9 col-lg-8">
            <h2 class="display-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              Comments from the developers
            </h2>
            <span class="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"
              >Read what the creators of SAI have to say</span
            >
          </div>
          <!--end of col-->
        </div>
        <!--end of row-->

        <div class="row d-flex justify-content-around feature-list feature-list-sm">
          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/maxpb.png" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Maximilian Blam</h5>
              <p class="card-text">
                "Never underestimate your goals."
              </p>
              <a
                href="https://www.linkedin.com/in/maximilian-b-920b49187/"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/ahmedpb.png" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Ahmed Hasanovic</h5>
              <p class="card-text">
                "Do tomorrow, what you can do tomorrow"
              </p>
              <a
                href="https://www.linkedin.com/in/ahmed-hasanovic-07a215188/"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/moritzpb.png" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Moritz Miedler</h5>
              <p class="card-text">
                "Bruh? Bitte sein Sie mein bruh 🥺"
              </p>
              <a
                href="https://www.linkedin.com/in/moritz-miedler-bb6107189/"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="my-5">
      <div class="container">
        <div class="row justify-content-center text-center section-intro">
          <div class="col-12 col-md-9 col-lg-8">
            <h2 class="display-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              Try it yourself
            </h2>
          </div>
          <!--end of col-->
          <div class="container my-3">
            <div class="card p-0 mx-auto" style="width: 18rem">
              <img src="../assets/preview.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">SAI</h5>
                <p class="card-text">Play it right now online for free!</p>
                <router-link to="/game" class="btn btn-danger">Visit game</router-link>
              </div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
    </section>
  </div>
</template>
