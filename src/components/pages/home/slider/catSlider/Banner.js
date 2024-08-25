import banner1 from "../../../../assets/banner2.png"
export default function Banner(){
    return (
        <div className="Banner-Section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src={banner1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}