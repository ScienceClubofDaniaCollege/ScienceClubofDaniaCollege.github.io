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


                <h5 class="text-uppercase font-weight-bold">Send a message</h5>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px;">

                <form name="feedback" style="positon: relative" id="feedback-form">
                <div class="form-group row">
                <label class="col-sm-3 col-form-label">Name:</label>
                <div class="col-sm-9">
                <input  onkeyup="validation()"  name="name" type="text" class="form-control" placeholder="Your name" required>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-3 col-form-label">Email:</label>
                <div class="col-sm-9">
                <input  onkeyup="validation()"  name="email" type="email" class="form-control" placeholder="email@example.com" required>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-3 col-form-label">Message:</label>
                <div class="col-sm-9">
                <textarea  onkeyup="validation()"  name="message" class="form-control" rows="1.5" required></textarea>
                </div>
                </div>
                <button class="sendbtn bg-primary readonly disabled" type="button" onclick="handleFeedbackForm();reload();"style="transition: .5s;">Send</button>
                
                <br><br><br>
                </form>

            </div>

        </div>


    </div>
    <div class="footer-copyright text-center py-3">Developed by:
        <a href="https://nhas.me/">Nurul Huda (Apon) & </a> <a href="http://zahin.cf/">Md Zahin Afsar</a>
    </div>


</footer>`
const footContainer = document.getElementById("footer");
footContainer.innerHTML = footerhtml;


const feedbackForm = document.getElementById("feedback-form");
const sndBtn = document.querySelector('.sendbtn');
async function  handleFeedbackForm() {
    sndBtn.innerHTML = '<div class="loader-spinner" style="display: inline-block"></div>';
    sndBtn.classList.remove('bg-primary')
    sndBtn.classList.add('btn-warning')
    sndBtn.setAttribute('disabled', '');

    let formData = new FormData(feedbackForm);
    let name = formData.get('name');
    let email = formData.get('email');
    let message = formData.get('message');
    console.log(`https://dscapi.herokuapp.com/feedback?name=${name}&email=${email}&message=${message}`,);
    
    await fetch(`https://dscapi.herokuapp.com/feedback?name=${name}&email=${email}&message=${message}`, {mode: 'no-cors'})
        .then(function(response) {
            return response;
        })
        .then(function(text) {
            console.log(text);
        });
    console.log('test');

    sndBtn.innerHTML = '<i class="far fa-check-circle"></i>'
    sndBtn.classList.remove('btn-warning')
    sndBtn.classList.add('btn-success')

setTimeout(()=>{
    feedbackForm.reset();
    sndBtn.innerHTML = 'Send';sndBtn.removeAttribute('disabled');
    sndBtn.classList.remove('btn-success')
    sndBtn.classList.add('bg-primary')
}, 1200)

    
}
