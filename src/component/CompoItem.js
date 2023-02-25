import React, { Component } from 'react'


class CompoItem extends Component {
    render() {
        var { imageUrl, firstName, lastName, title, family } = this.props;
        console.log(firstName);
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {firstName}{lastName}</h5>
                        <h4 className="card-text">Title :{title}</h4>
                        <h4 className="card-text">Family :{family}</h4>

                    </div>
                </div>
            </>
        )
    }
}

export default CompoItem