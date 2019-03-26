const footerhtml = `
<br><br><br>
    <div class="footer row">
            <div class="card col-md-4 col-sm-12 fzhn">
                <div class="card-body">
                    <h5>Sortcut keys</h5>
                    <hr>
                    <a href="html/form.html">Registration</a><br>
                    <a href="html/login.html">Login</a><br>
                    <a href="html/about-us.html">About us</a><br>
                    <a href="html/memberlist.html">Member</a><br>
                    <a href="html/events.html">Events</a>
                </div>
            </div>
            <div class="card col-md-4 col-sm-12 fzhn">
                <div class="card-body">
                    <h5>Developed by</h5>
                    <hr>
                    <p><i class="fas fa-portrait"></i><a href="http://nhas.me/">Nurul Huda Apon</a></p>
                    <p><i class="fas fa-portrait"></i><a href="http://zahin.cf/">Md. Zahin Afsar</a></p>
                </div>
            </div>
            <div class="card col-md-4 col-sm-12 fzhn">
                <div class="card-body">
                    <h5>Contact</h5>
                    <hr>
                    <p><a href="href="tel:+8801787849609"">Nurul Huda Apon</a></p>
                    <p><a href="href="tel:+8801948297466"">Md. Zahin Afsar</a></p>
                </div>
            </div>
        <div class="icon">
            <div class="iconfloat">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fas fa-at"></i>
            </div>
        </div>
    </div>`
const footContainer = document.getElementById("footer");
footContainer.innerHTML = footerhtml;
