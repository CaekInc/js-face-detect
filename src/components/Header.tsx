import React from 'react';
import * as Nav from '@radix-ui/react-navigation-menu';

export const Header = (): JSX.Element => {
    return (
        <>
            <Nav.Root>
                <Nav.List>
                    <Nav.Item>
                        <Nav.Trigger />
                        <Nav.Content>
                            <Nav.Link />
                        </Nav.Content>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link />
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Trigger />
                        <Nav.Content>
                            <Nav.Sub>
                                <Nav.List />
                                <Nav.Viewport />
                            </Nav.Sub>
                        </Nav.Content>
                    </Nav.Item>

                    <Nav.Indicator />
                </Nav.List>

                <Nav.Viewport />
            </Nav.Root>
        </>
    )
}
