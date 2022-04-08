import team from "../data";
import Single from "./Single";

const Team = (props) => {

    return(
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center shadow py-3"> {props.title} </h1>
                    </div>
                </div>
                <div className="row">
                    {
                        team.map((data , index) =>
                            <Single name={ data.name } age={ data.age } skill={ data.skill } img={ data.img } index={ index } layout={ props.layout}></Single>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;