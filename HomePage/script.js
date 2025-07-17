const containers = document.querySelectorAll(".products");
      containers.forEach((containers) => {
        containers.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          containers.scrollLeft += evt.deltaY * 3;
        });
      });
