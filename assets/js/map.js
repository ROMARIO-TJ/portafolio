document.addEventListener("DOMContentLoaded", (Event) => {
  setTimeout(() => {
    document.querySelector(
      "#load-iframe-map"
    ).innerHTML = `   <iframe class="contacto__map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.405113971396!2d-73.33417882624117!3d9.560302680448741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e607c671c34be47%3A0xf58878eb5b4bb99b!2sCl.%206%20%232-72%2C%20La%20Jag%C3%BCa%20de%20Ibirico%2C%20La%20Jagua%20de%20Ibirico%2C%20Cesar!5e0!3m2!1ses!2sco!4v1728321301595!5m2!1ses!2sco"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        `;
  }, 500);
});
