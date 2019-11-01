import React from "react";

class Member extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: ""
        };
    }


    componentDidMount() {
        fetch("/api/user_data")
        .then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                firstname: data.firstname
            })
        });
    }


    render() {
        return (
            <div className="container">
                Welcome sir {this.state.firstname}
            </div>
        )
    }
}

export default Member;