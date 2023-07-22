import React from 'react'

const Register = () => {
  return (
    <>
      <div class="container mt-5 text-center">
        <main class="form-signin w-25 m-auto border border-dark p-1 rounded-4">
            <form>
              <img class="mb-4 rounded-circle" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" width="72" height="57"/>
              <h1 class="h3 mb-3 fw-normal">Please Register</h1>
              <div class="form-floating">

                <input type="text" class="form-control" id="floatingInput" placeholder="a"/>
                <label for="floatingInput">First Name</label>

              </div>
              <div class="form-floating">

                <input type="text" class="form-control" id="floatingInput" placeholder="a"/>
                <label for="floatingInput">Last name</label>

              </div>
              <div class="form-floating">

                <input type="date" class="form-control" id="floatingInput" placeholder="a"/>
                <label for="floatingInput">Date of birth</label>

              </div>
              
              <div class="row g-0">
              
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid">
                
                      <option value="1">+977</option>
                      <option value="2">+91</option>
                      <option value="3">+81</option>
                    </select>
                    <label for="floatingSelectGrid">code</label>
                  </div>
                </div>
                <div class="col-md-8">
                    <div class="form-floating">
                      <input type="number" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com"/>
                      <label for="floatingInputGrid">Contact Number </label>
                    </div>
                  </div>
              </div>
              
          
              <div class="form-floating">

                <input type="email" class="form-control" id="floatingInput" placeholder="a"/>
                <label for="floatingInput">Email address</label>

              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Confirm Password</label>
              </div>
          
            
              <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
             Have an account <a href="./signin.html">Sign In</a>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
    </div>
    </>
  )
}

export default Register