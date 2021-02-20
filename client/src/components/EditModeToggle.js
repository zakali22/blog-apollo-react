import React from 'react'
import {ApolloConsumer} from "react-apollo"
import FETCH_EDIT_MODE from "../queries/fetchEditMode"

export default function EditModeToggle() {
    const toggleEdit = (client) => {
        const isEditMode = client.readQuery({query: FETCH_EDIT_MODE})
        client.writeData({
            data: {
                isEditMode: !isEditMode.isEditMode
            }
        })
    }

    return (
        <ApolloConsumer>
            {(client) => {
                const isEditMode = client.readQuery({query: FETCH_EDIT_MODE})
                return (
                    <button onClick={() => toggleEdit(client)}>{isEditMode.isEditMode ? 'Preview mode' : 'Edit mode'}</button>
                )
            }}
        </ApolloConsumer>
    )
}
