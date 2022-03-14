import React from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
    const nav = useNavigate();
    return (
        <div className="container-sm mx-auto mt-5 text-center border border-2 rounded">
            <h1>Dashboard</h1>
            <hr />
            <div className="row text-start">
                <div className="col-sm-4 p-3 dash-nav text-white">

                    <p>Message <span className="badge rounded-pill bg-info">5</span></p>
                    <hr />
                    <p>Sent </p>
                    <hr />
                    <p>Settings </p>
                    <hr />
                    <p>Search: <input id="search-box" type="text" placeholder="Search here" /></p>

                </div>
                <div className="col-sm-8 p-3 text-white dash-msg">
                    <div><p>
                        <span className="badge rounded-pill bg-success">FCS</span>
                        Faculty of Computer Science: Grad Ticket System. Thesis defense on ...
                    </p>
                    </div>
                    <div><p>
                        <span className="badge rounded-pill bg-info">Dal</span>
                        Dalhousie University: Winter term review. It's approaching the ...
                    </p>
                    </div>
                    <div><p>
                        <span className="badge rounded-pill bg-warning">DS</span>
                        Dr.Strange: New Movie. Hello, My new moview is about to release ...
                    </p>
                    </div>
                    <div><p>
                        <span className="badge rounded-pill bg-danger">TS</span>
                        Tony Stark: New Suite. I made you a new suit. Try sometime. It's ...
                    </p>
                    </div>
                    <div>
                        <p>
                            <span className="badge rounded-pill bg-success">FCS</span>
                            Faculty of Computer Science: Course Registration. Hello, the cour ...
                        </p>
                    </div>

                    <div>
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">&lt;</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <button className="mt-3 btn btn-primary mb-3"
                onClick={() => {
                    nav("/");
                }}>go to Profile</button>
        </div>
    );
}

export default Dashboard;