import body from "./BodyContainer.module.scss"

export default function BodyContainer({children}){


    return(
        <div className={body.container}>
            {children}
        </div>
    )
}