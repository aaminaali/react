import React from 'react';
import './App.css';
import './styleguide.css'; 

function App() {
    return <HomePage {...homePageData} />;
}

export default App;

function HomePage(props) {
    const {
        hello1,
        place,
        giesXState0fIllinois,
        password,
        username,
        login,
        disruptionLabRdbmsProject,
        giesHasAssistedTh,
        spanText1,
        spanText2,
        spanText3,
        spanText4,
        spanText5,
        spanText6,
        image1, 
        title, 
        name, 
        loginRegister, 
        dataSelection, 
        screenshot20230404At12071, 
        image2, 
        hello2, 
        copyrightGiesColl, 
        homeDataSelectionLoginRegister,
    } = props;


    return (
        <div className="container-center-horizontal">
            <div className="home-page screen">
                <div className="overlap-group">
                    <div className="rectangle-42"></div>
                    <div className="rectangle-10"></div>
                    <img className="hello-1" src="hello-1.png" alt="hello 1" />
                    <div className="place aneklatin-normal-white-30px">
                        {place}
                    </div>
                    <img className="icon-document" src="icondocument.png" alt= "icon-document"/>
                    <img className="icon-lock" src="iconunlock.png" alt="icon-lock" />
                    <p className="gies-x-state-of-illinois">
                        {giesXState0fIllinois}
                    </p>
                    <div className="rectangle-43"></div>
                    <div className="rectangle-51"></div>
                    <div className="password inter-normal-black-26px">
                    {password}
                    </div>
                    <div className="username inter-normal-black-26px">
                        {username}
                    </div>
                    <div className="rectangle-47"></div>
                    <div className="login"> 
                        {login} 
                    </div>
                    <div className= "disruption-lab-rdbms-project">
                        {disruptionLabRdbmsProject} 
                    </div>

                    <p className= "gies-has-assisted-th">
                        {giesHasAssistedTh} 
                    </p> 
        <p className="input-to-be-an-input mada-bold-black-40px">
            <span className="mada-bold-black-40px">{spanText1}</span>
            <span className="mada-normal-black-25px">{spanText2}</span>
        </p> 
        <p className="research-to-facilita mada-bold-black-40px">
            <span className="mada-bold-black-40px">{spanText3}</span>
            <span className="mada-normal-black-25px">{spanText4}</span>
        </p> 
        <p className="inform-to-inform-oth mada-bold-black-40px">
            <span className="mada-bold-black-40px">{spanText5} </span>
            <span className= "mada-normal-black-25px">{spanText6}</span>
        </p>

        <img className="image-1" src="image1.png" alt="image 1" />
        <div className= "rectangle-48"></div>
        <h1 className="title mada-bold-white-60px"> 
            {title}
        </h1>
    <div className= "name"> 
        {name} 
    </div>
    <img className="rectangle-50" src="rectangle50.png" alt="Rectangle 50" />
        {/* <img className="ellipse-1" src="ellipse-1.svg" alt="Ellipse 1" />
        <img className="ellipse-6" src="ellipse-1.svg" alt="Ellipse 6" />
        <img className="ellipse-7" src="ellipse-1.svg" alt="Ellipse 7" /> */}
        <img className="icon-globe" src="elipse6.png" alt="icon-globe" /> 
        <img className="icon-wallet" src="wallet.png" alt="icon-wallet" /> 
        <img className="icon-book" src="book.png" alt="icon-book" />
        {/* <img className="ellipse-6-1" src="6.png" alt="Ellipse 6" />  */}
        <p className="login-register aneklatin-normal-white-30px"> 
            {loginRegister} 
        </p> 
        <div className= "data-selection aneklatin-normal-white-30px"> {dataSelection}
        </div>
        {/* <img
            className="screenshot20230404At12071" 
            src="map.png"
            alt="Screenshot 2023-04-04 at 12.07 1"
        /> */}
    {/* <img className="image-2" src="bg.png" alt="image 2" />  */}
    </div>
    <div className="overlap-group1"> 
        <div className="rectangle-42" ></div>
        <img className="hello-2" src="hello-1.png" alt="hello 2" />
    <p className="copyright-gies-coll mada-normal-white-15px">
        {copyrightGiesColl} 
    </p> 
    <p className= "home-data-selection-login-register">
        {homeDataSelectionLoginRegister} 
    </p> 
    </div>
    </div> 
    </div>
    );
    }

    const homePageData = {
        hello: "hello-1.png", 
        place: "Home",
        giesXState0fIllinois: "Gies x State of Illinois",
        password: "Password",
        username: "Username",
        login: "Login", 
        disruptionLabRdbmsProject: "Disruption Lab RDBMS Project",
        giesHasAssistedTh: (
            <React.Fragment>
                <br /> 
                <br />
                Gies has assisted the State of Illinois collect data on diversity and barriers to entry in the <br />
                    state's legal cannabis market, with more data to be collected in Spring 2023. The data has three primary purposes:
                <br /> 
                <br />
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <br />
                <br /> 
                <br /> 
                <br /> 
                <br />
                The data in question is highly sensitive and contains proprietary 
            information about cannabis companies and personal information about
                the companies and their employees. As a result, Gies researchers and the 
            State of Illinois need a secure, transparent way to manage 
                user access to the data and authorization for users to view particular 
            fields
                </React.Fragment>
            ), 
            spanText1: (
            <React.Fragment>
                Input 
                <br />
            </React.Fragment>
        ), 
        spanText2: (
            <React.Fragment>
                to be an input into a <br /> 
                legally-required disparity study that the state is conducting
            </React.Fragment>
        ),
        spanText3: (
            <React.Fragment>
                Research 
                <br />
            </React.Fragment>
        ), 
        spanText4: (
        <React.Fragment> 
            to facilitate
            <br /> research by <br />
            Gies faculty
        </React.Fragment>
        ), 
        spanText5: (
            <React.Fragment>
                Inform 
                <br />
            </React.Fragment>
        ),
        spanText6: (
            <React.Fragment>
                {" "}
                to inform other <br /> 
                regulatory needs <br /> 
                of the state <br /> 
                government
            </React.Fragment>
        ),
        image1: "image-1.png", 
        title: "Contact Us", 
        name: (
            <React.Fragment>
                Justin Leiby, Ph.D 
                <br />
                jleiby2@illinois.edu
            </React.Fragment>
        ),
        loginRegister: "Login/Register",
        dataSelection: "Data Selection",
        screenshot20230404At12071: "map.png",
        // image2: "bgg.png",
        hello2: "hello-1.png",
        copyrightGiesColl: "Copyright, Gies College of Business, University of Illinois . All rights reserved." ,
        homeDataSelectionLoginRegister: "Home          Data Selection          Login/Register",
        
};

// reportWebVitals();


