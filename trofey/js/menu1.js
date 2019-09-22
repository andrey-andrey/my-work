var ak = document.getElementsByClassName("accordion1"),
    i;
for (i = 0; i < ak.length; i++) {
    ak[i].onclick = function() {
        for (j = 0; j < ak.length; j++) {
            if (ak[j] !== this) {
                ak[j].classList.remove("active");
                ak[j].nextElementSibling.classList.remove("show");

            } else {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }

        }

    }
}




