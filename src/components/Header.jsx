import React from 'react';

const Header = ({ data: { body: {localtime, locationName, country}}  }) => {
    let time = localtime.split(" ");
    return ( 
        <section className="header">
           {/*  <a href="#">Menu</a> */}
            <div className="location">
                <h4 data-testid="country" >{ locationName }, { country }</h4>
                <p data-testid="time" >{ time[1] }</p>
            </div>
            {/* <a href="#">More</a> */}
        </section>
    );
}
 
export default Header;