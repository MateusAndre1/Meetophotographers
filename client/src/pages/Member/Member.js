import React from "react";

class Member extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            userType: "",
            isUser: false
        };
    }


    componentDidMount() {
        fetch("/api/user_data")
        .then(res => {
            return res.json();
        }).then(data => {
            if (data.userType === "User") {
                this.setState({
                    isUser: true
                })
            }
            this.setState({
                firstName: data.firstName,
                userType: data.userType,
            })
        });
        
    }


    render() {
        return (
            <div className="container">
                {this.state.isUser ? (
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