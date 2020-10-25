import React, { Component } from 'react';
import axios from 'axios';
import '../style/Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            title: "",
            poster: "",
            comment: "",
            createdAt: new Date(),
            updateAt: new Date(),
        };
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value,

            }
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        axios
            .post(`https://post-a-form.herokuapp.com/api/movies`, this.state)
            .then(response => {
                if(response.error){
                    alert(response.error);
                }else{
                    alert(`Movie ${this.state.title} succesfully added !`);
                }
            });
    }

    render() {
        return (
            <div className="movieForm">
                <h1>New Movie</h1>

                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">
                        Movie title :
                </label>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="poster">
                        Movie poster URL :
                    </label>
                    <input
                        name="poster"
                        type="text"
                        id="poster"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="comment">Comment :</label>
                    <textarea
                        placeholder="Your comment ..."
                        name="comment"
                        id="comment"
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        )
    }

}