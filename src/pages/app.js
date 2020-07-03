//particlesJS
particlesJS("c-animate", {
    particles: {
      number: {
        value: 275,
        density: {
          enable: true,
          value_area: 2000
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: ["circle", "triangle", "circle"],
        stroke: {
          width: 5,
          color: "#fff"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 10,
          height: 10
        }
      },
      opacity: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: true
        }
      },
      size: {
        value: 12,
        random: true,
        anim: {
          enable: false,
          speed: 45,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 0.7,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "top-bottom-right",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 1200,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 1,
          duration: 2,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  // letter animate
  $(".c-background__title").each(function () {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });
  anime
    .timeline({ loop: false })
    .add({
      targets: ".c-background__title .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: function (el, i) {
        return 220 * (i + 1);
      }
    })
    .add({
      targets: ".c-background__title",
      opacity: 1,
      duration: 700,
      easing: "easeOutExpo",
      delay: 700,
      scale: 1
      // transition: 4,
      // translateX: 110,
    });
  