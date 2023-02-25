import React, { Component } from 'react'
import CompoItem from './CompoItem';

class CompoA extends Component {
    holy = [
        { "id": 0, "firstName": "Daenerys", "lastName": "Targaryen", "fullName": "Daenerys Targaryen", "title": "Mother of Dragons", "family": "House Targaryen", "image": "daenerys.jpg", "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg" }
    ]
    constructor() {
        super();
        this.state = {
            holy: this.holy,
        }
    }
    async componentDidMount() {
        let url = "https://thronesapi.com/api/v2/Characters";
        let data = await fetch(url);
        let filterData = await data.json();
        console.log(filterData);
        this.setState({
            holy:filterData,
        })
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        {this.state.holy.map((e) => {
                            return <div className='col-lg-4' key={e.id}>
                                <CompoItem  imageUrl={e.imageUrl}  firstName={e.firstName}  lastName={e.lastName} title={e.title} family={e.family}/>
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default CompoA