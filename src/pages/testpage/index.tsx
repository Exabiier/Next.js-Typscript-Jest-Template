import React from 'react'

function testPage() {
  return (
    <div>
            <h1>Hello world</h1>
            <button disabled>
                Hello World
            </button>
            <p className="blue" data-testid="paragraph-blue">
                This is a paragraph
            </p>
        </div>
  )
}

export default testPage