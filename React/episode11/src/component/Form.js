// We import useForm from react-hook-form
import { useForm } from 'react-hook-form'
// yup is imported in a different way. It is used for validation
import * as yup from 'yup'
// We import yupResolver as it is used to bridge the yup and react hook form
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {

    // yup is used to define how the shape of a input will be like
    // We use yup for it
    const schema = yup.object().shape({
        // we can pass specific message for errors like here
        fullName: yup.string().required("Your Full Name is required"),
        email: yup.string().email("Please enter email format").required("Your Email is required"),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(8).max(20).required(),
        // To specify how both passwords need to be same
        comfirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required(),
    })

    // We take register, handleSubmit and formState from useForm
    const { register, handleSubmit, formState: { errors } } = useForm({
        // This is how we pass an object to useForm using yupResolver and parametre as schema
        resolver: yupResolver(schema)
    })



    // create a simple function onSubmit, and see we can get data for it from onSubmit from form tags
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        // Here we add handleSubmit to call on Submit
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* check Register function - it is used a name for property */}
            <input type="text" placeholder="FullName" {...register("fullName")} />
            {/* We define the errors like this */}
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email"  {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="age"  {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="password"  {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm password"  {...register("comfirmPassword")} />
            <p>{errors.comfirmPassword?.message}</p>
            <input type="submit" />

        </form>

    )
}