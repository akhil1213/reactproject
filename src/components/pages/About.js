import React from 'react'
//functional components don't have states and are functional stateless components
//so functional components aren't dynamic you can't change it so use functional components when you just want a static page
function About(){
    return (
        //React.fragment is a hidden element and it wont show up in the dom but its needed for jsx
        <React.Fragment>
            <p>hi this another page </p>
        </React.Fragment>
    )
}
//exporting gives other components permission to import this component.
export default About;