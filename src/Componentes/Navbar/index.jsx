import Cartwidget from "../CartWidget"

import Itemlistcontainer from "../Itemlistcontainer"

// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {

    return (
        <>
            <div className="navbar navbar-expand-sm navbar-light bg-light">
                {/* brand */}
                <h1 className="navbar-brand" >Brand Name</h1>
                {/* list of clickable items */}
                <Itemlistcontainer></Itemlistcontainer>
                {/* CartWidget */}
                <Cartwidget
                value = '1'
                
                ></Cartwidget>
            </div>
        </>
    )

}

export default Navbar