import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="container d-flex justify-content-between my-2">
                {/*navbar  image  */}
                <img
                    src="https://app.younglabs.in/_next/image?url=%2FYoungLabsLogo.png&w=96&q=75" alt="new" />
                    {/* log in panel */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>

                <div class="modal fade" id="loginModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Enter Your Mobile Number</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type='text' name='number' placeholder='Number' style={{ padding: " 0px 25px ", borderRadius: " 25px" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Nav;