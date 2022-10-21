import React from 'react'
import KodLayout from '@kod-layout'

const JsFiddle = () => {
    return (
        <KodLayout.Base>
            <KodLayout.Header>
                JS FIDDLE
            </KodLayout.Header>
            {/* <KodLayout.Sidebar /> */}
            <KodLayout.Row>
                <KodLayout.Column>
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                </KodLayout.Column>
                <KodLayout.Column>
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                </KodLayout.Column>
            </KodLayout.Row>
            <KodLayout.Footer />
        </KodLayout.Base>
    )
}

export default JsFiddle