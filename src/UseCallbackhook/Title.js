import React from 'react'

function Title() {
    console.log("Rendering the title")
    return (
        <div>
            <h1>UserCallback hook demo</h1>
        </div>
    )
}

export default React.memo(Title)
