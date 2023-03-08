import React, {useState} from "react";

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onClick={ activateEditMode }>{props.status || '---'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={ onStatusChange } autoFocus={true} value={status} type="text"/>
                </div>
            }

        </div>

    );
}

export default ProfileStatusHooks