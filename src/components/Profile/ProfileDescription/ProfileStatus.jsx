import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        const status = e.target.value;
        // console.log(status)
        this.setState({
            status: status
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger
        if (this.props.status !== prevProps.status) {
            this.setState({status: this.props.status})
        }
        // debugger
        // let a = this.props;
        // let b = this.state;
    }

    render() {
        // console.log(this.props)
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status} type="text"/>
                    </div>
                }

            </>

        );
    }
}

export default ProfileStatus