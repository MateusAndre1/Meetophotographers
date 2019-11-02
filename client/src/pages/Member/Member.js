import React from "react";

class Member extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            userType: ""
        };
    }


    componentDidMount() {
        fetch("/api/user_data")
        .then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                firstName: data.firstName,
                userType: data.userType
            })
        });
    }


    render() {
        return (
            <div className="container">
                {this.state.userType ? (
                    <div>
                      User {this.state.firstName}
                    </div>
                  ) : (
                      <div>
                        Photographer {this.state.firstName}
                      </div>
                    )}
                
            </div>
        )
    }
}

export default Member;