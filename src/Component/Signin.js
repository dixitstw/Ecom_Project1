import React from 'react'
import Card from './Card'
import Footer from './Footer'
import Navbar from './Navbar'

const signin = () => {
  return (
    <>

    <div class="container mt-5 text-center">
        <main class="form-signin w-25 m-auto border border-dark p-1 rounded-4">
            <form>
              <img class="mb-4 rounded-circle" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" width="72" height="57"/>
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          
              <div class="form-floating">

                <input type="email" class="form-control" id="floatingInput" placeholder="a"/>
                <label for="floatingInput">Email address</label>

              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
          
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              Don't have an account <a href="./register.html">Register</a>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
    </div>
    
    </>
  )
}

export default signin