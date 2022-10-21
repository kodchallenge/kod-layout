import React from 'react'
import KodLayout from '@kod-layout'

const CodePen = () => {
    return (
        <KodLayout.Base>
            <KodLayout.Header>
                This is Header
            </KodLayout.Header>
            <KodLayout.Column>
                <KodLayout.Row>
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                </KodLayout.Row>
                <KodLayout.Tab />
            </KodLayout.Column>
            <KodLayout.Footer>
                Like CodePen
            </KodLayout.Footer>
        </KodLayout.Base>
    )
}

export default CodePen