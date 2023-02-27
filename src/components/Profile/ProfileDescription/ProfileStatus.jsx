import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span  onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.status} type="text"/>
                    </div>
                }

            </>

        );
    }
}

export default ProfileStatus