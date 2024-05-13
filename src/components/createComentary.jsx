
import React, { useState } from "react";
import '../estilos/createComent.css'
import { useComment } from '../shared/hooks/useComment';
import { Input } from '../settings/Input.jsx';

export const CreateComentary = ({}) => {

    const { addComment, isLoading } = useComment();

    const [formState, setFormState] = useState({
        autor: {
            value: '',
            isValid: false,
            showError: false
        },
        comentary: {
            value: '',
            isValid: false,
            showError: false
        },})

        const handleInputValueChange = (value, field) => {
            setFormState((prevState) => ({
                ...prevState,
                [field]: {
                    ...prevState[field],
                    value
                }
            }))
        }

        const handleInputValidationOnBlur = (value, field) => {
            let isValid = false;
            switch (field) {
                case 'autor':
                    isValid = value.length > 0;
                    break;
                case 'comentary':
                    isValid = value.length > 0;
                    break;
                    default:
                        break;
            }
            setFormState((prevState) => ({
                ...prevState,
                [field]: {
                    ...prevState[field],
                    isValid,
                    showError: !isValid
                }
            }))
        }

        const handleAddComment = async (event) => {
            event.preventDefault();
            const response = await addComment(formState.autor.value, formState.comentary.value);
            window.location.reload();
    
        }

        const isSubmitButtonDisabled = isLoading || !formState.autor.isValid || !formState.comentary.isValid

        return (
            <div className="add-comment-container">
                <form className="add-comment-form">
                    <Input
                        field='autor'
                        label='Name of user'
                        value={formState.autor.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        className="input-field"
                    />
                    <Input
                        field='comentary'
                        label='Comment'
                        value={formState.comentary.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        className="input-field"
                    />
                    
                    <br />
                    <br />
                    <div className="button-container">
                        <button className="add-comment-bt" onClick={handleAddComment} >
                            Add Comment
                        </button>
                        <button className="cancel-comment-bt" onClick={() => window.location.href = '/dashboard'}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
}