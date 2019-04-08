const footerhtml = `
<br><br><br>

<footer class="page-footer font-small">

    <div class="footup">
        <div class="container">

            <div class="row py-4 d-flex align-items-center">

                <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h5 class="mb-0">Get connected with us on social networks!</h5>
                </div>

                <div class="col-md-6 col-lg-7 text-center text-md-right">


                    <a class="fb-ic">
                        <i class="fab fa-facebook-f white-text mr-4"> </i>
                    </a>

                    <a class="tw-ic">
                        <i class="fab fa-twitter white-text mr-4"> </i>
                    </a>

                    <a class="gplus-ic">
                        <i class="fab fa-google-plus-g white-text mr-4"> </i>
                    </a>
                    <a class="li-ic">
                        <i class="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>

                    <a class="ins-ic">
                        <i class="fab fa-instagram white-text"> </i>
                    </a>

                </div>


            </div>


        </div>
    </div>


    <div class="text-center text-md-left mt-5">


        <div class="row mt-3">

            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">

                <h5 class="text-uppercase font-weight-bold">Contact</h5>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px;">
                <p>
                    <i class="fas fa-home mr-3"></i> Dhaka, Dania 1236, Bangladesh</p>
                <p>
                    <i class="fas fa-envelope mr-3"></i> daniascienceclub@gmail.com</p>
                <p>
                    <i class="fas fa-phone mr-3"></i> +8801787849609</p>
                <p>
                    <i class="fas fa-phone mr-3"></i> +8801948297466</p>

            </div>



            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">


                <h5 class="text-uppercase font-weight-bold">Contributors</h5>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px;">
                <p>
                    <a href="#!">Nurul Huda</a>
                </p>
                <p>
                    <a href="#!">Zahin Afsar</a>
                </p>
                <p>
                    <a href="#!">..</a>
                </p>
                <p>
                    <a href="#!">..</a>
                </p>

            </div>

            <div class="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">


                <h5 class="text-uppercase font-weight-bold">Send a massage</h5>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px;">

                <form>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Name:</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" placeholder="Your name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Email:</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" placeholder="email@example.com">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Messege:</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" rows="1.5"></textarea>
                        </div>
                    </div>
                    <button class="sendbtn bg-primary">SEND</button>
                </form>

            </div>

        </div>


    </div>
    <hr>
    <div class="footer-copyright text-center py-3">Developed by:
        <a href="https://nhas.me/">Nurul Huda (Apon) & </a> <a href="http://zahin.cf/">Md Zahin Afsar</a>
    </div>


</footer>`
const footContainer = document.getElementById("footer");
footContainer.innerHTML = footerhtml;
