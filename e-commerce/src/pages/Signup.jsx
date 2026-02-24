import { useForm } from "react-hook-form"

const SignUp = () => {

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <h1>Sign Up Page</h1>
            {/* Sign up form goes here */}
        </div>
    )
}

export { SignUp }