import React from "react"

export default function Footer() {
  return (
    <Footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 textyellow text-center text-capitalize">
            <h3>
              All right reserved &copy; {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </Footer>
  )
}
