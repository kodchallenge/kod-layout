import React from 'react'
import KodLayout from '@kod-layout'

const LeetCode = () => {
    return (
        <KodLayout.Base>
            <KodLayout.Header>
                This is Header
            </KodLayout.Header>
            {/* <KodLayout.Sidebar /> */}
            <KodLayout.Row>
                <KodLayout.Tab />
                <KodLayout.Column>
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                </KodLayout.Column>
            </KodLayout.Row>
            <KodLayout.Footer />
        </KodLayout.Base>
    )
}

export default LeetCode