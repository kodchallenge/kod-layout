import React from 'react'
import KodLayout from '@kod-layout'

const PlayCode = () => {
    return (
        <KodLayout.Base>
            <KodLayout.Header>
                PlayCode.io
            </KodLayout.Header>
            {/* <KodLayout.Sidebar /> */}
            <KodLayout.Row sizes={[10, 90]}>
                <KodLayout.Tab />
                <KodLayout.Column>
                    <KodLayout.Tab />
                    <KodLayout.Row>
                    <KodLayout.Tab />
                    <KodLayout.Tab />
                    </KodLayout.Row>
                </KodLayout.Column>
            </KodLayout.Row>
            <KodLayout.Footer />
        </KodLayout.Base>
    )
}

export default PlayCode